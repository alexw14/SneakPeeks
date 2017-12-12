const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {type: String, required: true, unique: true},
    subtitle: String,
    description: {type: String, required: true},
    category: {
      type: String,
      enum: ['Art', 'Design', 'Film & Video', 'Game', 'Music', 'Publishing', 'Technology'],
      required: true
    },
    images: [String],
    fundingGoal: {type: Number, required: true},
    currentFunding: {type: Number, default: 0},
    fundingDuration: {type: Number, required: true},
    backers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Project', projectSchema);