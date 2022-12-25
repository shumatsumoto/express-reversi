import express from "express";

const PORT = 3000;

const app = express();

app.get("/api/hello", async (req, res) => {
  res.json({
    message: "hello, shu!!!",
  });
});

app.listen(PORT, () => {
  console.log(`Reversi app started: http://localhost:${PORT}`);
});
