import json
import os
from html import escape

CLUSTER_PAGES = [
    {
        "slug": "rohan-ekam-brochure-floor-plans",
        "breadcrumb": "Brochure PDF & Floor Plans",
        "badge": "Verified Blueprints & Specifications [2026]",
        "title": "Rohan Ekam Brochure PDF & Floor Plans | 2, 3, 4 BHK [2026]",
        "desc": "Download official Rohan Ekam Balewadi Brochure PDF, Master Plan & verified 2, 3 & 4 BHK carpet area floor plans with room dimensions. Get Plans Now →",
        "keywords": "rohan ekam brochure, rohan ekam brochure pdf, rohan ekam floor plans, rohan ekam 2 bhk floor plan, rohan ekam 3 bhk floor plan, rohan ekam 4 bhk floor plan, rohan ekam master plan, rohan ekam carpet area",
        "h1": "Rohan Ekam Balewadi Brochure PDF, Master Plan & Floor Plans",
        "lead": "Access verified 2 BHK, 3 BHK & 4 BHK architectural floor plan layouts, RERA carpet areas, zero-corridor PLUS home dimensions, and the 13-acre riverfront master plan designed by Ar. Sanjay Mohe.",
        "image": "https://rohanbuildersekam.com/images/optimized/master-plan.webp",
        "body_html": """
          <div class="card">
            <h2>Official Downloads &amp; Architectural Plan Dossier</h2>
            <p>Prospective homebuyers and NRI investors evaluating <strong>Rohan Ekam, Balewadi</strong> can review official MahaRERA-aligned project specifications, room dimensions, tower orientations, and statutory clearances directly below:</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin: 20px 0;">
              <div style="background: #F5F2EB; padding: 16px; border-radius: 16px; border: 1px solid #D6D3CD;">
                <h3 style="margin-top:0; font-size: 16px;">13-Acre Master Plan</h3>
                <img src="/images/optimized/master-plan.webp" alt="Rohan Ekam 13-Acre Master Plan Blueprint" width="600" height="450" loading="lazy" style="width: 100%; height: auto; border-radius: 10px; margin-bottom: 10px;" />
                <p style="font-size: 13px; margin-bottom: 8px;">9 high-rise towers connected via Level 14 Sky Bridges along the Mula Riverfront.</p>
                <a href="https://rohanbuilders.com/wp-content/uploads/2023/09/Rohan-Ekam-Brochure.pdf" target="_blank" rel="noreferrer" class="btn-outline" style="min-height: 44px;">Download Brochure PDF</a>
              </div>
              <div style="background: #F5F2EB; padding: 16px; border-radius: 16px; border: 1px solid #D6D3CD;">
                <h3 style="margin-top:0; font-size: 16px;">2 BHK Typical Layout</h3>
                <img src="/images/optimized/plan-2bhk.webp" alt="Rohan Ekam 2 BHK Carpet Area Floor Plan" width="600" height="450" loading="lazy" style="width: 100%; height: auto; border-radius: 10px; margin-bottom: 10px;" />
                <p style="font-size: 13px; margin-bottom: 8px;">850 – 920 sq.ft. carpet area with 21'0&quot; × 12'6&quot; living-dining &amp; river deck.</p>
                <a href="/2-bhk-flats-in-balewadi" class="btn-outline" style="min-height: 44px;">Inspect 2 BHK Plan</a>
              </div>
              <div style="background: #F5F2EB; padding: 16px; border-radius: 16px; border: 1px solid #D6D3CD;">
                <h3 style="margin-top:0; font-size: 16px;">3 BHK Corner Layout</h3>
                <img src="/images/optimized/plan-3bhk-2.webp" alt="Rohan Ekam 3 BHK Floor Plan Layout" width="600" height="450" loading="lazy" style="width: 100%; height: auto; border-radius: 10px; margin-bottom: 10px;" />
                <p style="font-size: 13px; margin-bottom: 8px;">1,180 – 1,450 sq.ft. three-side open layout with dual river-facing balconies.</p>
                <a href="/3-bhk-flats-in-balewadi" class="btn-outline" style="min-height: 44px;">Inspect 3 BHK Plans</a>
              </div>
              <div style="background: #F5F2EB; padding: 16px; border-radius: 16px; border: 1px solid #D6D3CD;">
                <h3 style="margin-top:0; font-size: 16px;">4 BHK Sky Suite Duplex</h3>
                <img src="/images/optimized/plan-4bhk-2.webp" alt="Rohan Ekam 4 BHK Sky Suite Floor Plan" width="600" height="450" loading="lazy" style="width: 100%; height: auto; border-radius: 10px; margin-bottom: 10px;" />
                <p style="font-size: 13px; margin-bottom: 8px;">1,850 – 2,200 sq.ft. luxury floor plates with only 2 units per floor &amp; staff quarters.</p>
                <a href="/4-bhk-flats-in-balewadi" class="btn-outline" style="min-height: 44px;">Inspect 4 BHK Plans</a>
              </div>
            </div>

            <h3>RERA Carpet Area &amp; Room Dimension Breakdown</h3>
            <table class="spec-table">
              <thead>
                <tr>
                  <th>Unit Configuration</th>
                  <th>RERA Carpet Area</th>
                  <th>Living &amp; Dining Salon</th>
                  <th>Master Suite</th>
                  <th>Indicative Price*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>2 BHK Luxury (PLUS)</strong></td>
                  <td>850 – 920 sq.ft.</td>
                  <td>21'0&quot; × 12'6&quot;</td>
                  <td>14'6&quot; × 11'0&quot;</td>
                  <td>₹1.45 Cr* onwards</td>
                </tr>
                <tr>
                  <td><strong>3 BHK Premium (Type 1)</strong></td>
                  <td>1,180 – 1,280 sq.ft.</td>
                  <td>24'6&quot; × 13'0&quot;</td>
                  <td>15'6&quot; × 12'0&quot;</td>
                  <td>₹1.95 Cr* onwards</td>
                </tr>
                <tr>
                  <td><strong>3 BHK Grand Corner (Type 2)</strong></td>
                  <td>1,350 – 1,450 sq.ft.</td>
                  <td>26'4&quot; × 13'6&quot;</td>
                  <td>16'0&quot; × 12'6&quot;</td>
                  <td>₹2.25 Cr* onwards</td>
                </tr>
                <tr>
                  <td><strong>4 BHK Sky Suite Duplex</strong></td>
                  <td>1,850 – 2,200 sq.ft.</td>
                  <td>34'0&quot; × 16'0&quot;</td>
                  <td>19'6&quot; × 14'0&quot;</td>
                  <td>₹2.75 Cr* onwards</td>
                </tr>
              </tbody>
            </table>
          </div>
        """,
        "faqs": [
            ("Where can I download the official Rohan Ekam Balewadi brochure PDF?", "You can download the official Rohan Ekam Brochure PDF and quick architectural dossier directly on this page or from our verified Documents portal on rohanbuildersekam.com, or request the 2026 cost-sheet bundle via WhatsApp (+91 774409295)."),
            ("Do Rohan Ekam floor plans eliminate corridor wastage?", "Yes. Engineered on Rohan's PLUS Homes philosophy (Perfect Ventilation, Lively Light, Utmost Privacy, Smart Space), Rohan Ekam eliminates long internal passageways, delivering nearly 100% usable living carpet area."),
            ("How can I verify the floor plan layouts under MahaRERA?", "All sanctioned building plans and carpet areas are filed under MahaRERA Phase 1 (P52100052298) and Phase 2 (PR1261012502532) at maharera.mahaonline.gov.in."),
        ],
    },
    {
        "slug": "rohan-ekam-possession-reviews-rera",
        "breadcrumb": "Possession, Reviews & MahaRERA",
        "badge": "Developer Track Record & Verification [2026]",
        "title": "Rohan Ekam Reviews, Possession & MahaRERA | Track Record",
        "desc": "Check Rohan Ekam Balewadi possession dates, MahaRERA P52100052298 verification, CRISIL DA2+ rating & Rohan Builders customer reviews before booking →",
        "keywords": "rohan ekam reviews, rohan ekam possession date, rohan ekam latest updates, rohan builders reviews, rohan builders customer reviews, rohan builders construction quality, rohan ekam rera, rohan ekam maharera",
        "h1": "Rohan Ekam Reviews, Possession Schedule & MahaRERA Verification",
        "lead": "Evaluate Rohan Ekam Balewadi construction progress, MahaRERA Phase 1 & Phase 2 compliance, CRISIL DA2+ engineering credentials, and why homebuyers trust Rohan Builders across 15+ million sq.ft delivered.",
        "image": "https://rohanbuildersekam.com/images/optimized/qr-phase1.webp",
        "body_html": """
          <div class="card">
            <h2>MahaRERA Registration &amp; Statutory Clearances</h2>
            <p>Transparency and statutory safety are the cornerstone of <strong>Rohan Builders (India) Pvt. Ltd.</strong> Before evaluating pricing or tower selection, buyers can verify every statutory sanction independently:</p>
            <ul>
              <li><strong>MahaRERA Phase 1 Registration:</strong> <code>P52100052298</code> (Target Possession: December 2027 onwards per RERA filing)</li>
              <li><strong>MahaRERA Phase 2 Registration:</strong> <code>PR1261012502532</code> (Extended Riverfront Phases)</li>
              <li><strong>Environmental Clearance:</strong> Granted via SEIAA Maharashtra (EC Copy Balewadi 09.01.2023)</li>
              <li><strong>Civic Authority:</strong> Pune Municipal Corporation (PMC limits) ensuring permanent municipal water supply and urban infrastructure</li>
              <li><strong>Authorized Channel Partner:</strong> Propsmart Realty (MahaRERA Reg: <code>A031262401295</code>)</li>
            </ul>

            <h3>Rohan Builders Construction Quality &amp; Track Record</h3>
            <p>Originally established in 1993 as an infrastructure contracting firm before pioneering residential development, Rohan Builders holds the prestigious <strong>CRISIL DA2+ developer rating</strong>. Across completed flagship Pune communities including Rohan Leher (Baner), Rohan Kritika (Sinhagad Road), Rohan Abhilasha, and Rohan Viti (Wakad), long-term residents consistently highlight:</p>
            <ul>
              <li><strong>In-House Structural Execution:</strong> Dedicated engineering oversight using ALUFORM / shear-wall modern construction systems for crisp finishes and seismic resilience.</li>
              <li><strong>Post-Handover Longevity:</strong> Cross-ventilated PLUS layouts maintain cooler indoor microclimates, lower electrical HVAC bills, and high tenant occupancy in resale/rental markets.</li>
              <li><strong>On-Schedule Delivery Commitment:</strong> Disciplined construction-linked milestones aligned strictly with MahaRERA escrow transparency.</li>
            </ul>

            <table class="spec-table">
              <thead>
                <tr>
                  <th>Verification Benchmark</th>
                  <th>Rohan Ekam Status</th>
                  <th>Why It Matters for Buyers</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Creditworthiness</strong></td>
                  <td>CRISIL DA2+ Rated Developer</td>
                  <td>Demonstrates zero liquidity stress &amp; reliable project execution</td>
                </tr>
                <tr>
                  <td><strong>Possession Timeline</strong></td>
                  <td>Phase 1: Dec 2027 (per RERA)</td>
                  <td>RERA-enforceable handover timeline protects buyer capital</td>
                </tr>
                <tr>
                  <td><strong>Master Architect</strong></td>
                  <td>Ar. Sanjay Mohe (Mindspace)</td>
                  <td>Award-winning climatic &amp; daylight design preserves long-term resale value</td>
                </tr>
                <tr>
                  <td><strong>Home Loan APF</strong></td>
                  <td>SBI, HDFC, ICICI, Axis, Kotak</td>
                  <td>Title deed &amp; approvals pre-vetted by India's largest mortgage banks</td>
                </tr>
              </tbody>
            </table>
          </div>
        """,
        "faqs": [
            ("What is the possession date for Rohan Ekam Balewadi?", "As per the official MahaRERA filing, Rohan Ekam Phase 1 (P52100052298) targets possession from December 2027 onwards, with construction managed in-house by Rohan Builders."),
            ("What is Rohan Builders' reputation and construction quality review in Pune?", "Founded in 1993 and carrying a CRISIL DA2+ rating, Rohan Builders is widely respected in Pune and Bengaluru for punctual handovers, durable concrete engineering, and zero-corridor-waste PLUS Homes."),
            ("Is Rohan Ekam pre-approved for home loans by nationalized banks?", "Yes. Major lenders including State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, and Tata Capital have approved project financing for Rohan Ekam."),
        ],
    },
    {
        "slug": "new-launch-projects-in-balewadi-baner",
        "breadcrumb": "New Launch Projects in Balewadi-Baner",
        "badge": "2026–2027 West Pune New Launch Matrix",
        "title": "New Launch Projects in Balewadi Baner 2026 | ₹1.45 Cr*+",
        "desc": "Searching new residential projects in Balewadi & Baner? Compare under-construction launches vs Rohan Ekam 13-acre Mula riverfront with L14 Sky Ground →",
        "keywords": "new residential projects in balewadi, upcoming projects in balewadi, new launch projects in balewadi, under construction projects in balewadi, best residential projects in balewadi, premium residential projects baner",
        "h1": "New Launch &amp; Upcoming Residential Projects in Balewadi–Baner [2026]",
        "lead": "Evaluate newly launched and under-construction residential projects across Baner and Balewadi. Compare land acreage, tower density, PMC vs PMRDA water governance, and pricing per sq.ft.",
        "image": "https://rohanbuildersekam.com/images/optimized/gallery-01.webp",
        "body_html": """
          <div class="card">
            <h2>What Defines the Best New Launch Project in Balewadi?</h2>
            <p>With high-rise land parcels in Baner becoming fragmented and pricey, discerning homebuyers comparing <strong>new residential projects in Balewadi</strong> increasingly filter out cramped 1-acre or 2-acre single towers in favor of master-planned riverfront ecosystems inside Pune Municipal Corporation (PMC) limits.</p>
            <p><strong>Rohan Ekam</strong> stands apart among upcoming and under-construction launches by combining three rare attributes rarely found together in West Pune:</p>
            <ol>
              <li><strong>13 Contiguous Acres Inside PMC Limits:</strong> Most large 10+ acre launches sit outside municipal boundaries in Mahalunge or Marunji (PMRDA). Rohan Ekam delivers full township openness right inside PMC Balewadi behind High Street.</li>
              <li><strong>80%+ Open Space &amp; Low Density:</strong> Only 9 boutique high-rise towers occupy the 13-acre estate, preserving sweeping Mula River vistas and central sloping amphitheatre lawns.</li>
              <li><strong>Architectural Value Protection:</strong> India's first <em>Level 14 Ground Floor in the Sky</em> creates an irreplaceable luxury differentiation in future resale and rental markets.</li>
            </ol>

            <h3>New Launch &amp; Under-Construction Buyer Comparison Matrix</h3>
            <table class="spec-table">
              <thead>
                <tr>
                  <th>Project Category in West Pune</th>
                  <th>Typical Land Footprint</th>
                  <th>Municipal Jurisdiction</th>
                  <th>Ticket Size Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Rohan Ekam (Balewadi High Street Rear)</strong></td>
                  <td>13 Contiguous Riverfront Acres</td>
                  <td>PMC Limits (Municipal Water)</td>
                  <td>₹1.45 Cr* – ₹3.10 Cr*</td>
                </tr>
                <tr>
                  <td><strong>Standalone Boutique Baner Towers</strong></td>
                  <td>0.8 – 2.5 Acres</td>
                  <td>PMC Limits</td>
                  <td>₹1.55 Cr* – ₹2.80 Cr*</td>
                </tr>
                <tr>
                  <td><strong>High-Density Mahalunge Townships</strong></td>
                  <td>80 – 100+ Multi-Phase Acres</td>
                  <td>PMRDA Jurisdiction</td>
                  <td>₹95 L* – ₹1.85 Cr*</td>
                </tr>
              </tbody>
            </table>
          </div>
        """,
        "faqs": [
            ("Which is the best new residential project in Balewadi in 2026?", "Rohan Ekam by Rohan Builders is consistently ranked among the top new launches in Balewadi due to its 13-acre Mula Riverfront footprint, PMC municipal jurisdiction, CRISIL DA2+ rating, and Level 14 Ground Floor in the Sky."),
            ("Should I buy an under-construction new launch or ready possession flat in Balewadi?", "Buying in an early-to-mid construction phase at a Grade-A CRISIL DA2+ developer project like Rohan Ekam locks lower entry rates with milestone payment flexibility and captures appreciation triggered by Pune Metro Line 3 commissioning."),
            ("What starting budget is required for luxury new launch 2 & 3 BHK flats in Balewadi?", "Grade-A PMC-limit 2 BHK luxury flats start around ₹1.45 Cr* (850–920 sq.ft carpet), while spacious 3 BHK riverfront layouts start from ₹1.95 Cr*."),
        ],
    },
    {
        "slug": "flats-near-balewadi-stadium-wakad-aundh",
        "breadcrumb": "Flats Near Balewadi Stadium, Wakad, Sus & Aundh",
        "badge": "West Pune Micro-Corridor Transit Guide",
        "title": "Flats Near Balewadi Stadium, Wakad, Sus & Aundh | Ekam",
        "desc": "Explore flats near Balewadi Stadium, Wakad, Aundh & Sus Road along NH-48 & Pune Metro Line 3. Rohan Ekam 13-acre riverfront homes from ₹1.45 Cr* →",
        "keywords": "flats near balewadi stadium, flats near wakad, flats near aundh, flats near sus road, residential projects near mumbai bangalore highway, properties near pune metro, flats near baner road",
        "h1": "Luxury Flats Near Balewadi Stadium, Wakad, Sus Road &amp; Aundh",
        "lead": "Strategically anchored behind Balewadi High Street just 3 minutes from Shree Shiv Chhatrapati Sports Complex and NH-48, Rohan Ekam connects effortlessly to Aundh, Wakad, Sus Road, Baner, and Hinjawadi IT Park.",
        "image": "https://rohanbuildersekam.com/images/optimized/gallery-05.webp",
        "body_html": """
          <div class="card">
            <h2>Central Connectivity Hub Across 6 West Pune Micro-Markets</h2>
            <p>Whether you work in Hinjawadi Phase 1–3, drive daily to Mumbai via NH-48, or your family relies on schools and hospitals in <strong>Aundh, Baner, Sus Road, or Wakad</strong>, Rohan Ekam's position along the Mula River bend sits cleanly at the nexus of West Pune's premier arterial roads.</p>

            <table class="spec-table">
              <thead>
                <tr>
                  <th>Adjacent Landmark / Hub</th>
                  <th>Distance / Commute Time</th>
                  <th>Connectivity Corridor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Shree Shiv Chhatrapati Sports Complex (Balewadi Stadium)</strong></td>
                  <td>1.8 km (~3–4 mins)</td>
                  <td>Balewadi Stadium Road / High Street</td>
                </tr>
                <tr>
                  <td><strong>Balewadi Metro Station (Pune Metro Line 3)</strong></td>
                  <td>1.5 km (~4 mins)</td>
                  <td>Hinjawadi–Shivajinagar Elevated Corridor</td>
                </tr>
                <tr>
                  <td><strong>Mumbai–Bangalore Highway (NH-48)</strong></td>
                  <td>2.2 km (~5 mins)</td>
                  <td>Direct bypass exit avoiding Wakad Chowk jam</td>
                </tr>
                <tr>
                  <td><strong>Sus Road &amp; Pashan Exit</strong></td>
                  <td>3.5 km (~7 mins)</td>
                  <td>Baner–Pashan–Sus connector</td>
                </tr>
                <tr>
                  <td><strong>Wakad &amp; Phoenix Mall of the Millennium</strong></td>
                  <td>4.5 km (~9 mins)</td>
                  <td>NH-48 / Mula River Bridge link</td>
                </tr>
                <tr>
                  <td><strong>Aundh &amp; Westend Mall</strong></td>
                  <td>6.0 km (~12 mins)</td>
                  <td>Baner Main Road arterial</td>
                </tr>
              </tbody>
            </table>

            <h3>Why Upgrades From Wakad, Sus &amp; Older Aundh Societies Choose Balewadi</h3>
            <p>Residents upgrading from dense neighborhoods in Wakad or older standalone buildings in Aundh choose <strong>Rohan Ekam</strong> because it remains within <strong>PMC limits</strong> (unlike parts of Wakad/PCMC or PMRDA Sus), preserves uninterrupted 13-acre green frontage along the Mula River, and puts children within 5–8 minutes of MITCON International, The Orchid School, NICMAR, and Jupiter Hospital.</p>
          </div>
        """,
        "faqs": [
            ("How close is Rohan Ekam to Balewadi Stadium and Mumbai–Bangalore Highway?", "Rohan Ekam lies approximately 1.8 km (3–4 minutes) from Shree Shiv Chhatrapati Sports Complex (Balewadi Stadium) and 2.2 km (5 minutes) from the NH-48 Mumbai–Bangalore Highway."),
            ("Is Rohan Ekam convenient for families commuting between Aundh, Wakad, and Hinjawadi?", "Yes. Rohan Ekam sits directly between Aundh (12 mins), Wakad (9 mins), Sus Road (7 mins), and Hinjawadi IT Park Phase 1 (12–15 mins) with fast access to Pune Metro Line 3."),
            ("Why choose Balewadi over flats near Wakad or Sus Road?", "Balewadi lies within Pune Municipal Corporation (PMC) limits alongside Balewadi High Street's premier dining/commercial belt, offering higher luxury rental yields (3.5%–4.2%) and contiguous 13-acre riverfront serenity."),
        ],
    },
]

