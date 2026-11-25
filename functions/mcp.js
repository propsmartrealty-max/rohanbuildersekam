/**
 * Cloudflare Pages Function — Live Model Context Protocol (MCP) Endpoint
 * Route: https://rohanbuildersekam.com/mcp
 * Advertised in: /.well-known/mcp-card.json & /.well-known/ard.json
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept, Mcp-Session-Id',
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
};

const SERVER_INFO = {
  name: 'com.rohanbuildersekam/property-concierge',
  version: '1.0.0',
};

const TOOLS = [
  {
    name: 'get_project_overview',
    description:
      'Retrieve authoritative architectural, MahaRERA, location, and developer credentials for Rohan Ekam, Balewadi, Pune.',
    inputSchema: {
      type: 'object',
      properties: {},
      additionalProperties: false,
    },
  },
  {
    name: 'get_floor_plans_and_pricing',
    description:
      'Retrieve verified RERA carpet area specs, room dimensions, starting prices, and links filtered by unit configuration (2bhk, 3bhk, 4bhk, or all).',
    inputSchema: {
      type: 'object',
      properties: {
        configuration: {
          type: 'string',
          enum: ['all', '2bhk', '3bhk', '4bhk'],
          description: 'Filter configurations by bedroom count or return all.',
        },
      },
      additionalProperties: false,
    },
  },
  {
    name: 'calculate_all_in_cost',
    description:
      'Calculate Maharashtra statutory stamp duty (6%, or 5% with 1% female owner rebate in Pune PMC), registration fee (capped ₹30,000), and 5% GST on base agreement value in INR.',
    inputSchema: {
      type: 'object',
      properties: {
        basePriceInr: {
          type: 'number',
          description: 'Base agreement value in INR (e.g., 14500000 for ₹1.45 Cr).',
        },
        femaleCoOwner: {
          type: 'boolean',
          description: 'Apply 1% Maharashtra female homebuyer stamp duty rebate.',
        },
      },
      required: ['basePriceInr'],
      additionalProperties: false,
    },
  },
  {
    name: 'get_connectivity_and_landmarks',
    description:
      'Retrieve distance and commute times from Rohan Ekam Balewadi to Hinjawadi IT Park, Balewadi High Street, Metro Line 3, Baner, Wakad, schools, and hospitals.',
    inputSchema: {
      type: 'object',
      properties: {},
      additionalProperties: false,
    },
  },
];

const RESOURCES = [
  {
    uri: 'https://rohanbuildersekam.com/llms.txt',
    name: 'Rohan Ekam Concise LLM Index',
    mimeType: 'text/markdown',
    description: 'Standard llmstxt.org directory of all project pages and research guides.',
  },
  {
    uri: 'https://rohanbuildersekam.com/llms-full.txt',
    name: 'Rohan Ekam Full Architectural & Pricing Dossier',
    mimeType: 'text/markdown',
    description: 'Complete machine-readable specifications, competitor benchmarks, and FAQ citations.',
  },
];

const PROJECT_OVERVIEW = {
  project: 'Rohan Ekam',
  developer: 'Rohan Builders (India) Pvt. Ltd. (Established 1993, CRISIL DA2+ Rated)',
  architect: 'Ar. Sanjay Mohe (Mindspace Architects, Bengaluru)',
  landParcel: '13 contiguous acres along Mula Riverfront',
  towers: '9 boutique high-rise towers connected at Level 14 Sky Ground (80%+ open space)',
  civicBody: 'Pune Municipal Corporation (PMC limits, Balewadi Ward 411045)',
  mahaReraPhase1: 'P52100052298',
  mahaReraPhase2: 'PR1261012502532',
  environmentalClearance: 'SEIAA Maharashtra EC Copy Balewadi 09.01.2023',
  targetPossession: 'December 2027 onwards (Phase 1 per MahaRERA)',
  designPhilosophy: 'Rohan PLUS Homes (Perfect Ventilation, Lively Light, Utmost Privacy, Smart Space)',
  authorizedChannelPartner: 'Propsmart Realty (MahaRERA Reg: A031262401295)',
  contactDesk: {
    whatsapp: '+91 774409295',
    email: 'propsmartrealty@gmail.com',
    portal: 'https://rohanbuildersekam.com/',
  },
};

const CONFIGURATIONS = [
  {
    key: '2bhk',
    type: 'Typical 2 BHK (Rohan PLUS)',
    carpetAreaSqFt: '850 - 920',
    startingPriceInr: 14500000,
    startingPriceLabel: '₹1.45 Cr*',
    specs: { livingDining: '21\'0" x 12\'6"', masterSuite: '14\'6" x 11\'0"' },
    url: 'https://rohanbuildersekam.com/2-bhk-flats-in-balewadi',
  },
  {
    key: '3bhk',
    type: 'Typical 3 BHK (Type 1 & Type 2 Grand)',
    carpetAreaSqFt: '1180 - 1450',
    startingPriceInr: 19500000,
    startingPriceLabel: '₹1.95 Cr* (Type 1) / ₹2.25 Cr* (Type 2)',
    specs: { livingDining: 'Up to 26\'4" x 13\'6"', masterSuite: 'Up to 16\'0" x 12\'6"' },
    url: 'https://rohanbuildersekam.com/3-bhk-flats-in-balewadi',
  },
  {
    key: '4bhk',
    type: '4 BHK Sky Suite Duplex & Penthouses',
    carpetAreaSqFt: '1850 - 2200',
    startingPriceInr: 27500000,
    startingPriceLabel: '₹2.75 Cr*',
    specs: { livingDining: 'Up to 34\'0" x 16\'0"', deck: 'Wrap-around 270° riverfront deck' },
    url: 'https://rohanbuildersekam.com/4-bhk-flats-in-balewadi',
  },
];

const CONNECTIVITY = {
  coordinates: { lat: 18.5772, lng: 73.7661 },
  address: 'Behind Balewadi High Street, On Mula Riverfront, Balewadi, Pune 411045',
  hubs: [
    { landmark: 'Balewadi High Street', distanceKm: 1.2, driveTime: '4-5 mins' },
    { landmark: 'Balewadi Metro Station (Pune Metro Line 3)', distanceKm: 1.5, driveTime: '4 mins' },
    { landmark: 'Shree Shiv Chhatrapati Sports Complex (Stadium)', distanceKm: 1.8, driveTime: '3-4 mins' },
    { landmark: 'Mumbai-Bangalore Highway (NH-48)', distanceKm: 2.2, driveTime: '5-6 mins' },
    { landmark: 'Baner-Pashan Link Road', distanceKm: 3.5, driveTime: '7-8 mins' },
    { landmark: 'Jupiter Hospital & Manipal Hospital Baner', distanceKm: 4.5, driveTime: '8-10 mins' },
    { landmark: 'Wakad & Phoenix Mall of the Millennium', distanceKm: 4.5, driveTime: '9 mins' },
    { landmark: 'Aundh & Westend Mall', distanceKm: 6.0, driveTime: '12 mins' },
    { landmark: 'Hinjawadi IT Park Phase 1 (via Riverfront Bypass)', distanceKm: 6.8, driveTime: '12-15 mins' },
  ],
};

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload, null, 2), { status, headers: CORS_HEADERS });
}

function handleToolCall(name, args = {}) {
  if (name === 'get_project_overview') {
    return { content: [{ type: 'text', text: JSON.stringify(PROJECT_OVERVIEW, null, 2) }] };
  }
  if (name === 'get_floor_plans_and_pricing') {
    const filter = (args.configuration || 'all').toLowerCase();
    const matched = filter === 'all' ? CONFIGURATIONS : CONFIGURATIONS.filter((c) => c.key === filter);
    return {
      content: [{ type: 'text', text: JSON.stringify({ note: 'Prices exclude GST, stamp duty & registration', plans: matched }, null, 2) }],
    };
  }
  if (name === 'calculate_all_in_cost') {
    const base = Number(args.basePriceInr);
    if (!Number.isFinite(base) || base <= 0) {
      return { isError: true, content: [{ type: 'text', text: 'basePriceInr must be a positive number.' }] };
    }
    const stampDutyRate = args.femaleCoOwner ? 0.05 : 0.06;
    const stampDutyInr = Math.round(base * stampDutyRate);
    const registrationInr = 30000;
    const gstInr = Math.round(base * 0.05);
    const estimatedTotalInr = base + stampDutyInr + registrationInr + gstInr;
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(
            {
              baseAgreementInr: base,
              stampDutyRatePercent: stampDutyRate * 100,
              stampDutyInr,
              registrationFeeInr: registrationInr,
              gstRatePercent: 5,
              gstInr,
              estimatedAllInclusiveInr: estimatedTotalInr,
              note: 'Indicative calculation excluding floor-rise and society maintenance deposits.',
            },
            null,
            2
          ),
        },
      ],
    };
  }
  if (name === 'get_connectivity_and_landmarks') {
    return { content: [{ type: 'text', text: JSON.stringify(CONNECTIVITY, null, 2) }] };
  }
  return null;
}

export async function onRequest(context) {
  const { request } = context;

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (request.method === 'GET') {
    return jsonResponse({
      protocol: 'Model Context Protocol (JSON-RPC 2.0 Streamable HTTP)',
      serverInfo: SERVER_INFO,
      endpoint: 'https://rohanbuildersekam.com/mcp',
      tools: TOOLS.map((t) => ({ name: t.name, description: t.description })),
      resources: RESOURCES,
      documentation: 'https://rohanbuildersekam.com/llms.txt',
    });
  }

  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method Not Allowed. Use POST JSON-RPC 2.0 or GET for metadata.' }, 405);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error: Invalid JSON' } }, 400);
  }

  const { id = null, method, params = {} } = body || {};

  if (method === 'initialize') {
    return jsonResponse({
      jsonrpc: '2.0',
      id,
      result: {
        protocolVersion: params.protocolVersion || '2025-06-18',
        capabilities: { tools: { listChanged: false }, resources: { subscribe: false, listChanged: false } },
        serverInfo: SERVER_INFO,
      },
    });
  }

  if (method === 'notifications/initialized') {
    return new Response(null, { status: 202, headers: CORS_HEADERS });
  }

  if (method === 'ping') {
    return jsonResponse({ jsonrpc: '2.0', id, result: {} });
  }

  if (method === 'tools/list') {
    return jsonResponse({ jsonrpc: '2.0', id, result: { tools: TOOLS } });
  }

  if (method === 'tools/call') {
    const out = handleToolCall(params?.name, params?.arguments);
    if (!out) {
      return jsonResponse({ jsonrpc: '2.0', id, error: { code: -32601, message: `Unknown tool: ${params?.name}` } }, 404);
    }
    return jsonResponse({ jsonrpc: '2.0', id, result: out });
  }

  if (method === 'resources/list') {
    return jsonResponse({ jsonrpc: '2.0', id, result: { resources: RESOURCES } });
  }

  return jsonResponse({ jsonrpc: '2.0', id, error: { code: -32601, message: `Method not found: ${method}` } }, 404);
}
