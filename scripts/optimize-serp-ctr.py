import glob
import json
import os
import re

# 1. Exact CTR-engineered Title (50-60 chars) and Meta Description (138-156 chars) map
SERP_MAP = {
    "index.html": (
        "Rohan Ekam Balewadi | Luxury 2, 3 & 4 BHK Flats ₹1.45 Cr*",
        "Official Rohan Ekam showcase in Balewadi-Baner, Pune. 13-acre Mula riverfront flats with Level 14 Sky Ground. 2, 3 & 4 BHK from ₹1.45 Cr*. View Plans →",
    ),
    "flats-in-balewadi": (
        "Flats in Balewadi Pune | Rohan Ekam Riverfront ₹1.45 Cr*",
        "Explore 2, 3 & 4 BHK flats in Balewadi at Rohan Ekam along Mula River. 13-acre green enclave, Level 14 Sky Ground & 5 mins to High Street. View Prices →",
    ),
    "2-bhk-flats-in-balewadi": (
        "2 BHK Flats in Balewadi | Rohan Ekam Plans Price ₹1.45 Cr*",
        "Spacious 2 BHK flats in Balewadi (850–920 sq.ft carpet) at Rohan Ekam. 0% corridor waste, wind-tunnel ventilation & Mula River views. Download 2 BHK Plan →",
    ),
    "3-bhk-flats-in-balewadi": (
        "3 BHK Flats in Balewadi | Rohan Ekam Riverfront ₹1.95 Cr*",
        "Luxury 3 BHK flats in Balewadi (1,180–1,450 sq.ft) at Rohan Ekam. Dual balconies, Level 14 Sky Ground & 3-side open layouts. Get 3 BHK Price & Brochure →",
    ),
    "4-bhk-flats-in-balewadi": (
        "4 BHK Sky Suites Balewadi | Rohan Ekam Penthouses ₹2.75 Cr*",
        "Ultra-luxury 4 BHK flats & duplex penthouses in Balewadi (1,850–2,200 sq.ft) at Rohan Ekam. 270° Mula River vistas & private decks. Book VIP Tour Today →",
    ),
    "price-and-cost-sheet": (
        "Rohan Ekam Price & Cost Sheet 2026 | ₹1.45 Cr* Onwards",
        "2026 Rohan Ekam Balewadi price list & all-inclusive cost sheet: 2 BHK ₹1.45 Cr*, 3 BHK ₹1.95 Cr*, 4 BHK ₹2.75 Cr*, 6% stamp duty & GST. Get Cost Sheet →",
    ),
    "location-balewadi-high-street": (
        "Rohan Ekam Location | 5 Mins Balewadi High Street & Metro",
        "Explore Rohan Ekam Balewadi connectivity: 5 mins Balewadi High Street, 4 mins Metro Line 3 & 12 mins Hinjawadi IT Park on Mula River. View Route Map →",
    ),
    "rohan-builders-pune-projects": (
        "Rohan Builders Pune Projects | Rohan Ekam Flagship Balewadi",
        "Explore CRISIL DA2+ Rohan Builders projects in Pune with 30+ years legacy. Flagship Rohan Ekam Balewadi 13-acre riverfront homes. View Track Record →",
    ),
    "luxury-flats-in-baner-balewadi": (
        "Luxury Flats in Baner Balewadi | Rohan Ekam From ₹1.45 Cr*",
        "Compare luxury flats in Baner-Balewadi at Rohan Ekam. 13-acre Mula riverfront, Level 14 Sky Ground & Ar. Sanjay Mohe design. MahaRERA P52100052298. Plans →",
    ),
    "riverfront-flats-in-pune": (
        "Riverfront Flats in Pune | Rohan Ekam 13-Acre Sanctuary",
        "Rare 13-acre Mula riverfront flats in Balewadi, West Pune with 1.2 km boardwalk & Level 14 Sky Ground by Ar. Sanjay Mohe. 2, 3 & 4 BHK from ₹1.45 Cr* →",
    ),
    "flats-in-baner-pashan-link-road": (
        "Flats in Baner Pashan Link Road | Rohan Ekam From ₹1.45 Cr*",
        "Upgrading near Baner-Pashan Link Road? Discover Rohan Ekam 13-acre riverfront flats 6 mins away with PMC water & Level 14 Sky Ground. View Floor Plans →",
    ),
    "flats-near-hinjawadi-it-park": (
        "Flats Near Hinjawadi IT Park | 12 Mins to Rohan Ekam Pune",
        "Skip highway traffic—12 mins from Hinjawadi Phase 1 IT Park to Rohan Ekam Balewadi riverfront. PMC water, 2/3/4 BHK from ₹1.45 Cr*. Check Commute & Plans →",
    ),
    "flats-in-mahalunge-pune": (
        "Flats Near Mahalunge Pune | Low-Density PMC Homes ₹1.45 Cr*",
        "Compare Mahalunge townships vs Rohan Ekam Balewadi: PMC limits, 9 towers on 13 riverfront acres & 0% waste PLUS homes from ₹1.45 Cr*. Compare Now →",
    ),
    "flats-in-baner": (
        "Flats in Baner Pune | 2, 3 & 4 BHK Luxury From ₹1.45 Cr*",
        "Searching luxury flats in Baner Pune? Rohan Ekam lies 7 mins off Baner Road on 13 riverfront acres with Ar. Sanjay Mohe Sky Ground. Explore Layouts →",
    ),
    "pune-luxury-real-estate": (
        "Pune Luxury Real Estate 2026 | Rohan Ekam Riverfront Homes",
        "Explore West Pune luxury real estate benchmarks. Why HNIs choose Rohan Ekam Balewadi: 13 riverfront acres, Level 14 Sky Ground & CRISIL DA2+ developer →",
    ),
    "blog": (
        "Rohan Ekam Real Estate Blog & Pune Market Research [2026]",
        "Read 12 data-backed guides on Baner-Balewadi luxury apartments, Metro Line 3 ROI, Pune stamp duty, NRI FEMA rules & Rohan Ekam architecture →",
    ),
    "blog/top-luxury-projects-baner-balewadi": (
        "Top Luxury Projects in Baner-Balewadi 2026 | Comparison",
        "Unbiased 2026 comparison of top luxury projects in Baner & Balewadi: Rohan Ekam vs Kasturi Balmoral vs Supreme Estia vs ANP. Price & RERA Matrix →",
    ),
    "blog/pune-real-estate-west-vs-east-market-analysis": (
        "West vs East Pune Real Estate 2026 | Baner vs Kharadi ROI",
        "Data-driven 2026 comparison: Baner-Balewadi (West Pune) vs Kharadi-Viman Nagar (East Pune). Property prices, rental yield, Metro ROI & appreciation →",
    ),
    "blog/pune-real-estate-stamp-duty-taxes-rera-guide": (
        "Pune Stamp Duty, Registration & GST Guide 2026 | MahaRERA",
        "Complete 2026 Maharashtra tax calculator: 6% Pune stamp duty (1% women rebate), ₹30,000 registration cap, 5% GST & MahaRERA buyer verification checklist →",
    ),
    "blog/baner-vs-balewadi-real-estate-investment-comparison": (
        "Baner vs Balewadi Investment 2026 | Price, Yield & ROI",
        "Baner vs Balewadi real estate comparison: price per sq.ft, 4.2% rental yield, PMC water supply, Mula riverfront scarcity & High Street growth →",
    ),
    "blog/pune-luxury-real-estate-market-trends-2026-2027": (
        "Pune Luxury Real Estate Trends 2026–2027 | Market Report",
        "Where are Pune HNIs buying in 2026–2027? Rising demand for 10+ acre riverfront townships, 3/4 BHK sky suites & low-density Baner-Balewadi homes →",
    ),
    "blog/luxury-penthouses-sky-villas-baner-balewadi": (
        "Luxury Penthouses & Sky Villas in Baner-Balewadi [2026]",
        "Inside West Pune's finest 4 BHK sky villas & duplex penthouses along the Mula River. Double-height decks, private foyers & Level 14 Sky Ground →",
    ),
    "blog/why-balewadi-is-pune-top-luxury-real-estate-hub": (
        "Why Balewadi is Pune's #1 Luxury Real Estate Hub [2026]",
        "How Balewadi High Street, PMC civic limits, Metro Line 3 & Mula River proximity transformed Balewadi into West Pune's top luxury growth hub →",
    ),
    "blog/ground-floor-in-the-sky-architectural-monograph": (
        "Level 14 Ground Floor in the Sky | Ar. Sanjay Mohe Design",
        "Architectural deep dive into Rohan Ekam's suspended Level 14 Sky Ground connecting 9 towers at 150 ft with breeze corridors & yoga decks →",
    ),
    "blog/rohan-plus-homes-design-science-cross-ventilation": (
        "Rohan PLUS Homes Design Science | Zero Wastage Floor Plans",
        "How Rohan PLUS architecture delivers 300+ lux daylight, aerodynamic Venturi cross-ventilation & 0% corridor wastage across every apartment →",
    ),
    "blog/nri-real-estate-investment-guide-pune-balewadi": (
        "NRI Guide to Buying Flats in Balewadi Pune | FEMA & Tax",
        "Step-by-step 2026 NRI property buying manual: NRE/NRO remittance, principal repatriation, PoA execution & 4% IT-corridor rental yields in Balewadi →",
    ),
    "blog/balewadi-high-street-metro-line-3-connectivity-boom": (
        "Balewadi High Street & Metro Line 3 Impact on Home Prices",
        "How Pune Metro Line 3 Balewadi Station & Hinjawadi IT bypass are driving double-digit residential appreciation along Balewadi High Street →",
    ),
    "blog/2-bhk-3-bhk-4-bhk-carpet-area-price-comparison-balewadi": (
        "2, 3 & 4 BHK Carpet Area & Price Guide Balewadi [2026]",
        "Compare RERA carpet areas, room dimensions, per-sq.ft rates & all-in budgets for 2, 3 & 4 BHK apartments in Balewadi & Baner (₹1.45 Cr*+) →",
    ),
    "disclaimer": (
        "MahaRERA Disclaimer & Partner Disclosure | Rohan Ekam",
        "Official MahaRERA project registration details (P52100052298, PR1261012502532) & authorized channel partner Propsmart Realty (A031262401295) →",
    ),
    "privacy-policy": (
        "Privacy Policy & DPDP 2023 Compliance | Rohan Ekam Pune",
        "Read our DPDP Act 2023 privacy policy for Rohan Ekam Balewadi advisory portal operated by authorized MahaRERA partner Propsmart Realty →",
    ),
    "terms": (
        "Terms & Conditions | Rohan Ekam Balewadi Advisory Portal",
        "Review terms of use, RERA pricing disclosures, and intellectual property guidelines for Rohan Ekam Balewadi portal by Propsmart Realty →",
    ),
}