os.makedirs("scripts", exist_ok=True)

for page in CLUSTER_PAGES:
    slug = page["slug"]
    url = f"https://rohanbuildersekam.com/{slug}"
    faq_entities = [
        {
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {"@type": "Answer", "text": a},
        }
        for q, a in page["faqs"]
    ]
    faq_html = "".join(
        f'<div class="faq-item"><div class="faq-question">{escape(q)}</div><div class="faq-answer">{escape(a)}</div></div>'
        for q, a in page["faqs"]
    )
    schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": f"{url}#webpage",
                "url": url,
                "name": page["title"],
                "description": page["desc"],
                "dateModified": "2026-11-25T07:30:00+05:30",
                "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://rohanbuildersekam.com/#website",
                    "name": "Rohan Ekam",
                    "url": "https://rohanbuildersekam.com/",
                },
            },
            {
                "@type": "BreadcrumbList",
                "@id": f"{url}#breadcrumb",
                "itemListElement": [
                    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://rohanbuildersekam.com/"},
                    {"@type": "ListItem", "position": 2, "name": page["breadcrumb"], "item": url},
                ],
            },
            {
                "@type": "ApartmentComplex",
                "@id": "https://rohanbuildersekam.com/#apartmentcomplex",
                "name": "Rohan Ekam",
                "url": "https://rohanbuildersekam.com/",
                "telephone": "+91-774409295",
                "priceRange": "₹1.45 Cr - ₹3.10 Cr",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Mula Riverfront, Behind Balewadi High Street",
                    "addressLocality": "Balewadi",
                    "addressRegion": "Maharashtra",
                    "postalCode": "411045",
                    "addressCountry": "IN",
                },
            },
            {
                "@type": "Product",
                "@id": f"{url}#offer",
                "name": f"Rohan Ekam — {page['breadcrumb']}",
                "description": page["desc"],
                "image": page["image"],
                "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "INR",
                    "lowPrice": "14500000",
                    "highPrice": "31000000",
                    "offerCount": "4",
                    "priceValidUntil": "2026-12-31",
                    "availability": "https://schema.org/InStock",
                },
            },
            {
                "@type": "FAQPage",
                "@id": f"{url}#faq",
                "mainEntity": faq_entities,
            },
        ],
    }
    schema_json = json.dumps(schema, indent=2, ensure_ascii=False)
    html_doc = f"""<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{escape(page["title"])}</title>
    <meta name="description" content="{escape(page["desc"])}" />
    <meta name="keywords" content="{escape(page["keywords"])}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="ard" type="application/json" href="/.well-known/ard.json" />
    <link rel="canonical" href="{url}" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="alternate icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=optional" media="print" onload="this.media='all'" />
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=optional" /></noscript>

    <meta property="og:type" content="website" />
    <meta property="og:title" content="{escape(page["title"])}" />
    <meta property="og:description" content="{escape(page["desc"])}" />
    <meta property="og:url" content="{url}" />
    <meta property="og:image" content="{page["image"]}" />
    <meta property="og:site_name" content="Rohan Ekam Balewadi" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{escape(page["title"])}" />
    <meta name="twitter:description" content="{escape(page["desc"])}" />
    <meta name="twitter:image" content="{page["image"]}" />

    <meta name="geo.region" content="IN-MH" />
    <meta name="geo.placename" content="Balewadi, Pune, Maharashtra, India" />
    <meta name="geo.position" content="18.5772;73.7661" />
    <meta name="ICBM" content="18.5772, 73.7661" />

    <script type="application/ld+json">
{schema_json}
    </script>

    <style>
      :root {{
        --bg-cream: #F5F2EB;
        --bg-card: rgba(255, 255, 255, 0.90);
        --text-heading: #1C1917;
        --text-body: #292524;
        --amber-accent: #92400E;
        --emerald: #065F46;
        --border: #D6D3CD;
      }}
      * {{ box-sizing: border-box; }}
      body {{
        margin: 0; padding: 0; background-color: var(--bg-cream); color: var(--text-body);
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.7;
      }}
      .top-nav {{
        position: sticky; top: 0; z-index: 50; background: rgba(255, 255, 255, 0.94);
        backdrop-filter: blur(12px); border-bottom: 1px solid var(--border); padding: 12px 24px;
      }}
      .top-nav-inner {{
        max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
      }}
      .brand-link {{
        display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--text-heading);
        font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 700; font-size: 20px; letter-spacing: 0.08em; text-transform: uppercase; min-height: 44px;
      }}
      .nav-actions {{ display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }}
      .btn-whatsapp {{
        background: #065F46; color: #FFFFFF !important; text-decoration: none; font-size: 13px; font-weight: 600;
        padding: 10px 18px; border-radius: 9999px; display: inline-flex; align-items: center; min-height: 44px;
      }}
      .btn-outline {{
        border: 1px solid var(--text-heading); color: var(--text-heading) !important; text-decoration: none;
        font-size: 13px; font-weight: 600; padding: 10px 18px; border-radius: 9999px; display: inline-flex; align-items: center; min-height: 44px;
      }}
      .btn-outline:hover {{ background: var(--text-heading); color: #FFF !important; }}
      .container {{ max-width: 1100px; margin: 0 auto; padding: 36px 20px 80px 20px; }}
      .breadcrumb {{ font-size: 13px; color: #44403C; margin-bottom: 16px; }}
      .breadcrumb a {{ color: var(--emerald); text-decoration: none; font-weight: 600; padding: 8px 4px; display: inline-block; }}
      .hero-card {{
        background: var(--bg-card); border: 1px solid #FFF; border-radius: 24px;
        padding: 36px; margin-bottom: 32px; box-shadow: 0 12px 32px rgba(28, 25, 23, 0.05);
      }}
      .badge {{
        display: inline-block; background: #FEF3C7; color: #78350F; font-size: 11px; font-weight: 700;
        padding: 5px 12px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px;
      }}
      h1 {{
        font-family: 'Cormorant Garamond', Georgia, serif; font-size: 38px; line-height: 1.15; color: var(--text-heading); margin: 0 0 14px 0;
      }}
      .lead {{ font-size: 16px; color: #44403C; max-width: 780px; margin: 0; }}
      .grid-2 {{ display: grid; grid-template-columns: 2fr 1fr; gap: 32px; align-items: start; }}
      @media (max-width: 850px) {{ .grid-2 {{ grid-template-columns: 1fr; }} }}
      .card {{
        background: var(--bg-card); border: 1px solid #FFF; border-radius: 24px;
        padding: 32px; box-shadow: 0 8px 24px rgba(28, 25, 23, 0.04); margin-bottom: 24px;
      }}
      h2 {{
        font-family: 'Cormorant Garamond', Georgia, serif; font-size: 28px; color: var(--text-heading);
        margin-top: 0; margin-bottom: 14px; border-bottom: 1px solid var(--border); padding-bottom: 8px;
      }}
      h3 {{ font-family: 'Cormorant Garamond', Georgia, serif; font-size: 22px; color: var(--text-heading); margin-top: 24px; margin-bottom: 10px; }}
      .spec-table {{ width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px; }}
      .spec-table th, .spec-table td {{ padding: 12px 14px; border-bottom: 1px solid var(--border); text-align: left; }}
      .spec-table th {{ background: #F5F2EB; font-weight: 700; color: var(--text-heading); }}
      .inquiry-box {{
        background: #FFFFFF; border: 1px solid var(--border); border-radius: 24px;
        padding: 28px; box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06); position: sticky; top: 90px;
      }}
      .form-group {{ margin-bottom: 14px; }}
      .form-label {{ display: block; font-size: 12px; font-weight: 600; color: var(--text-heading); margin-bottom: 6px; }}
      .form-input {{
        width: 100%; padding: 12px 14px; border-radius: 12px; border: 1px solid #A8A29E; font-size: 14px; min-height: 44px; font-family: inherit;
      }}
      .btn-submit {{
        width: 100%; background: var(--text-heading); color: #FFFFFF; border: none; padding: 14px; min-height: 48px;
        border-radius: 12px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; cursor: pointer;
      }}
      .faq-item {{ border-bottom: 1px solid var(--border); padding: 16px 0; }}
      .faq-item:last-child {{ border-bottom: none; }}
      .faq-question {{ font-weight: 700; color: var(--text-heading); font-size: 15px; margin-bottom: 6px; }}
      .faq-answer {{ font-size: 14px; color: #44403C; line-height: 1.6; }}
      .cluster-links {{ max-width: 1100px; margin: 36px auto 0 auto; padding: 24px; background: #EFECE6; border-radius: 20px; font-size: 13px; }}
      .cluster-links h2 {{ margin: 0 0 12px 0; font-size: 14px; font-family: inherit; border-bottom: none; padding-bottom: 0; text-transform: uppercase; letter-spacing: 1px; color: #1C1917; }}
      .cluster-pills {{ display: flex; flex-wrap: wrap; gap: 10px; }}
      .cluster-pill {{
        background: #FFF; padding: 10px 14px; border-radius: 9999px; border: 1px solid #A8A29E;
        color: #1C1917; text-decoration: none; font-weight: 600; min-height: 44px; display: inline-flex; align-items: center;
      }}
      .cluster-pill:hover {{ border-color: var(--emerald); color: var(--emerald); }}
      .site-footer {{ max-width: 1100px; margin: 40px auto 48px auto; padding: 24px 20px 0 20px; border-top: 1px solid var(--border); text-align: center; font-size: 12px; color: #44403C; }}
    </style>
  </head>
  <body>
    <header class="top-nav">
      <div class="top-nav-inner">
        <a href="/" aria-label="Rohan Ekam Balewadi Home" class="brand-link">
          <img src="/rohan-ekam-logo.svg" alt="" aria-hidden="true" width="160" height="28" style="height: 28px; width: auto;" />
          <span>Rohan Ekam</span>
        </a>
        <div class="nav-actions">
          <a href="https://wa.me/91774409295" target="_blank" rel="noreferrer" class="btn-whatsapp">WhatsApp +91 774409295</a>
          <a href="/blog" class="btn-outline">Research Hub</a>
          <a href="/" class="btn-outline">3D Showcase</a>
        </div>
      </div>
    </header>

    <main id="main-content" role="main" class="container">
      <div class="breadcrumb">
        <a href="/">Home</a> &rsaquo; <span>{escape(page["breadcrumb"])}</span>
      </div>

      <div class="hero-card">
        <span class="badge">{escape(page["badge"])}</span>
        <h1>{page["h1"]}</h1>
        <p class="lead">{escape(page["lead"])}</p>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 20px;">
          <a href="https://wa.me/91774409295?text=Hi,%20I%20would%20like%20details%20for%20{slug}%20at%20Rohan%20Ekam%20Balewadi." target="_blank" rel="noreferrer" class="btn-whatsapp">
            Connect on WhatsApp (+91 774409295)
          </a>
          <a href="#inquiry" class="btn-outline">Get Cost Sheet &amp; Brochure</a>
        </div>
      </div>

      <div class="grid-2">
        <div>
          {page["body_html"]}
          <div class="card">
            <h2>Frequently Asked Questions</h2>
            {faq_html}
          </div>
        </div>

        <aside id="inquiry" class="inquiry-box">
          <h2 style="margin-top:0; font-size: 22px;">Request Priority Information</h2>
          <p style="font-size: 13px; color: #44403C; margin-bottom: 16px;">Receive the verified brochure PDF, 2026 cost sheet &amp; VIP visit pass via Propsmart Realty (RERA: A031262401295).</p>
          <form action="https://formsubmit.co/propsmartrealty@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="Priority Inquiry from /{slug} — Rohan Ekam" />
            <input type="hidden" name="_next" value="https://rohanbuildersekam.com/{slug}" />
            <div class="form-group">
              <label for="cluster-name" class="form-label">Full Name *</label>
              <input id="cluster-name" name="name" type="text" required placeholder="Enter your name" class="form-input" />
            </div>
            <div class="form-group">
              <label for="cluster-phone" class="form-label">Mobile / WhatsApp Number *</label>
              <input id="cluster-phone" name="phone" type="tel" required pattern="[0-9]{{10}}" maxlength="10" placeholder="10-Digit Mobile No." class="form-input" />
            </div>
            <div class="form-group">
              <label for="cluster-config" class="form-label">Preferred Configuration</label>
              <select id="cluster-config" name="configuration" class="form-input">
                <option value="2 BHK (From ₹1.45 Cr*)">2 BHK Luxury (From ₹1.45 Cr*)</option>
                <option value="3 BHK (From ₹1.95 Cr*)">3 BHK Riverfront (From ₹1.95 Cr*)</option>
                <option value="4 BHK Sky Suite (From ₹2.75 Cr*)">4 BHK Sky Suite (From ₹2.75 Cr*)</option>
              </select>
            </div>
            <button type="submit" class="btn-submit">Get Floor Plans &amp; Cost Sheet</button>
          </form>
        </aside>
      </div>

      <section class="cluster-links">
        <h2>Explore All Rohan Ekam Search Clusters</h2>
        <div class="cluster-pills">
          <a href="/" class="cluster-pill">Home 3D Showcase</a>
          <a href="/2-bhk-flats-in-balewadi" class="cluster-pill">2 BHK Flats Balewadi</a>
          <a href="/3-bhk-flats-in-balewadi" class="cluster-pill">3 BHK Flats Balewadi</a>
          <a href="/4-bhk-flats-in-balewadi" class="cluster-pill">4 BHK Sky Suites</a>
          <a href="/price-and-cost-sheet" class="cluster-pill">Price &amp; Cost Sheet</a>
          <a href="/rohan-ekam-brochure-floor-plans" class="cluster-pill">Brochure &amp; Floor Plans</a>
          <a href="/rohan-ekam-possession-reviews-rera" class="cluster-pill">Possession, Reviews &amp; RERA</a>
          <a href="/new-launch-projects-in-balewadi-baner" class="cluster-pill">New Launches Balewadi–Baner</a>
          <a href="/flats-near-balewadi-stadium-wakad-aundh" class="cluster-pill">Stadium, Wakad &amp; Aundh</a>
          <a href="/luxury-flats-in-baner-balewadi" class="cluster-pill">Baner–Balewadi Luxury</a>
          <a href="/blog" class="cluster-pill">Research Blog Hub</a>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>© 2026 Rohan Ekam, Balewadi. Project MahaRERA Phase 1: <strong>P52100052298</strong> &amp; Phase 2: <strong>PR1261012502532</strong>. Channel Partner Propsmart Realty: <strong>A031262401295</strong>.</p>
      <p><a href="/privacy-policy" style="color: #065F46; font-weight: 600;">Privacy Policy</a> • <a href="/terms" style="color: #065F46; font-weight: 600;">Terms</a> • <a href="/disclaimer" style="color: #065F46; font-weight: 600;">MahaRERA Disclaimer</a></p>
    </footer>
  </body>
</html>
"""
    for out_path in [f"public/{slug}.html", f"public/{slug}/index.html"]:
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(html_doc)
        print(f"Generated {out_path}")
