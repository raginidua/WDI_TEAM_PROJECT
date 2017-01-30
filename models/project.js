const mongoose = require('mongoose');

const Project = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  budget: {type: Number, required: true},
  timeframe: {type: String, required: true},
  leadFreelancer: {type: mongoose.Schema.ObjectId, ref: 'Freelancer', required: true},
  requiredTeamMembers: { type: Object, required: true },
  pendingTeamMembers: [{ type: mongoose.Schema.ObjectId, ref: 'Freelancer' }],
  activeTeamMembers: [{ type: mongoose.Schema.ObjectId, ref: 'Freelancer' }]
});

module.exports = mongoose.model('Project', Project);
