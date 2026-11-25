import json
from bs4 import BeautifulSoup

articles_data = [
    {
        "headline": "Top Luxury Projects in Baner-Balewadi Pune: Comprehensive Benchmark Review",
        "url": "https://rohanbuildersekam.com/blog/top-luxury-projects-baner-balewadi",
        "description": "Comprehensive comparative benchmark review of top luxury residential projects in Baner-Balewadi corridor including land parcel, riverfront location, and MahaRERA compliance.",
        "datePublished": "2026-11-23T16:00:00+05:30"
    },
    {
        "headline": "West vs East Pune Real Estate: Baner-Balewadi vs Kharadi-Viman Nagar Analysis",
        "url": "https://rohanbuildersekam.com/blog/pune-real-estate-west-vs-east-market-analysis",
        "description": "Authoritative analysis comparing West Pune (Baner, Balewadi, Hinjawadi) with East Pune (Kharadi, Kalyani Nagar). Price growth, IT demand, infrastructure, and ROI benchmarks.",
        "datePublished": "2026-11-23T14:00:00+05:30"
    },
    {
        "headline": "Pune Real Estate Stamp Duty, Taxes & MahaRERA Guide 2026-2027",
        "url": "https://rohanbuildersekam.com/blog/pune-real-estate-stamp-duty-taxes-rera-guide",
        "description": "Complete statutory manual for property acquisitions in Maharashtra: 6% stamp duty, 1% metro cess, ₹30,000 capped registration, 5% GST, and tax deductions.",
        "datePublished": "2026-11-23T15:00:00+05:30"
    },
    {
        "headline": "Baner vs Balewadi Real Estate Investment: ROI, Price Trends & Luxury Living",
        "url": "https://rohanbuildersekam.com/blog/baner-vs-balewadi-real-estate-investment-comparison",
        "description": "Detailed investment comparison between Baner and Balewadi: price per sq.ft., capital appreciation CAGR, rental yields, and Mula riverfront advantages.",
        "datePublished": "2026-11-23T12:00:00+05:30"
    },
    {
        "headline": "Pune Luxury Real Estate Market Trends (2026-2027): High-End Demand Shift",
        "url": "https://rohanbuildersekam.com/blog/pune-luxury-real-estate-market-trends-2026-2027",
        "description": "Market trends analysis of high-net-worth individual buying patterns in West Pune corridor, demand for 3 & 4 BHK riverfront sky suites, and gated communities.",
        "datePublished": "2026-11-23T13:00:00+05:30"
    },
    {
        "headline": "Luxury Penthouses & Sky Villas in Baner-Balewadi: Architectural Design Standards",
        "url": "https://rohanbuildersekam.com/blog/luxury-penthouses-sky-villas-baner-balewadi",
        "description": "Design standards of high-altitude sky residences in West Pune: duplex configurations, double-height ceilings, 270° panoramic river views, and private elevators.",
        "datePublished": "2026-11-23T11:00:00+05:30"
    },
    {
        "headline": "Why Balewadi is Pune Top Luxury Real Estate Hub: Beyond Balewadi High Street",
        "url": "https://rohanbuildersekam.com/blog/why-balewadi-is-pune-top-luxury-real-estate-hub",
        "description": "Deep-dive into Balewadi transformation into Pune prime luxury micro-market: social infrastructure, commercial IT corridors, and riverfront lifestyle enclaves.",
        "datePublished": "2026-11-23T10:00:00+05:30"
    },
    {
        "headline": "The Ground Floor in the Sky: An Architectural Monograph on Level 14 Living",
        "url": "https://rohanbuildersekam.com/blog/ground-floor-in-the-sky-architectural-monograph",
        "description": "Architectural and structural engineering monograph on India first Level 14 Ground Floor in the Sky designed by Ar. Sanjay Mohe at Rohan Ekam.",
        "datePublished": "2026-11-23T09:00:00+05:30"
    },
    {
        "headline": "Rohan PLUS Homes Design Science: Engineering Perfect Ventilation & Zero Corridor Waste",
        "url": "https://rohanbuildersekam.com/blog/rohan-plus-homes-design-science-cross-ventilation",
        "description": "The physics of daylight lux calculations, wind-tunnel cross-ventilation, and 100% usable carpet area in Rohan proprietary PLUS Homes philosophy.",
        "datePublished": "2026-11-23T08:00:00+05:30"
    },
    {
        "headline": "NRI Real Estate Investment Guide: Buying Luxury Property in Balewadi, Pune",
        "url": "https://rohanbuildersekam.com/blog/nri-real-estate-investment-guide-pune-balewadi",
        "description": "Comprehensive regulatory and investment manual for Non-Resident Indians (NRIs): FEMA regulations, NRE/NRO banking channels, repatriation, and tax benefits.",
        "datePublished": "2026-11-23T07:00:00+05:30"
    },
    {
        "headline": "Balewadi High Street & Metro Line 3: The 2026 Connectivity & Price Boom",
        "url": "https://rohanbuildersekam.com/blog/balewadi-high-street-metro-line-3-connectivity-boom",
        "description": "Infrastructure catalysts driving capital appreciation in Balewadi: Pune Metro Line 3 transit, High Street commercial expansion, and highway connectivity.",
        "datePublished": "2026-11-23T06:00:00+05:30"
    },
    {
        "headline": "2 BHK vs 3 BHK vs 4 BHK in Balewadi: Carpet Area, Price & Layout Analysis",
        "url": "https://rohanbuildersekam.com/blog/2-bhk-3-bhk-4-bhk-carpet-area-price-comparison-balewadi",
        "description": "Comprehensive unit-by-unit carpet area, ticket size, and layout efficiency guide for luxury apartment buyers in the Baner-Balewadi corridor.",
        "datePublished": "2026-11-23T05:00:00+05:30"
    }
]

schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Blog",
            "@id": "https://rohanbuildersekam.com/blog#blog",
            "url": "https://rohanbuildersekam.com/blog",
            "name": "Rohan Ekam Real Estate Research & Architectural Monographs",
            "description": "In-depth market research, architectural monographs, infrastructure updates, and luxury real estate investment guides for Baner, Balewadi, and Pune by Rohan Ekam.",
            "publisher": {
                "@type": "Organization",
                "@id": "https://rohanbuildersekam.com/#developer",
                "name": "Rohan Builders (India) Pvt. Ltd.",
                "url": "https://rohanbuilders.com",
                "logo": "https://rohanbuildersekam.com/rohan-ekam-logo.png"
            },
            "inLanguage": "en-IN",
            "blogPost": [
                {
                    "@type": "BlogPosting",
                    "headline": a["headline"],
                    "url": a["url"],
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": a["url"]
                    },
                    "description": a["description"],
                    "datePublished": a["datePublished"],
                    "dateModified": "2026-11-24T12:00:00+05:30",
                    "image": {
                        "@type": "ImageObject",
                        "url": "https://rohanbuildersekam.com/rohan-ekam-logo.png",
                        "width": 1200,
                        "height": 630
                    },
                    "author": {
                        "@type": "Organization",
                        "name": "Rohan Builders (India) Pvt. Ltd.",
                        "url": "https://rohanbuilders.com"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "@id": "https://rohanbuildersekam.com/#developer",
                        "name": "Rohan Builders (India) Pvt. Ltd.",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://rohanbuildersekam.com/rohan-ekam-logo.png",
                            "width": 1200,
                            "height": 630
                        }
                    }
                }
                for a in articles_data
            ]
        },
        {
            "@type": "CollectionPage",
            "@id": "https://rohanbuildersekam.com/blog#collection",
            "url": "https://rohanbuildersekam.com/blog",
            "name": "Real Estate Research Hub • Baner & Balewadi Luxury Market",
            "description": "12 authoritative research monographs and whitepapers on West Pune luxury real estate.",
            "isPartOf": {
                "@type": "WebSite",
                "@id": "https://rohanbuildersekam.com/#website",
                "name": "Rohan Ekam",
                "url": "https://rohanbuildersekam.com/"
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://rohanbuildersekam.com/blog#breadcrumb",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://rohanbuildersekam.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Research Hub & Blog",
                    "item": "https://rohanbuildersekam.com/blog"
                }
            ]
        }
    ]
}

json_str = json.dumps(schema, indent=2, ensure_ascii=False)
script_tag = f'\n    <script type="application/ld+json">\n{json_str}\n    </script>\n  </head>'

for p in ["public/blog.html", "public/blog/index.html"]:
    with open(p, "r", encoding="utf-8") as f:
        content = f.read()
    if 'type="application/ld+json"' not in content:
        content_updated = content.replace("</head>", script_tag)
        with open(p, "w", encoding="utf-8") as f:
            f.write(content_updated)
        print(f"Injected Blog schema into {p}")
    else:
        print(f"Already had schema: {p}")

print("Blog schema injection complete!")
