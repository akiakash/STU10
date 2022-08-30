const express = require("express");
const Router = express.Router();
const Team = require("../models/team");
const router = express.Router();

router.post("/", async (req, res) => {
  const team = new Team({
    image: req.body.image,
    name: req.body.name,
    position: req.body.position,
  });
  try {
    const saveTeam = await team.save();
    res.json(saveTeam);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/", async (req, res) => {
  const team = await Team.find();
  try {
    res.json(team);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:teamid", async (req, res) => {
  try {
    const team = await Team.findById(req.params.teamid);
    res.json(team);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:teamid", async (req, res) => {
  try {
    const removeTeam = await Team.remove({ _id: req.params.teamid });
    res.json(removeTeam);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
