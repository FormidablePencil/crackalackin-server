const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  data: {
    type: Date,
    default: Date.now
  },
  username: {
    unique: true,
    type: String,
    required: true
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  email: {
    unique: true,
    type: String,
    required: true
  }
});

module.exports = mongoose.model("users", UserSchema);
