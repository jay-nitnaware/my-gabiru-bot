# my-gabiru-bot

A Telegram bot built with Node.js and Express that receives updates via webhook and replies to messages. The bot supports simple fixed replies and optional AI-generated responses using Google Gemini.

## Features

- Telegram webhook-based bot using Express and Axios for sending replies.

- Environment-variable driven configuration (no secrets in code).

- AI responses via Google Gemini (You can use any other AI API).

## Setup

1. **Clone the repository**

   ```

   ```

- git clone https://github.com/jay-nitnaware/my-gabiru-bot.git
- cd my-gabiru-bot

  ```

  ```

2. **Install dependencies**

   ```

   ```

- npm install
  ```

  ```

3. **Configure environment variables**

   Create a `.env` file in the project root:

   ```

   ```

- TELEGRAM_BOT_TOKEN=<your_telegram_bot_token>
- GEMINI_API_KEY=<your_gemini_key> (optional)
  ```

  ```

4. **Start the bot**

   ```

   ```

- npm start
- Server logs: “Server is running on port 3000”

  Start ngrok to expose the local port:

- ngrok http 3000
  Note the public HTTPS URL printed by ngrok.
  ```

  ```

5. **Set the Telegram Webhook**

   ```
   Replace <YOUR_BOT_TOKEN> and <NGROK_HTTPS_URL>:
   ```

- curl -F "url=<NGROK_HTTPS_URL>/new-message" https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook

  Expected response:
  {"ok":true,"result":true,"description":"Webhook was set"}

  To verify bot token is valid:
  Open in browser: https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getMe

  ```

  ```

## Testing

- Send a message to the bot in Telegram and watch terminal logs for “Webhook payload: …”.
- Check ngrok dashboard at http://127.0.0.1:4040 to see incoming requests and response codes.
- Use https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getMe to confirm token validity.

## Deployment

- Host on services that support Node.js (Render, Railway, Fly.io, VPS, etc.).
- Use a stable HTTPS URL and set the webhook to that domain.
- Store secrets in the platform’s environment variables.

## Security

- **Never share your `.env` file or bot token publicly.**
- The `.env` file is already included in `.gitignore`.
