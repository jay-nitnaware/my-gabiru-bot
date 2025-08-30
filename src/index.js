var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const axios = require("axios");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

app.post("/new-message", async (req, res) => {
  
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
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
