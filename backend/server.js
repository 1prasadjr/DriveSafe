const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const EmergencyContact = require("./models/EmergencyContact");

const app = express();
app.use(cors());
app.use(cors({ origin: ["http://localhost:5173", "https://drive-safe-eight.vercel.app/"] }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("DriveSafe backend is running!");
});


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  dbName: "DriveSafe",
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// POST Route
app.post("/api/emergency-contact", async (req, res) => {
  try {
    const contact = new EmergencyContact(req.body);
    await contact.save();
    res.json({ message: "✅ Data saved to MongoDB!" });
  } catch (error) {
    console.error("❌ DB Save Error:", error);
    res.status(500).json({ message: "Failed to save data" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
