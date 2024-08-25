const aysncHandler = require("express-async-handler");

const getGoals = aysncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

const setGoal = aysncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text filed ");
  }
  res.status(200).json({ message: "Set Goal" });
});

const deleteGoal = aysncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});
const putGoals = aysncHandler(async (req, res) => {
  res.status(200).json({ message: `put goal  ${req.params.id}` });
});

module.exports = {
  getGoals,
  deleteGoal,
  setGoal,
  putGoals,
};
