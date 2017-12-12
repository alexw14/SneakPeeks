const Project = require('../models/project');

function index(req, res) {
  Project.find({}).then(projects => {
    res.json(projects);
  });
}

function create(req, res) {
  let project = new Project(req.body);
  project.save().then(project => {
    res.json({project});
  })
  .catch(err => res.json(400).json(err));
}


module.exports = {
  index,
  create
}