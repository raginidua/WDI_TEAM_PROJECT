const mongoose = require('mongoose');

const databaseURL = 'mongodb://localhost/WDI_TEAM_PROJECT';
mongoose.connect(databaseURL);

const Freelancer = require('../models/freelancer');
const Project = require('../models/project');

Project.collection.drop();
Freelancer.collection.drop();

const f1 = new Freelancer({
  firstName: 'Davinder',
  lastName: 'Kaur',
  email: 'dkaur1@hotmail.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f1.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f2 = new Freelancer({
  firstName: 'Davinder2',
  lastName: 'Kaur',
  email: 'dkaur2@hotmail.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f2.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f3 = new Freelancer({
  firstName: 'Davinder3',
  lastName: 'Kaur',
  email: 'dkaur3@hotmail.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f3.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f4 = new Freelancer({
  firstName: 'Davinder4',
  lastName: 'Kaur',
  email: 'dkaur4@hotmail.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f4.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f5 = new Freelancer({
  firstName: 'Davinder5',
  lastName: 'Kaur',
  email: 'dkaur5@hotmail.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f5.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const p1 = new Project({
  name: 'Davinder\'s project',
  description: 'amazing',
  leadFreelancer: f1._id,
  requiredTeamMembers: {
    UI: 1,
    UX: 2,
    frontEndDev: 0,
    backEndDev: 0,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  pendingTeamMembers: [f2._id, f4._id],
  activeTeamMembers: [f3._id, f5._id],

  budget: 5000,
  timeframe: '10 Days'
});
p1.save((err, project) => {
  if (err) return console.log(err);
  console.log(`${project.name} was saved`);
});

const p2 = new Project({
  name: 'Davinder\'s project2',
  description: 'amazing2',
  leadFreelancer: f2._id ,
  requiredTeamMembers: {
    UI: 1,
    UX: 2,
    frontEndDev: 0,
    backEndDev: 0,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  pendingTeamMembers: [f1._id, f5._id ],
  activeTeamMembers: [f3._id, f4._id],

  budget: 15000,
  timeframe: '13 Days'
});
p2.save((err, project) => {
  if (err) return console.log(err);
  console.log(`${project.name} was saved`);
});
