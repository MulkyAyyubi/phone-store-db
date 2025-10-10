import express from "express";
import { testConnection } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";

// buat server
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world")
})

app.use(userRouter)

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
  testConnection();
});
