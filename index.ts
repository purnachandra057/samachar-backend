import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.end("Hello, World");
});

const port = process.env.PORT || 8000;
app.listen(port);

console.log(`Server Listening (${port})`)
