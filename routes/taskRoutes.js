const express = require('express');

const taskController = require('../controllers/taskController')

const router = express.Router();

router.get('/:projectId', taskController.getAllTasks)

router.post('/',taskController.createNewTask)

router.put('/',taskController.editExistingTask)

router.delete('/:taskId', taskController.deleteExistingTask)

module.exports = router;


