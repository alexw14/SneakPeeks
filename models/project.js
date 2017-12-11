const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: String,
    subtitle: String,
    description: String,
    category: {
      type: String,
      enum: ['Art', 'Design', 'Fashion', 'Film & Video', 'Food', 'Game', 'Music', 'Photography', 'Publishing', 'Technology']
    },
    images: [String],
    fundingGoal: Number,
    currentFunding: {type: Number, default: 0},
    fundingDuration: Number,
    backers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Project', projectSchema);