const Streamer = require("../models/Streamer");
const { StatusCodes } = require("http-status-codes");
const NotFoundError = require("../errors/not-found");

const getStreamer = async (req, res) => {
  const streamer = await Streamer.findOne({ _id: req.params.id });

  if (!streamer) {
    throw new NotFoundError(`No streamer with id ${req.params.id}`);
  }
  res.status(StatusCodes.OK).json(streamer);
};

const getStreamers = async (req, res) => {
  const streamers = await Streamer.find({});
  res.status(StatusCodes.OK).json(streamers);
};

const createStreamer = async (req, res) => {
  const streamer = await Streamer.create(req.body);
  res.status(StatusCodes.CREATED).json(streamer);
};

const updateStreamerVote = async (req, res) => {
  const { vote, isIncrement } = req.body;
  const voteType = vote === "downvote" ? "downvotes" : "upvotes";

  const streamer = await Streamer.findOneAndUpdate(
    { _id: req.params.id },
    {
      $inc: {
        [voteType]: isIncrement ? 1 : -1,
      },
    },
    {
      new: true,
    }
  );

  if (!streamer) {
    throw new NotFoundError(`No streamer with id ${req.params.id}`);
  }

  res.status(StatusCodes.CREATED).json(streamer);
};

module.exports = {
  getStreamer,
  getStreamers,
  createStreamer,
  updateStreamerVote,
};
