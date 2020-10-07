const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TheMatchingGameSchema = new Schema({
  data: {
    type: Date,
    default: Date.now
  },
  highround: Number,
  highscore: Number,
  username: {
    unique: true,
    type: String,
    required: true
  }
});

module.exports = mongoose.model("scorekeeping", TheMatchingGameSchema);
