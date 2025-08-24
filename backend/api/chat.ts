import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // No Gemini API call. Just send a simple, hardcoded reply.
  return res.status(200).json({ reply: "Backend connection is successful." });
}