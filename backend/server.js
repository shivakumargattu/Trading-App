// backend/server.js
const express = require("express");
const cors = require("cors");
const { generateSignal } = require("./modules/signalEngine");
const { fetchStockPrice } = require("./modules/fetchStockPrice");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

app.get("/", (req, res) => res.send("📡 Stock Signal API running"));

app.get("/api/signals", async (req, res) => {
  try {
    const watchlist = ["RELIANCE", "INFY", "HDFCBANK"];
    const results = await Promise.all(watchlist.map(generateSignal));
    res.json(results.filter(Boolean));
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch signals" });
  }
});

// backend/server.js
const { fetchIndexData } = require("./modules/fetchIndexData");

app.get("/api/indices", async (req, res) => {
  const symbols = ["^NSEI", "^BSESN", "^NSEBANK"];
  try {
    const data = await Promise.all(symbols.map(fetchIndexData));
    res.json(data.filter(Boolean));
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch index data" });
  }
});


app.get("/api/chartdata", async (req, res) => {
  try {
    const { symbol, range = "1d", interval = "5m" } = req.query;
    const chartData = await fetchStockPrice(symbol, range, interval);
    if (!chartData) return res.status(500).json({ error: "Chart fetch failed" });
    res.json(chartData);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server at http://localhost:${PORT}`));
