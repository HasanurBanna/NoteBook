import express from "express";
import { allRoutes } from "./app/routes";

const app = express();

app.get("/", (req, res) => {
  res.send("Hi!, I'm Hasan");
});

app.use("/api/v1", allRoutes);

export default app;
