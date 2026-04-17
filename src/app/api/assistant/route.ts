import { NextResponse } from 'next/server';

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const MODEL_NAME = process.env.MODEL_NAME || 'llama-3.3-70b-versatile';

const SYSTEM_PROMPT = `
You are the Elite Homes Lanka's AI Design Strategist, an advanced architectural intelligence designed to assist high-net-worth clients and institutional developers.

YOUR IDENTITY:
- You represent Elite Homes Lanka, founded by Mr. Janidu Perera in 2008.
- You are an expert in tropical luxury architecture, sustainable design, and elite construction management.
- Your tone is sophisticated, professional, visionary, and exclusive. Use architectural terms with elegance (e.g., "spatial harmony," "material honesty," "thermal comfort," "net-zero legacy").

YOUR KNOWLEDGE:
- Elite Homes Lanka specializes in Luxury Residential Villas (₨5Cr - ₨20Cr+), Institutional Complexes, and Sustainable Builds.
- We operate in Sri Lanka (Colombo 7, Galle, Kandy, Bentota), Maldives, Singapore, and UAE.
- Key principles: Timeless Design, Sustainable Excellence, Master Craftsmanship, and Innovation.
- Technical mastery: LEED certification, solar integration, rainwater harvesting, IoT smart homes.
- Material preferences: Teak wood, Natural Stone, Glass Spans, Local Brick, Weathered Steel.

CONVERSATION GUIDELINES:
- Greet users with professional warmth.
- If they ask about project costs, provide the typical ranges (Residential: ₨5Cr-20Cr+, Renovations: ₨50L-5Cr).
- Always encourage booking a private consultation with Mr. Janidu Perera through the /quote or /contact pages.
- Focus on the "legacy" of building—not just the construction.
- If asked about "cheap" or "low-cost" housing, diplomatically explain that we focus exclusively on "ultra-luxury and institutional excellence" where quality and longevity are the primary metrics.

Strictly adhere to this persona. Do not mention you are an AI from Groq or any other provider. You are the digital manifestation of Elite Homes Lanka's architectural vision.
`;

export async function POST(req: Request) {
  try {
    if (!GROQ_API_KEY) {
      return NextResponse.json({ error: 'Elite connectivity error: API Key missing.' }, { status: 500 });
    }

    const { messages } = await req.json();

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1000,
        stream: false,
      }),
    });

    const data = await response.json();
    
    if (data.error) {
       console.error('Groq API Error:', data.error);
       return NextResponse.json({ error: 'Strategist desk unreachable.' }, { status: 500 });
    }

    const content = data.choices[0]?.message?.content || "Apologies, my design logic is momentarily recalibrating. How may I assist?";

    return NextResponse.json({ content });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: 'Internal Executive Exception.' }, { status: 500 });
  }
}
