import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as dotenv from 'dotenv';

// load .env only locally (Vercel provides env vars automatically)
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("❌ GEMINI_API_KEY missing in environment variables");
}

const genAI = new GoogleGenerativeAI(apiKey);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method allowed" });
  }

  try {
    const { message } = req.body as { message?: string };

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(message);
    const response = result?.response;
    const text = response?.text?.() || "";

    return res.status(200).json({ reply: text });
  } catch (error: unknown) {
    console.error("Chat API Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
