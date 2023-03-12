const express = require('express');

const projectController = require('../controllers/projectController')

const router = express.Router();

router.get('', projectController.getAllProjects)

router.post('',projectController.createNewProject)

router.put('',projectController.editExistingProject)

router.delete('/:id', projectController.deleteExistingProject)

module.exports = router;


