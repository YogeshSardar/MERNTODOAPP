const express = require("express");
const router = express.Router();

const { getGoals, deleteGoal, setGoal,putGoals } = require("../controllers/controllers");

router.get("/", getGoals);

router.post("/", setGoal);

router.delete("/:id", deleteGoal);
router.put("/:id",putGoals);

module.exports = router;