def replace_meta_tags(content, new_title, new_desc):
    # Escape & safely if needed, wait: keep raw clean UTF-8 without HTML entities inside JSON
    safe_title_html = new_title.replace("&", "&amp;")
    safe_desc_html = new_desc.replace("&", "&amp;")

    content = re.sub(
        r"<title>.*?</title>",
        f"<title>{safe_title_html}</title>",
        content,
        count=1,
        flags=re.S,
    )
    content = re.sub(
        r'<meta\s+name="description"\s+content="[^"]*"\s*/?>',
        f'<meta name="description" content="{safe_desc_html}" />',
        content,
        count=1,
        flags=re.I,
    )
    content = re.sub(
        r'<meta\s+property="og:title"\s+content="[^"]*"\s*/?>',
        f'<meta property="og:title" content="{safe_title_html}" />',
        content,
        count=1,
        flags=re.I,
    )
    content = re.sub(
        r'<meta\s+property="og:description"\s+content="[^"]*"\s*/?>',
        f'<meta property="og:description" content="{safe_desc_html}" />',
        content,
        count=1,
        flags=re.I,
    )
    content = re.sub(
        r'<meta\s+name="twitter:title"\s+content="[^"]*"\s*/?>',
        f'<meta name="twitter:title" content="{safe_title_html}" />',
        content,
        count=1,
        flags=re.I,
    )
    content = re.sub(
        r'<meta\s+name="twitter:description"\s+content="[^"]*"\s*/?>',
        f'<meta name="twitter:description" content="{safe_desc_html}" />',
        content,
        count=1,
        flags=re.I,
    )
    return content

