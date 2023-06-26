require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const connectDB = require("./db/connect");

const streamersRouter = require("./routes/streamers");

app.use(express.json());
app.use(cors());

app.use("/api/v1/streamers", streamersRouter);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (err) {
    console.log(err);
  }
};

start();
