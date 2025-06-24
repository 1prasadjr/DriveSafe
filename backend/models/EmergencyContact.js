const mongoose = require("mongoose");

const emergencyContactSchema = new mongoose.Schema({
  yourName: { type: String, required: true },
  contactName: { type: String, required: true },
  contactNumber: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("EmergencyContact", emergencyContactSchema);

