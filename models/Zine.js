const mongoose = require("mongoose");

const ZineSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a zine title"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    tags: {
      type: [String],
      index: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Zine", ZineSchema);
