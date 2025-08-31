const axios = require("axios");

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const geminiURL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0:generateContent";

export async function handleNewMessage(req, res) {
  const { message } = req.body;

  console.log("Webhook payload:", req.body);

  if (!message || !message.text || !message.chat || !message.chat.id) {
    return res.sendStatus(200);
  }

  try {
    const geminiResponse = await axios.post(
      `${geminiURL}?key=${GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: message.text }] }]
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    const geminiText =
      geminiResponse.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response.";

    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: message.chat.id,
        text: geminiText,
      }
    );
    res.end("ok");
  } catch (err) {
    console.error("Error :", err);
    res.end("Error :" + err);
  }
}
