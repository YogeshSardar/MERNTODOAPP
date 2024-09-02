const aysncHandler = require("express-async-handler");
const Goal = require("../model/goalsModel");

// GET GOALS

const getGoals = aysncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// SET GOALS

const setGoal = aysncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text filed ");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// DELETE GOALS 
const deleteGoal = aysncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new error("Goal not found ");
  }
  await goal.remove;

  res.status(200).json({ id: req.params.id });
});

// Put Goals
const putGoals = aysncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new error("Goal not found ");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

module.exports = {
  getGoals,
  deleteGoal,
  setGoal,
  putGoals,
};
