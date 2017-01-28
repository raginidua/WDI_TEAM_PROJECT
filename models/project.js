const mongoose = require('mongoose');

const Project = new mongoose.Schema({
  name: {type: String, required: true},
  clientPublicName: {type: String, required: true},
  clientPrivateName: {type: String, required: true},
  budget: {type: Number, required: true}
});

module.exports = mongoose.model('Project', Project);
