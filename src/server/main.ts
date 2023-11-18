import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/hello", (req, res) => {
  res.json("Hello Vite + TypeScript!");
});

ViteExpress.listen(app, 5000, () =>
  console.log("Server is listening on port 5000...")
);
