const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("team", PostSchema);
