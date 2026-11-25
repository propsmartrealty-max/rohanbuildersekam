import json
import os
import re
from html import escape

BLOG_FAQS = {
    "blog/top-luxury-projects-baner-balewadi": [
        ("How does Rohan Ekam compare to Kasturi Balmoral or Supreme Estia?", "Rohan Ekam occupies 13 contiguous riverfront acres inside PMC limits with only 9 towers and India's first Level 14 Ground Floor in the Sky, whereas peer projects sit on smaller 4–6 acre urban plots."),
        ("Which Baner-Balewadi luxury project offers direct Mula River frontage and PMC water?", "Rohan Ekam in Balewadi sits directly along the Mula River behind High Street within Pune Municipal Corporation (PMC) limits under MahaRERA P52100052298 & PR1261012502532."),
    ],
    "blog/baner-vs-balewadi-real-estate-investment-comparison": [
        ("Is Balewadi or Baner better for real estate ROI in 2026?", "Balewadi leads in contiguous riverfront township supply, Pune Metro Line 3 transit gains, and lower congestion to Hinjawadi IT Park, delivering 8.5%–11.2% historical CAGR and 3.5%–4.2% gross rental yields."),
        ("Are Balewadi luxury projects under PMC or PMRDA municipal governance?", "Prime properties behind Balewadi High Street such as Rohan Ekam lie inside Pune Municipal Corporation (PMC) limits, securing municipal water lines and urban infrastructure."),
    ],
    "blog/pune-real-estate-stamp-duty-taxes-rera-guide": [
        ("What are stamp duty and registration charges in Pune in 2026?", "Residential purchases in PMC limits attract 6% stamp duty (5% base + 1% Metro cess, with 1% rebate for registered female owners), 5% GST on under-construction flats, and registration capped at ₹30,000."),
        ("How can I verify MahaRERA registration before booking at Rohan Ekam?", "Visit maharera.mahaonline.gov.in and look up Phase 1 registration number P52100052298 and Phase 2 registration number PR1261012502532."),
    ],
    "blog/pune-real-estate-west-vs-east-market-analysis": [
        ("Should IT buyers invest in Baner-Balewadi (West Pune) or Kharadi (East Pune)?", "West Pune's Baner-Balewadi corridor benefits from simultaneous access to Hinjawadi IT Park (12–15 mins), Mumbai–Pune Expressway (5 mins), and Metro Line 3, with scarce riverfront land driving resilient price appreciation."),
        ("What rental yields do 2 & 3 BHK luxury apartments earn in Balewadi?", "Grade-A gated communities near Balewadi High Street generate 3.5% to 4.2% annual gross rental yield backed by senior tech and MNC corporate tenants."),
    ],
    "blog/2-bhk-3-bhk-4-bhk-carpet-area-price-comparison-balewadi": [
        ("What is the usable carpet area for 2, 3 & 4 BHK units at Rohan Ekam?", "Rohan Ekam offers 850–920 sq.ft. (2 BHK), 1,180–1,450 sq.ft. (3 BHK), and 1,850–2,200 sq.ft. (4 BHK Sky Suites) engineered with 0% corridor wastage under PLUS Home design."),
        ("What is the starting all-in price budget for Rohan Ekam Balewadi?", "Base prices start around ₹1.45 Cr* for 2 BHK, ₹1.95 Cr* for 3 BHK, and ₹2.75 Cr* for 4 BHK Sky Suites before statutory GST, 6% stamp duty, and registration."),
    ],
    "blog/nri-real-estate-investment-guide-pune-balewadi": [
        ("Can NRIs repatriate sale proceeds from Balewadi apartments abroad?", "Yes. When purchased via NRE or FCNR inward banking channels under FEMA regulations, NRIs and OCIs may repatriate principal funds up to two residential properties subject to Form 15CA/15CB."),
        ("Can an NRI complete Rohan Ekam registration without flying to Pune?", "Yes. NRIs can execute a consularized Special Power of Attorney (PoA) abroad and adjudicate it in Pune within 90 days for registration."),
    ],
}

for slug, faqs in BLOG_FAQS.items():
    for path in [f"public/{slug}.html", f"public/{slug}/index.html"]:
        if not os.path.exists(path):
            continue
        with open(path, "r", encoding="utf-8") as f:
            html = f.read()

        # Skip if FAQPage already injected
        if '"@type": "FAQPage"' in html:
            continue

        # 1. Inject visible FAQ HTML right before inquiry-strip
        faq_items_html = "".join(
            f'<div style="border-bottom: 1px solid #D6D3CD; padding: 14px 0;"><h3 style="margin: 0 0 6px 0; font-size: 16px; color: #1C1917;">{escape(q)}</h3><p style="margin: 0; font-size: 14px; color: #44403C;">{escape(a)}</p></div>'
            for q, a in faqs
        )
        visible_block = f'\n        <section style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #D6D3CD;">\n          <h2 style="margin-top: 0;">Quick Buyer FAQ</h2>\n          {faq_items_html}\n        </section>\n'
        html = html.replace('<div class="inquiry-strip">', visible_block + '\n        <div class="inquiry-strip">', 1)

        # 2. Inject FAQPage into JSON-LD @graph
        ld_m = re.search(r'(<script type="application/ld\+json">\s*)(\{.*?\})(\s*</script>)', html, re.S)
        if ld_m:
            data = json.loads(ld_m.group(2))
            faq_node = {
                "@type": "FAQPage",
                "@id": f"https://rohanbuildersekam.com/{slug}#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": q,
                        "acceptedAnswer": {"@type": "Answer", "text": a},
                    }
                    for q, a in faqs
                ],
            }
            if "@graph" in data:
                data["@graph"].append(faq_node)
            else:
                data = {"@context": "https://schema.org", "@graph": [data, faq_node]}
            html = html[:ld_m.start(2)] + json.dumps(data, indent=2, ensure_ascii=False) + html[ld_m.end(2):]

        with open(path, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"Injected visible FAQ + FAQPage schema into {path}")
