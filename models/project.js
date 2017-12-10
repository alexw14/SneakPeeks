const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
    description: Text,
    category: String,
    country: String,
    images: [],
    fundingGoal: Number,
    currentFunding: Number,
    fundingDuration: Number,
    backers: [],
    owner: []
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Project', projectSchema);