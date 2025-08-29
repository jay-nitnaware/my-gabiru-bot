# my-gabiru-bot

A simple Telegram bot built with Node.js, Express, and Axios.

## Features

- Listens for messages containing the word "gabiru"
- Replies with "Meow, Meow !!" to matching messages

## Setup

1. **Clone the repository**

2. **Install dependencies**
   ```
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root:
   ```
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
   ```

4. **Start the bot**
   ```
   npm start
   ```

## Usage

- Set your Telegram webhook to point to `http://your-server-address:3000/new-message`.
- The bot will respond to messages containing "gabiru".

## Example `.env` file

```
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
```

## Project Structure

```
my-gabiru-bot/
├── node_modules/
├── src/
│   └── (your source files)
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Security

- **Never share your `.env` file or bot token publicly.**
- The `.env` file is already included in `.gitignore`.