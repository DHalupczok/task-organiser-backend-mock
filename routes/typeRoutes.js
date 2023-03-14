const express = require('express');

const typeController = require('../controllers/typeController')

const router = express.Router();

router.get('/:projectId', typeController.getAllByProjectId)

router.post('/',typeController.createNew)

router.put('/',typeController.editExisting)

router.delete('/:id', typeController.deleteExisting)

module.exports = router;


