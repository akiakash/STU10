const express = require("express");

const Images = require("../models/images");
const router = express.Router();

router.post("/", async (req, res) => {
  const images = new Images({
    albumName: req.body.albumName,
    albumTag: req.body.albumTag,
    featuredimage: req.body.featuredimage,
    images: req.body.images,
  });
  try {
    const saveImages = await images.save();
    res.json(saveImages);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/", async (req, res) => {
  const images = await Images.find();
  try {
    res.json(images);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:imageId", async (req, res) => {
  try {
    const removeImages = await Images.remove({ _id: req.params.imageId });
    res.json({ removeImages });
  } catch (err) {
    res.json({ messae: err });
  }
});

router.get("/:imageId", async (req, res) => {
  try {
    const images = await Images.findById(req.params.imageId);
    res.json(images);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
