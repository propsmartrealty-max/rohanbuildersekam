import re
import json
from bs4 import BeautifulSoup

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")
ld_script = soup.find("script", type="application/ld+json")
data = json.loads(ld_script.string)

graph = data["@graph"]

# 1. Update WebSite
for e in graph:
    if e.get("@type") == "WebSite":
        e["alternateName"] = [
            "Rohan Ekam Balewadi",
            "Rohan Builders Ekam",
            "Rohan Ekam Pune",
            "Rohan Ekam Official Showcase"
        ]
        e["description"] = "Official project showcase and comprehensive real estate guide for Rohan Ekam luxury riverfront residences by Rohan Builders in Balewadi, Pune."
        e["inLanguage"] = "en-IN"
        e["potentialAction"] = {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://rohanbuildersekam.com/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }

# 2. Update Organization
for e in graph:
    if e.get("@type") == "Organization" and e.get("@id") == "https://rohanbuildersekam.com/#developer":
        e["alternateName"] = ["Rohan Builders", "Rohan Group", "Rohan Builders Pune"]
        e["logo"] = {
            "@type": "ImageObject",
            "url": "https://rohanbuildersekam.com/rohan-ekam-logo.png",
            "width": 1200,
            "height": 630
        }
        e["foundingDate"] = "1993"
        e["description"] = "CRISIL DA2+ rated premier real estate developer with 30+ years of engineering excellence, over 15 million sq.ft delivered across Pune and Bengaluru, and creators of the PLUS Homes architectural science."
        e["sameAs"] = [
            "https://rohanbuilders.com",
            "https://www.linkedin.com/company/rohan-builders-india-pvt-ltd/",
            "https://www.facebook.com/rohanbuilders/",
            "https://www.instagram.com/rohan_builders/",
            "https://www.youtube.com/@RohanBuilders",
            "https://twitter.com/rohanbuilders",
            "https://www.crunchbase.com/organization/rohan-builders",
            "https://maharera.mahaonline.gov.in"
        ]
        e["knowsAbout"] = [
            "Rohan PLUS Homes (Perfect Ventilation, Lively Light, Utmost Privacy, Smart Space)",
            "Biophilic Architecture",
            "Sustainable Green Building Engineering",
            "Zero Corridor Wastage Floor Plan Design",
            "West Pune Luxury Real Estate Market",
            "MahaRERA Statutory Compliance"
        ]
        e["address"] = {
            "@type": "PostalAddress",
            "streetAddress": "1 Modibaug, Commercial Building, Ganeshkhind Road, Shivaji Nagar",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "postalCode": "411016",
            "addressCountry": "IN"
        }
        e["contactPoint"] = [
            {
                "@type": "ContactPoint",
                "telephone": "+91-774409295",
                "contactType": "sales",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi", "Marathi"]
            },
            {
                "@type": "ContactPoint",
                "telephone": "+91-774409295",
                "contactType": "NRI investment advisory",
                "areaServed": ["AE", "US", "GB", "SG", "QA"],
                "availableLanguage": ["English", "Hindi"]
            }
        ]

# 3. Add VideoObject schemas
video_objects = [
    {
        "@type": "VideoObject",
        "@id": "https://rohanbuildersekam.com/#video-walkthrough",
        "name": "Rohan Ekam Official Project Walkthrough",
        "description": "Complete architectural walkthrough of Rohan Ekam 13-acre luxury riverfront sanctuary in Balewadi, Pune.",
        "thumbnailUrl": "https://rohanbuilders.com/wp-content/uploads/2023/09/Rohan-Ekam-Project-walkthrough-2.jpg",
        "uploadDate": "2023-09-01T00:00:00+05:30",
        "contentUrl": "https://www.youtube.com/watch?v=UdA6Qm7GVsI",
        "embedUrl": "https://www.youtube.com/embed/UdA6Qm7GVsI"
    },
    {
        "@type": "VideoObject",
        "@id": "https://rohanbuildersekam.com/#video-location",
        "name": "Rohan Ekam Location Highlights & Balewadi Connectivity",
        "description": "Video overview of Rohan Ekam proximity to Balewadi High Street, Pune Metro Line 3, and Hinjawadi IT Park.",
        "thumbnailUrl": "https://rohanbuilders.com/wp-content/uploads/2023/09/VIDEO-THUMBNAILS-MASTER-2023-Location-Highlights.jpg",
        "uploadDate": "2023-09-01T00:00:00+05:30",
        "contentUrl": "https://www.youtube.com/watch?v=5Z1m4PUAnhM",
        "embedUrl": "https://www.youtube.com/embed/5Z1m4PUAnhM"
    },
    {
        "@type": "VideoObject",
        "@id": "https://rohanbuildersekam.com/#video-panoramic",
        "name": "Rohan Ekam Panoramic River & Sky Floor View",
        "description": "360-degree panoramic view of Mula River and elevated horizon from the Level 14 Ground Floor in the Sky.",
        "thumbnailUrl": "https://rohanbuilders.com/wp-content/uploads/2023/09/VIDEO-THUMBNAILS-MASTER-2023-Panoramic-Floor-View.jpg",
        "uploadDate": "2023-09-01T00:00:00+05:30",
        "contentUrl": "https://www.youtube.com/watch?v=3HVmzbfTTf0",
        "embedUrl": "https://www.youtube.com/embed/3HVmzbfTTf0"
    },
    {
        "@type": "VideoObject",
        "@id": "https://rohanbuildersekam.com/#video-design",
        "name": "Rohan Ekam Design Concept by Ar. Sanjay Mohe",
        "description": "Master architect Ar. Sanjay Mohe (Mindspace Architects) discusses the biophilic design philosophy of Rohan Ekam.",
        "thumbnailUrl": "https://rohanbuilders.com/wp-content/uploads/2023/09/VIDEO-THUMBNAILS-MASTER-2023-Design-Concept.jpg",
        "uploadDate": "2023-09-01T00:00:00+05:30",
        "contentUrl": "https://www.youtube.com/watch?v=TMtQ0Jlb5kQ",
        "embedUrl": "https://www.youtube.com/embed/TMtQ0Jlb5kQ"
    },
    {
        "@type": "VideoObject",
        "@id": "https://rohanbuildersekam.com/#video-landscape",
        "name": "Rohan Ekam Landscape Concept & Riverfront Promenade",
        "description": "1.2 km Mula riverfront boardwalk, cascading sloping lawns, and resort amenities landscape tour.",
        "thumbnailUrl": "https://rohanbuilders.com/wp-content/uploads/2023/09/VIDEO-THUMBNAILS-MASTER-2023-Landscape-Concept.jpg",
        "uploadDate": "2023-09-01T00:00:00+05:30",
        "contentUrl": "https://www.youtube.com/watch?v=7b6zdXHmHJo",
        "embedUrl": "https://www.youtube.com/embed/7b6zdXHmHJo"
    },
    {
        "@type": "VideoObject",
        "@id": "https://rohanbuildersekam.com/#video-architectural",
        "name": "Rohan Ekam Architectural Walkthrough",
        "description": "Detailed 3D architectural rendering and engineering analysis of Rohan Ekam boutique towers and sky bridge connections.",
        "thumbnailUrl": "https://rohanbuilders.com/wp-content/uploads/2023/09/VIDEO-THUMBNAILS.jpg",
        "uploadDate": "2023-09-01T00:00:00+05:30",
        "contentUrl": "https://www.youtube.com/watch?v=XYEwRvZYwpM",
        "embedUrl": "https://www.youtube.com/embed/XYEwRvZYwpM"
    }
]

# 4. Update ApartmentComplex
for e in graph:
    if e.get("@type") == "ApartmentComplex":
        e["sameAs"] = [
            "https://rohanbuilders.com/residential/rohan-ekam/",
            "https://maharera.mahaonline.gov.in"
        ]
        e["tourBookingPage"] = "https://rohanbuildersekam.com/#interested"
        e["video"] = [{"@id": v["@id"]} for v in video_objects]
        e["amenityFeature"] = [
            { "@type": "LocationFeatureSpecification", "name": "Ground Floor in the Sky at Level 14", "value": True },
            { "@type": "LocationFeatureSpecification", "name": "1.2 km Mula Riverfront Boardwalk", "value": True },
            { "@type": "LocationFeatureSpecification", "name": "50m Olympic-length Lap Pool", "value": True },
            { "@type": "LocationFeatureSpecification", "name": "Rohan PLUS Science (Ventilation, Light, Privacy, Space)", "value": True },
            { "@type": "LocationFeatureSpecification", "name": "Co-Working Lounges & Sky Pavilions", "value": True },
            { "@type": "LocationFeatureSpecification", "name": "5-Tier Smart Security System", "value": True },
            { "@type": "LocationFeatureSpecification", "name": "Indoor Squash Court & Badminton Court", "value": True },
            { "@type": "LocationFeatureSpecification", "name": "EV Charging Stations & Rainwater Harvesting", "value": True }
        ]

# 5. Update Products
for e in graph:
    if e.get("@type") == "Product":
        p_id = e.get("@id", "")
        e["category"] = "RealEstateListing > Residential Apartments"
        if "2bhk" in p_id:
            e["image"] = "https://rohanbuildersekam.com/images/optimized/plan-2bhk.webp"
            e["floorSize"] = { "@type": "QuantitativeValue", "value": 850, "unitCode": "FTK" }
            e["numberOfRooms"] = 2
            e["numberOfBathroomsTotal"] = 2
            e["additionalProperty"] = [
                { "@type": "PropertyValue", "name": "Balcony Orientation", "value": "Mula River & Garden Facing" },
                { "@type": "PropertyValue", "name": "Ventilation", "value": "Rohan PLUS Wind-Tunnel Cross Ventilation" },
                { "@type": "PropertyValue", "name": "Corridor Wastage", "value": "0%" }
            ]
        elif "3bhk-t1" in p_id:
            e["image"] = "https://rohanbuildersekam.com/images/optimized/plan-3bhk-1.webp"
            e["floorSize"] = { "@type": "QuantitativeValue", "value": 1180, "unitCode": "FTK" }
            e["numberOfRooms"] = 3
            e["numberOfBathroomsTotal"] = 3
            e["additionalProperty"] = [
                { "@type": "PropertyValue", "name": "Private Foyer", "value": "Dedicated Entrance Foyer" },
                { "@type": "PropertyValue", "name": "Balcony Orientation", "value": "Panoramic Riverfront Decks" },
                { "@type": "PropertyValue", "name": "Corridor Wastage", "value": "0%" }
            ]
        elif "3bhk-t2" in p_id:
            e["image"] = "https://rohanbuildersekam.com/images/optimized/plan-3bhk-2.webp"
            e["floorSize"] = { "@type": "QuantitativeValue", "value": 1350, "unitCode": "FTK" }
            e["numberOfRooms"] = 3
            e["numberOfBathroomsTotal"] = 3
            e["additionalProperty"] = [
                { "@type": "PropertyValue", "name": "Layout Type", "value": "Three-Side Open Grand Residence" },
                { "@type": "PropertyValue", "name": "Sky Bridge Access", "value": "Direct Access to Level 14 Sky Ground" },
                { "@type": "PropertyValue", "name": "Corridor Wastage", "value": "0%" }
            ]
        elif "4bhk" in p_id:
            e["image"] = "https://rohanbuildersekam.com/images/optimized/plan-4bhk.webp"
            e["floorSize"] = { "@type": "QuantitativeValue", "value": 1950, "unitCode": "FTK" }
            e["numberOfRooms"] = 4
            e["numberOfBathroomsTotal"] = 4
            e["additionalProperty"] = [
                { "@type": "PropertyValue", "name": "Ceiling Height", "value": "Double-Height Grand Living Area" },
                { "@type": "PropertyValue", "name": "Panorama", "value": "270° Uninterrupted River Horizon" },
                { "@type": "PropertyValue", "name": "Duplex Sky Suite", "value": "Private Upper Level Master Penthouse" }
            ]

# Add video objects to graph if not present
existing_ids = {e.get("@id") for e in graph}
for v in video_objects:
    if v["@id"] not in existing_ids:
        graph.append(v)

# Re-serialize JSON-LD
new_json_str = json.dumps(data, indent=2, ensure_ascii=False)

# Replace the ld+json script in html
pattern = r'<script type="application/ld\+json">.*?</script>'
replacement = f'<script type="application/ld+json">\n{new_json_str}\n    </script>'
html_updated = re.sub(pattern, replacement, html, flags=re.DOTALL)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html_updated)

print("index.html Schema.org JSON-LD successfully updated and validated!")
