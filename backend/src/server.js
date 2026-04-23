import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import apiRoutes from "./routes/apiRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

// API Routes
app.use('/api', apiRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Football API is running' });
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

// Kết nối database và start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 API available at http://localhost:${PORT}/api/matches`);
  });
}).catch(err => {
  console.error("Database connection failed:", err);
  // Vẫn start server dù database lỗi
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT} (without database)`);
    console.log(`📊 API available at http://localhost:${PORT}/api/matches`);
  });
});