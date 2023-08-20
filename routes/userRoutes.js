const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getAllUsers);

router.post("/", userController.createNewUser);

router.put("/", userController.editExistingUser);

router.delete("/:id", userController.deleteExistingUser);

module.exports = router;
