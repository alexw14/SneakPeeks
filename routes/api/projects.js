const express = require('express');
const router = express.Router();
const Project = require('../../models/project');
const projectsCtrl = require('../../controllers/projectsController');

router.post('/new', projectsCtrl.create);

module.exports = router;