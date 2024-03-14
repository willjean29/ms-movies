import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/api/v1/", (_, __, next) => next());
// app.use("/users", proxy("http://localhost:8001"));
// app.use("/movies", proxy("http://localhost:8002"));
// app.use("/notifications", proxy("http://localhost:8003"));

app.listen(PORT, () => {
  console.log(`Gateway listening to port ${PORT}`);
});
