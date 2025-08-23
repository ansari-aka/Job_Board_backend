// models/job.model.js
import mongoose from "mongoose";

const { Schema, model } = mongoose;

export const JOB_TYPES = [
  "Full-time (On-site)",
  "Part-time (On-site)",
  "Full-time (Remote)",
  "Part-time (Remote)",
];

const jobSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 120 },
    company: { type: String, required: true, trim: true, maxlength: 120 },
    location: { type: String, required: true, trim: true, maxlength: 120 },
    salary: { type: Number, min: 0 },
    type: { type: String, enum: JOB_TYPES, required: true },
    description: { type: String, required: true },
    qualifications: { type: [String], default: [] },
  },
  { timestamps: true, versionKey: false }
);

// helpful indexes for search
jobSchema.index({ title: "text", company: "text", location: "text" });

const Job = model("Job", jobSchema);
export default Job;