updated = 0
for key, (title, desc) in SERP_MAP.items():
    assert 48 <= len(title) <= 62, f"Title out of range ({len(title)}): {title}"
    assert 130 <= len(desc) <= 160, f"Desc out of range ({len(desc)}): {desc}"
    if key == "index.html":
        targets = ["index.html"]
    else:
        targets = [f"public/{key}.html", f"public/{key}/index.html"]
    for p in targets:
        if os.path.exists(p):
            with open(p, "r", encoding="utf-8") as f:
                c = f.read()
            nc = replace_meta_tags(c, title, desc)
            # Also update dateModified in JSON-LD to 2026-11-25
            nc = re.sub(r'"dateModified":\s*"2026-11-\d{2}T[^"]+"', '"dateModified": "2026-11-25T07:30:00+05:30"', nc)
            with open(p, "w", encoding="utf-8") as f:
                f.write(nc)
            updated += 1

print(f"Optimized Title + Description CTR tags across {updated} HTML files!")

# 2. Enrich index.html JSON-LD with VideoObject Key Moments (hasPart) & priceValidUntil
with open("index.html", "r", encoding="utf-8") as f:
    idx_html = f.read()

ld_match = re.search(r'(<script type="application/ld\+json">\s*)(\{.*?\})(\s*</script>)', idx_html, re.S)
assert ld_match, "Could not find JSON-LD in index.html"
graph_data = json.loads(ld_match.group(2))

