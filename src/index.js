import {createApp} from "./createApp.js"
import { handleNewMessage } from "./handlers/messageHandler.js";

const app = createApp();

const PORT = process.env.PORT || 3000;

app.post("/new-message", handleNewMessage);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
