const axios = require("axios");

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export async function handleMessage(req, res) {
    const { message } = req.body;

  console.log("Webhook payload:", req.body);

  if (!message || !message.text || !message.chat || !message.chat.id) {
    return res.sendStatus(200);
  }

  try {
    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: message.chat.id,
        text: "Meow, Meow !!",
      }
    );
    res.end("ok");
  } catch (err) {
    console.error("Error :", err);
    res.end("Error :" + err);
  }
}