const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
    description: String,
    category: String,
    country: String,
    images: [String],
    fundingGoal: Number,
    currentFunding: Number,
    fundingDuration: Number,
    backers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Project', projectSchema);