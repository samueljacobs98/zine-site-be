const mongoose = require("mongoose");

const SeriesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a series title"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    tags: {
      type: [String],
      index: true,
      default: null,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    zines: {
      type: [mongoose.Types.ObjectId],
      ref: "Zine",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Series", SeriesSchema);
