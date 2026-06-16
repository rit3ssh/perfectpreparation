require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(
  path.join(__dirname, "../Frontend/dist")
));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../Frontend/dist/index.html")
  );
});

connectToDB()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})