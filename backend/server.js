import "dotenv/config";
import express from "express";
import cors from "cors";
import Groq from "groq-sdk";

const app = express();
app.use(cors());
app.use(express.json());

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/* 🧠 SYSTEM PROMPT — VERY STRICT */
const SYSTEM_PROMPT = `
You are an AI shopping and style assistant.

STRICT RULES:
- Maximum response length: 900 characters.
- Always finish your response completely.
- Never end mid-sentence.
- Use short paragraphs or short bullet points only.
- Do NOT use markdown, asterisks, or formatting symbols.
- Limit lists to a maximum of 5 items.
- Avoid brand name dumping unless explicitly asked.
- End every response with a complete sentence.
- If you are close to the limit, summarize and stop cleanly.

Tone:
- Clear
- Helpful
- Concise
- Sales-oriented
`;

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("➡️ User:", message);

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ],
      temperature: 0.35,     // tighter control
      max_tokens: 220,       // tuned for ~900 chars
      top_p: 0.85
    });

    let text = completion.choices[0].message.content.trim();

    /* 🧹 POST-PROCESS SAFETY NET */
    text = text
      .replace(/\*\*/g, "")               // remove markdown
      .replace(/\n{3,}/g, "\n\n")         // clean spacing
      .slice(0, 1000);                    // HARD char limit

    /* 🛑 FORCE CLEAN ENDING IF NEEDED */
    if (!/[.!?]$/.test(text)) {
      text = text.replace(/[^.!?]*$/, ".");
    }

    console.log("🧠 Groq reply:", text);
    res.json({ text });

  } catch (err) {
    console.error("❌ Groq error:", err);
    res.status(500).json({ error: "LLM error" });
  }
});

app.listen(5000, () => {
  console.log("🔥 Groq backend running on http://localhost:5000");
});
