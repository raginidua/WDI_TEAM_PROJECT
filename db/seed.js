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

const f6 = new Freelancer({
  firstName: 'Davinder6',
  lastName: 'Kaur',
  email: 'dkaur6@hotmail.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f6.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f7 = new Freelancer({
  firstName: 'Davinder7',
  lastName: 'Kaur',
  email: 'dkaur7@hotmail.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f7.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f8 = new Freelancer({
  firstName: 'Davinder8',
  lastName: 'Kaur',
  email: 'dkaur8@hotmail.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f8.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f9 = new Freelancer({
  firstName: 'Davinder9',
  lastName: 'Kaur',
  email: 'dkaur9@hotmail.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f9.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f10 = new Freelancer({
  firstName: 'Davinder10',
  lastName: 'Kaur',
  email: 'dkaur10@hotmail.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f10.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});


const p1 = new Project({
  name: 'Davinder\'s project',
  description: 'amazing',
  leadFreelancer: f1._id,
  requiredTeamMembers: {
    UI: [undefined, undefined, undefined, undefined],
    UX: [undefined, undefined, undefined, undefined],
    frontEndDev: [],
    backEndDev: [],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },
  openTeamMembers: {
    UI: [undefined, undefined],
    UX: [undefined, undefined],
    frontEndDev: [],
    backEndDev: [],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },
  pendingTeamMembers: {
    UI: [f6._id, f7._id],
    UX: [f8._id, f9._id, f10._id],
    frontEndDev: [],
    backEndDev: [],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },
  activeTeamMembers: {
    UI: [f2._id, f3._id],
    UX: [f4._id, f5._id],
    frontEndDev: [],
    backEndDev: [],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },

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
  leadFreelancer: f2._id,
  requiredTeamMembers: {
    UI: [undefined, undefined, undefined, undefined],
    UX: [undefined, undefined, undefined, undefined],
    frontEndDev: [],
    backEndDev: [],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },
  openTeamMembers: {
    UI: [undefined, undefined],
    UX: [undefined, undefined],
    frontEndDev: [],
    backEndDev: [],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },
  pendingTeamMembers: {
    UI: [f8._id, f9._id, f10._id],
    UX: [f6._id, f7._id],
    frontEndDev: [],
    backEndDev: [],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },
  activeTeamMembers: {
    UI: [f1._id, f3._id],
    UX: [f4._id, f5._id],
    frontEndDev: [],
    backEndDev: [],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },

  budget: 15000,
  timeframe: '13 Days'
});
p2.save((err, project) => {
  if (err) return console.log(err);
  console.log(`${project.name} was saved`);
});
