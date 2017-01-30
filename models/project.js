const mongoose = require('mongoose');

const Project = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  publicId: {type: String, required: true},
  leadFreelancer: {type: mongoose.Schema.ObjectId, ref: 'Freelancer'},
  requiredTeamMembers: { type: Object, required: true },
  pendingTeamMembers: [{ type: mongoose.Schema.ObjectId, ref: 'Freelancer' }],
  activeTeamMembers: [{ type: mongoose.Schema.ObjectId, ref: 'Freelancer' }],
  budget: {type: Number, required: true},
  timeframe: {type: Date, required: true}
});

module.exports = mongoose.model('Project', Project);
