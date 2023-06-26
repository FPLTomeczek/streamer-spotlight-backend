const express = require("express");

const router = express.Router();

const {
  getStreamer,
  getStreamers,
  createStreamer,
  updateStreamerVote,
} = require("../controllers/streamers");

router.route("/").get(getStreamers).post(createStreamer);
router.route("/:id").get(getStreamer);
router.route("/:id/vote").put(updateStreamerVote);

module.exports = router;
