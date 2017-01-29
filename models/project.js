const mongoose = require('mongoose');

const Project = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  publicId: {type: String, required: true},
  leadFreelancer: {type: mongoose.Schema.ObjectId, ref: 'Freelancer'},
  requiredTeamMembers: [{ type: mongoose.Schema.ObjectId, ref: 'Freelancer', required: true }],
  pendingTeamMembers: [{ type: mongoose.Schema.ObjectId, ref: 'Freelancer', required: true }],
  activeTeamMembers: [{ type: mongoose.Schema.ObjectId, ref: 'Freelancer', required: true }],
  budget: {type: Number, required: true},
  deadLine: {type: Date, required: true}
});

module.exports = mongoose.model('Project', Project);
