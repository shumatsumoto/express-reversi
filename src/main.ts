import express from "express";
import morgan from "morgan";
import "express-async-errors";

const PORT = 3000;

const app = express();

app.use(morgan("dev"));
app.use(express.static("static", { extensions: ["html"] }));

app.get("/api/hello", async (req, res) => {
  res.json({
    message: "hello, shu!!!",
  });
});

app.get("/api/error", async (req, res) => {
  throw new Error("Error endpoint");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Reversi app started: http://localhost:${PORT}`);
});

function errorHandler(
  err: any,
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) {
  console.error("Unexprected error occurred", err);
  res.status(500).send({
    message: "Unexprected error occurred",
  });
}
