const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Route OK!" });
});

app.listen(3000, (req, res) => {
  console.log("🚀 Server Started on Port 3000");
});
