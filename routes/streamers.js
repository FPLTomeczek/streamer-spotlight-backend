const express = require("express");

const router = express.Router();

const {
  getStreamer,
  getStreamers,
  createStreamer,
} = require("../controllers/streamers");

router.route("/").get(getStreamers).post(createStreamer);
router.route("/:id").get(getStreamer);

module.exports = router;
