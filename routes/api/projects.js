const express = require('express');
const router = express.Router();
const Project = require('../../models/project');
const projectsCtrl = require('../../controllers/projectsController');

router.get('/', projectsCtrl.index);
router.post('/new', checkAuth, projectsCtrl.create);
router.put('/:id', checkAuth, projectsCtrl.update);

// Helper function for checking authorization
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'not authenticated'});
}

module.exports = router;