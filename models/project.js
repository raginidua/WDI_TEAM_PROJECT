const mongoose = require('mongoose');

//data structure for our project object
const projectSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  picture: {type: String, required: true},
  budget: {type: Number, required: true},
  timeframe: {type: String, required: true},
  leadFreelancer: {type: mongoose.Schema.ObjectId, ref: 'Freelancer', required: true},
  requiredTeamMembers: mongoose.Schema.Types.Mixed,
  openTeamMembers: mongoose.Schema.Types.Mixed,
  waitingTeamMembers: mongoose.Schema.Types.Mixed,
  liveTeamMembers: mongoose.Schema.Types.Mixed
});


projectSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.__v;
    delete ret.createdAt;
    delete ret.updatedAt;
    return ret;
  }
});
module.exports = mongoose.model('Project', projectSchema);
