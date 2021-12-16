const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
const app = express();
app.use(express.json());

const stripe = require("./routes/stripe");

app.use("/api/stripe", stripe);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../", "client", "index.html")));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
