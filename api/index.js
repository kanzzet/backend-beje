const express = require("express");
const cors = require("cors");
const supabase = require("./supabase");

const app = express();
app.use(cors());
app.use(express.json());

// Get user or create if not exists
app.post("/login", async (req, res) => {
  const { name, ip } = req.body;
  if (!name || !ip) return res.status(400).json({ error: "Missing name or IP" });

  const { data: existing } = await supabase
    .from("players")
    .select("*")
    .eq("name", name)
    .single();

  if (existing) return res.json(existing);

  const { data, error } = await supabase
    .from("players")
    .insert([{ name, balance: 50000, ip }])
    .select()
    .single();

  if (error) return res.status(500).json({ error });
  res.json(data);
});

// Update balance
app.post("/update-balance", async (req, res) => {
  const { name, balance } = req.body;
  const { data, error } = await supabase
    .from("players")
    .update({ balance })
    .eq("name", name)
    .select()
    .single();

  if (error) return res.status(500).json({ error });
  res.json(data);
});

// Get leaderboard
app.get("/leaderboard", async (req, res) => {
  const { data, error } = await supabase
    .from("players")
    .select("*")
    .order("balance", { ascending: false })
    .limit(10);

  if (error) return res.status(500).json({ error });
  res.json(data);
});

module.exports = app;