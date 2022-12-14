const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  albumName: {
    type: String,
    required: true,
  },
  albumTag: {
    type: String,
    required: true,
  },
  featuredimage: {
    type: String,
    required: true,
  },

  images: [],
});

module.exports = mongoose.model("images", PostSchema);
