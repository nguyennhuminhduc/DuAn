import express from "express";
import tasksRoute from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import fetch from "node-fetch";


dotenv.config();

const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

const app = express();

// middlewares
app.use(express.json());

if (process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: "http://localhost:5173" }));
}
// ===== API FOOTBALL =====

// 🔍 Search player
app.get("/api/players", async (req, res) => {
  try {
    const name = req.query.name;

    const response = await fetch(
      `https://v3.football.api-sports.io/players?search=${name}`,
      {
        headers: {
          "x-apisports-key": process.env.API_KEY,
        },
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Lỗi players" });
  }
});

// ⚽ Match hôm nay
app.get("/api/matches", async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const response = await fetch(
      `https://v3.football.api-sports.io/fixtures?date=${today}`,
      {
        headers: {
          "x-apisports-key": process.env.API_KEY,
        },
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Lỗi matches" });
  }
});

// 🏆 Standings
app.get("/api/standings", async (req, res) => {
  try {
    const response = await fetch(
      `https://v3.football.api-sports.io/standings?league=39&season=2024`,
      {
        headers: {
          "x-apisports-key": process.env.API_KEY,
        },
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Lỗi standings" });
  }
});


app.use("/api/tasks", tasksRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server bắt đầu trên cổng ${PORT}`);
  });
});