clips_by_vid = {
    "5Z1m4PUAnhM": [
        {"@type": "Clip", "name": "Balewadi High Street & Mula River Corridor", "startOffset": 0, "endOffset": 45, "url": "https://www.youtube.com/watch?v=5Z1m4PUAnhM&t=0"},
        {"@type": "Clip", "name": "Pune Metro Line 3 & Hinjawadi IT Park Bypass", "startOffset": 45, "endOffset": 95, "url": "https://www.youtube.com/watch?v=5Z1m4PUAnhM&t=45"},
    ],
    "TMtQ0Jlb5kQ": [
        {"@type": "Clip", "name": "Ar. Sanjay Mohe Masterplan Vision", "startOffset": 0, "endOffset": 55, "url": "https://www.youtube.com/watch?v=TMtQ0Jlb5kQ&t=0"},
        {"@type": "Clip", "name": "Level 14 Ground Floor in the Sky Suspension Concept", "startOffset": 55, "endOffset": 130, "url": "https://www.youtube.com/watch?v=TMtQ0Jlb5kQ&t=55"},
    ],
    "UdA6Qm7GVsI": [
        {"@type": "Clip", "name": "13-Acre Riverfront Entrance Plaza", "startOffset": 0, "endOffset": 50, "url": "https://www.youtube.com/watch?v=UdA6Qm7GVsI&t=0"},
        {"@type": "Clip", "name": "Level 14 Sky Bridges & Amenities Deck", "startOffset": 50, "endOffset": 120, "url": "https://www.youtube.com/watch?v=UdA6Qm7GVsI&t=50"},
        {"@type": "Clip", "name": "2, 3 & 4 BHK PLUS Homes Interior Walkthrough", "startOffset": 120, "endOffset": 210, "url": "https://www.youtube.com/watch?v=UdA6Qm7GVsI&t=120"},
    ],
}

for node in graph_data.get("@graph", []):
    if node.get("@type") == "Product" and isinstance(node.get("offers"), dict):
        node["offers"]["priceValidUntil"] = "2026-12-31"
    elif node.get("@type") == "VideoObject":
        embed = node.get("embedUrl", "")
        for vid_id, clips in clips_by_vid.items():
            if vid_id in embed:
                node["hasPart"] = clips
    elif node.get("@type") == "RealEstateListing":
        node["datePosted"] = "2026-11-25T07:30:00+05:30"

new_ld = json.dumps(graph_data, indent=2, ensure_ascii=False)
idx_html = idx_html[:ld_match.start(2)] + new_ld + idx_html[ld_match.end(2):]
with open("index.html", "w", encoding="utf-8") as f:
    f.write(idx_html)

print("Enriched index.html JSON-LD with VideoObject Key Moments & Offer priceValidUntil!")
