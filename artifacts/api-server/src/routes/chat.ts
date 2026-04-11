import { Router } from "express";
import Groq from "groq-sdk";

const router = Router();

const SYSTEM_PROMPT = `You are a WhatsApp AI assistant for a real estate agency called LeadBridge. Your job is to warmly engage with potential buyers, qualify them as leads, and gather key information naturally through conversation.

You must respond in JSON with exactly this shape:
{
  "reply": "<your conversational WhatsApp-style reply>",
  "leadInfo": {
    "name": "<full name or null>",
    "place": "<city/area they want to buy in or null>",
    "budget": "<their budget range or null>",
    "timeline": "<when they want to buy or null>",
    "contact": "<phone/email/whatsapp number or null>"
  }
}

Rules:
- Keep replies short, friendly, and natural — like a real WhatsApp conversation
- Use line breaks not long paragraphs
- Naturally ask for missing info (name, location, budget, timeline, contact) across the conversation — never ask all at once
- If the user already provided info earlier in the conversation, always carry it forward in leadInfo
- Always return the full leadInfo object with null for any missing fields
- Never break character or reveal you are an AI
- Only output valid JSON, no extra text outside the JSON`;

router.post("/chat", async (req, res) => {
  const { messages } = req.body as {
    messages: { role: "user" | "assistant"; content: string }[];
  };

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: "messages array is required" });
    return;
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "GROQ_API_KEY is not configured" });
    return;
  }

  const groq = new Groq({ apiKey });

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages,
    ],
    temperature: 0.7,
    max_tokens: 512,
    response_format: { type: "json_object" },
  });

  const raw = completion.choices[0]?.message?.content ?? "{}";

  let parsed: { reply: string; leadInfo: Record<string, string | null> };
  try {
    parsed = JSON.parse(raw);
  } catch {
    parsed = {
      reply: "Sorry, I didn't catch that. Could you repeat? 😊",
      leadInfo: { name: null, place: null, budget: null, timeline: null, contact: null },
    };
  }

  res.json(parsed);
});

export default router;
