const mongoose = require("mongoose");

const StreamerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a streamer name"],
  },
  platform: {
    type: String,
    required: [true, "Please provide a streamer platform"],
  },
  desc: {
    type: String,
    required: [true, "Please provide a streamer description"],
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Streamer", StreamerSchema);
