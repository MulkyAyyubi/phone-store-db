import express from "express";
import { testConnection } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import productRouter from "./routes/productRoute.js";

// buat server
const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(userRouter);
app.use(productRouter);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
  testConnection();
});
