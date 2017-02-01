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
  github: 'MissDavinderKaur',
  email: 'dkaur1@hotmail.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f1.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f2 = new Freelancer({
  firstName: 'Ragini',
  lastName: 'Dua',
  github: 'raginidua',
  email: 'raginidua1@gmail.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f2.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f3 = new Freelancer({
  firstName: 'Ali',
  lastName: 'Molloy',
  github: 'alibongo',
  email: 'oioimolloy@gmail.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f3.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f4 = new Freelancer({
  firstName: 'Jack',
  lastName: 'Mathews',
  github: 'jackhkmathews',
  email: 'jackhkmatthews@gmail.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f4.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f5 = new Freelancer({
  firstName: 'Richard',
  lastName: 'Hayim',
  github: 'RICHARDAAH',
  email: 'richardhayim@hotmail.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f5.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f6 = new Freelancer({
  firstName: 'Hillary',
  lastName: 'Clinton',
  github: 'hillaryClinton',
  email: 'hillary@beenhacked.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f6.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f7 = new Freelancer({
  firstName: 'Bill',
  lastName: 'Murray',
  github: 'billMurray',
  email: 'bill@Ghostb.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f7.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f8 = new Freelancer({
  firstName: 'Elon',
  lastName: 'Musk',
  github: 'elonMusk',
  email: 'elon@tesla.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f8.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f9 = new Freelancer({
  firstName: 'Col',
  lastName: 'Needham',
  github: 'colNeedham',
  email: 'col@imdb.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f9.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f10 = new Freelancer({
  firstName: 'Noel',
  lastName: 'Gallagher',
  github: 'noelGallagher',
  email: 'noel@hateliam.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f10.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f11 = new Freelancer({
  firstName: 'Liam',
  lastName: 'Gallagher',
  github: 'liamGallagher',
  email: 'liam@hatenoel.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f11.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});


const f12 = new Freelancer({
  firstName: 'Eduardo',
  lastName: 'Saverin',
  github: 'edSaverin',
  email: 'eduardo@hatemark.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f12.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});


const f13 = new Freelancer({
  firstName: 'Mark',
  lastName: 'Zuckerberg',
  github: 'markyZ',
  email: 'mark@forgiveforgetEd.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f13.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});


const f14 = new Freelancer({
  firstName: 'Amber',
  lastName: 'Heard',
  github: 'amberHeard',
  email: 'amber@amber.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f14.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const f15 = new Freelancer({
  firstName: 'Johnny',
  lastName: 'Depp',
  github: 'jDepp',
  email: 'johnny@johnny.com',
  password: 'password',
  passwordConfirmation: 'password'
});
f15.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

const p1 = new Project({
  name: 'Davinder\'s project',
  description: 'Project is to design a blog.',
  leadFreelancer: f1._id,
  requiredTeamMembers: {
    UI: 4,
    UX: 4,
    frontEndDev: 0,
    backEndDev: 0,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  openTeamMembers: {
    UI: 2,
    UX: 2,
    frontEndDev: 0,
    backEndDev: 0,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  waitingTeamMembers: {
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
  liveTeamMembers: {
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
  name: 'Ragini\'s project',
  description: 'project is to help build a website for a law firm.',
  leadFreelancer: f1._id,
  requiredTeamMembers: {
    UI: 4,
    UX: 4,
    frontEndDev: 0,
    backEndDev: 0,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  openTeamMembers: {
    UI: 2,
    UX: 2,
    frontEndDev: 0,
    backEndDev: 0,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  waitingTeamMembers: {
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
  liveTeamMembers: {
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

  budget: 12000,
  timeframe: '30 Days'
});
p2.save((err, project) => {
  if (err) return console.log(err);
  console.log(`${project.name} was saved`);
});

const p3 = new Project({
  name: 'Ali\'s project',
  description: 'Project is to build a graphic design website.',
  leadFreelancer: f1._id,
  requiredTeamMembers: {
    UI: 4,
    UX: 4,
    frontEndDev: 0,
    backEndDev: 0,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  openTeamMembers: {
    UI: 2,
    UX: 2,
    frontEndDev: 0,
    backEndDev: 0,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  waitingTeamMembers: {
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
  liveTeamMembers: {
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

  budget: 9000,
  timeframe: '18 Days'
});
p3.save((err, project) => {
  if (err) return console.log(err);
  console.log(`${project.name} was saved`);
});

const p4 = new Project({
  name: 'Jacks\'s project',
  description: 'project is to build government backed website for AI.',
  leadFreelancer: f1._id,
  requiredTeamMembers: {
    UI: 4,
    UX: 4,
    frontEndDev: 0,
    backEndDev: 0,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  openTeamMembers: {
    UI: 2,
    UX: 2,
    frontEndDev: 0,
    backEndDev: 0,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  waitingTeamMembers: {
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
  liveTeamMembers: {
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

  budget: 80000,
  timeframe: '120 Days'
});
p4.save((err, project) => {
  if (err) return console.log(err);
  console.log(`${project.name} was saved`);
});
