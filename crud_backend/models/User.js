const mongoose = require("mongoose");

const educationalQualificationsSchema = new mongoose.Schema(
  {
    degree: String,
    university: String,
    session: String,
    cgpa: Number,
  },
  { _id: false }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: String,
    age: Number,
    nationality: String,
    skills: [String],
    nid: String,
    address: String,
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    website: String,
    gender: String,
    educationalQualifications: educationalQualificationsSchema,
  },
  { timestamps: true }
);

// This makes sure the collection is called "UserDetails"
module.exports = mongoose.model("UserDetails", userSchema);
