import express from "express";
import taskRoutes from "./routes/taskRoutes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(express.json());
app.use("/api", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
