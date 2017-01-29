const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

const freelancerSchema = new mongoose.Schema({
  firstName: { type: String, trim: true, required: true},
  lastName: { type: String, trim: true, required: true},
  email: { type: String, trim: true, required: true},
  passwordHash: { type: String, required: true},
  githubAccount: { type: String, trim: true },
  personalWebsite: { type: String, trim: true },
  linkedIn: { type: String, trim: true },
  projects: [{ type: mongoose.Schema.ObjectId, ref: 'Projects' }],
  myProjects: [{ type: mongoose.Schema.ObjectId, ref: 'Projects' }]
}, {
  timestamps: true
});
//creating virtual of password
//runs a set pw function which sets the value of the pw virtual & value of pw hash
freelancerSchema
  .virtual('password')
  .set(setPassword);

//create virtual of pw confirmation
//runs the set pw confirmation which sets the value of pw confirmation
freelancerSchema
  .virtual('passwordConfirmation')
  .set(setPasswordConfirmation);

//path to passwordHash
//run validatePasswordHash function which checks to see if there's a pw & if matches pw confirmation
freelancerSchema
  .path('passwordHash')
  .validate(validatePasswordHash);

//creating a method as part of the freelancers model which checks pw against the pw hash.
freelancerSchema.methods.validatePassword = validatePassword;

module.exports = mongoose.model('Freelancer', freelancerSchema);

function setPassword(value) {
  this._password    = value;
  this.passwordHash = bcrypt.hashSync(value, bcrypt.genSaltSync(8));
}

function setPasswordConfirmation (passwordConfirmation){
  this._passwordConfirmation = passwordConfirmation;
}

function validatePasswordHash(){
  if (this.isNew) {
    if (!this._password){
      return this.invalidate('password', 'Password is required');
    }

    if (this._password !== this._passwordConfirmation){
      return this.invalidate('passwordConfirmation', 'Passwords do not match');
    }
  }
}

function validatePassword(password){
  return bcrypt.compareSync(password, this.passwordHash);
}
