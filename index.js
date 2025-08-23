import express from "express";
import cors from "cors";
import { v4 as uuid } from "uuid";
import { z } from "zod";
import { initializeToDatabase } from "./db/db.connect.js";
import Job from "./models/job.js";

const app = express();
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "*";

app.use(cors({ origin: FRONTEND_ORIGIN }));
initializeToDatabase();

app.use(express.json());

app.get("/", (req, res) => res.json({ ok: true }));


// list jobs (with search)
app.get("/api/jobs", async (req, res) => {
  const { search } = req.query;
  const filter = search ? { title: { $regex: search, $options: "i" } } : {};
  const jobs = await Job.find(filter).sort({ createdAt: -1 });
  res.json(jobs);
});

// get one
app.get("/api/jobs/:id", async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ error: "Job not found" });
  res.json(job);
});

// create
app.post("/api/jobs", async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// delete
app.delete("/api/jobs/:id", async (req, res) => {
  const removed = await Job.findByIdAndDelete(req.params.id);
  if (!removed) return res.status(404).json({ error: "Job not found" });
  res.json({ ok: true, removedId: removed._id });
});

// --- Start ---
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
