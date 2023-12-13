import express from "express";
const app = express();
const port = 3000;

import connectToDatabase from "./src/db/database.db.js";
connectToDatabase();

import { router as UserRouter } from "./src/routes/user.routes.js";

app.use(express.json());
app.use("/api/v1", UserRouter);

const startServer = async () => {
  try {
    await app.listen(port, () => {
      console.log("port is listening on http://localhost:" + port);
    });
  } catch (error) {
    console.log("error occurred at running a server ~~", error.message);
  }
};

startServer();
