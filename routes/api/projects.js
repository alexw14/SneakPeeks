const express = require('express');
const router = express.Router();
const Project = require('../../models/project');
const projectsCtrl = require('../../controllers/projectsController');

router.get('/', projectsCtrl.index);
router.post('/new', projectsCtrl.create);
router.put('/:id', projectsCtrl.update);

module.exports = router;