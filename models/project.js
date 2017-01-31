const mongoose = require('mongoose');

const Project = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  budget: {type: Number, required: true},
  timeframe: {type: String, required: true},
  leadFreelancer: {type: mongoose.Schema.ObjectId, ref: 'Freelancer', required: true},
  requiredTeamMembers: { type: Object, required: true },
  openTeamMembers: { type: Object, required: true },
  pendingTeamMembers: { type: Object, required: true },
  activeTeamMembers: { type: Object, required: true }
});

module.exports = mongoose.model('Project', Project);
