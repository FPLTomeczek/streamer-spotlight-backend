const mongoose = require("mongoose");
const { noWhitespaceRegex } = require("./validation/streamer-validation");

const Platform = {
  TWITCH: "twitch",
  YOUTUBE: "youtube",
  TIKTOK: "tiktok",
  KICK: "kick",
  RUMBLE: "rumble",
};

const StreamerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a streamer name"],
    match: noWhitespaceRegex,
  },
  platform: {
    type: String,
    required: [true, "Please provide a streamer platform"],
    enum: [
      Platform.TWITCH,
      Platform.YOUTUBE,
      Platform.TIKTOK,
      Platform.KICK,
      Platform.RUMBLE,
    ],
  },
  desc: {
    type: String,
    required: [true, "Please provide a streamer description"],
    match: noWhitespaceRegex,
  },
  upvote: {
    type: Number,
    default: 0,
  },
  downvote: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Streamer", StreamerSchema);
