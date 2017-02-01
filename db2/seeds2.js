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
  name: 'Brand new Game App for GA',
  description: 'Design and build a new game that will take over the gaming market',
  leadFreelancer: f1._id,
  requiredTeamMembers: {
    UI: 1,
    UX: 1,
    frontEndDev: 1,
    backEndDev: 1,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  openTeamMembers: {
    UI: 0,
    UX: 0,
    frontEndDev: 0,
    backEndDev: 0,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  waitingTeamMembers: {
    UI: [],
    UX: [],
    frontEndDev: [],
    backEndDev: [],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },
  liveTeamMembers: {
    UI: [f2._id],
    UX: [f3._id],
    frontEndDev: [f4._id],
    backEndDev: [f5._id],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },

  budget: 10000,
  timeframe: '3'
});
p1.save((err, project) => {
  if (err) return console.log(err);
  console.log(`${project.name} was saved`);
});

const p2 = new Project({
  name: 'A really useful mobile app',
  description: 'An app that will make the user\'s life so easy',
  leadFreelancer: f2._id,
  requiredTeamMembers: {
    UI: 1,
    UX: 0,
    frontEndDev: 1,
    backEndDev: 2,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 1,
    AndroidDev: 1
  },
  openTeamMembers: {
    UI: 1,
    UX: 0,
    frontEndDev: 1,
    backEndDev: 2,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 1,
    AndroidDev: 1
  },
  waitingTeamMembers: {
    UI: [f15._id, f14._id],
    UX: [],
    frontEndDev: [f13._id, f12._id],
    backEndDev: [f11._id, f10._id, f9._id],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [f8._id, f7._id],
    AndroidDev: [f6._id, f5._id]
  },
  liveTeamMembers: {
    UI: [],
    UX: [],
    frontEndDev: [],
    backEndDev: [],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },

  budget: 15000,
  timeframe: '6'
});
p2.save((err, project) => {
  if (err) return console.log(err);
  console.log(`${project.name} was saved`);
});

const p3 = new Project({
  name: 'Map my life',
  description: 'Build and design a map based application that will track every aspect of a user\'s life',
  leadFreelancer: f3._id,
  requiredTeamMembers: {
    UI: 1,
    UX: 0,
    frontEndDev: 2,
    backEndDev: 2,
    dataScientist: 0,
    marketing: 1,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  openTeamMembers: {
    UI: 0,
    UX: 0,
    frontEndDev: 1,
    backEndDev: 1,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  waitingTeamMembers: {
    UI: [],
    UX: [],
    frontEndDev: [f12._id, f14._id],
    backEndDev: [f13._id, f15._id],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },
  liveTeamMembers: {
    UI: [f8._id],
    UX: [],
    frontEndDev: [f6._id],
    backEndDev: [f7._id],
    dataScientist: [],
    marketing: [f4._id],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },

  budget: 15000,
  timeframe: '6'
});
p3.save((err, project) => {
  if (err) return console.log(err);
  console.log(`${project.name} was saved`);
});

const p4 = new Project({
  name: 'Highly secretive project',
  description: 'Lucrative money making project for educational organisation',
  leadFreelancer: f4._id,
  requiredTeamMembers: {
    UI: 0,
    UX: 0,
    frontEndDev: 3,
    backEndDev: 2,
    dataScientist: 0,
    marketing: 0,
    projectManager: 1,
    IOSDev: 1,
    AndroidDev: 1
  },
  openTeamMembers: {
    UI: 0,
    UX: 0,
    frontEndDev: 2,
    backEndDev: 1,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  waitingTeamMembers: {
    UI: [],
    UX: [],
    frontEndDev: [f3._id, f1._id, f6._id, f13._id],
    backEndDev: [f2._id, f9._id, f12._id],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },
  liveTeamMembers: {
    UI: [],
    UX: [],
    frontEndDev: [f11._id],
    backEndDev: [f8._id],
    dataScientist: [],
    marketing: [],
    projectManager: [f7._id],
    IOSDev: [f5._id],
    AndroidDev: [f10._id]
  },

  budget: 25000,
  timeframe: '8'
});
p4.save((err, project) => {
  if (err) return console.log(err);
  console.log(`${project.name} was saved`);
});

const p5 = new Project({
  name: 'The clueless wardrobe',
  description: 'App to dress me every morning!',
  leadFreelancer: f2._id,
  requiredTeamMembers: {
    UI: 1,
    UX: 0,
    frontEndDev: 2,
    backEndDev: 1,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 1,
    AndroidDev: 1
  },
  openTeamMembers: {
    UI: 0,
    UX: 0,
    frontEndDev: 2,
    backEndDev: 1,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 1
  },
  waitingTeamMembers: {
    UI: [],
    UX: [],
    frontEndDev: [f9._id, f11._id, f7._id, f8._id],
    backEndDev: [f3._id, f5._id],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: [f4]
  },
  liveTeamMembers: {
    UI: [f13._id],
    UX: [],
    frontEndDev: [],
    backEndDev: [],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [f10._id],
    AndroidDev: []
  },

  budget: 15000,
  timeframe: '5'
});
p5.save((err, project) => {
  if (err) return console.log(err);
  console.log(`${project.name} was saved`);
});

const p6 = new Project({
  name: 'My great new game app',
  description: 'A whack-a-mole style game with bright colours and sound',
  leadFreelancer: f2._id,
  requiredTeamMembers: {
    UI: 1,
    UX: 1,
    frontEndDev: 1,
    backEndDev: 1,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  openTeamMembers: {
    UI: 0,
    UX: 0,
    frontEndDev: 0,
    backEndDev: 0,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  waitingTeamMembers: {
    UI: [],
    UX: [],
    frontEndDev: [],
    backEndDev: [],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },
  liveTeamMembers: {
    UI: [f12._id],
    UX: [f13._id],
    frontEndDev: [f14._id],
    backEndDev: [f15._id],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },

  budget: 10000,
  timeframe: '3'
});
p6.save((err, project) => {
  if (err) return console.log(err);
  console.log(`${project.name} was saved`);
});

const p7 = new Project({
  name: 'Memory game',
  description: 'Memory game similar to Peak. But better.',
  leadFreelancer: f3._id,
  requiredTeamMembers: {
    UI: 1,
    UX: 1,
    frontEndDev: 2,
    backEndDev: 2,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  openTeamMembers: {
    UI: 0,
    UX: 0,
    frontEndDev: 0,
    backEndDev: 0,
    dataScientist: 0,
    marketing: 0,
    projectManager: 0,
    IOSDev: 0,
    AndroidDev: 0
  },
  waitingTeamMembers: {
    UI: [],
    UX: [],
    frontEndDev: [],
    backEndDev: [],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },
  liveTeamMembers: {
    UI: [f12._id],
    UX: [f3._id],
    frontEndDev: [f7._id, f10._id ],
    backEndDev: [f14._id, f8._id ],
    dataScientist: [],
    marketing: [],
    projectManager: [],
    IOSDev: [],
    AndroidDev: []
  },

  budget: 10000,
  timeframe: '3'
});
p7.save((err, project) => {
  if (err) return console.log(err);
  console.log(`${project.name} was saved`);
});











//F1 fully filled project
f1.myProjects.push(p1._id);
f2.projects.push(p1._id);
f3.projects.push(p1._id);
f4.projects.push(p1._id);
f5.projects.push(p1._id);

//F2 fully open with waiting project
f2.myProjects.push(p2._id);
f5.pendingProjects.push(p2._id);
f6.pendingProjects.push(p2._id);
f7.pendingProjects.push(p2._id);
f8.pendingProjects.push(p2._id);
f9.pendingProjects.push(p2._id);
f10.pendingProjects.push(p2._id);
f11.pendingProjects.push(p2._id);
f12.pendingProjects.push(p2._id);
f13.pendingProjects.push(p2._id);
f14.pendingProjects.push(p2._id);
f15.pendingProjects.push(p2._id);

//F3 part open: some filled but lots waiting project
f3.myProjects.push(p3._id);
f4.projects.push(p3._id);
f6.projects.push(p3._id);
f7.projects.push(p3._id);
f8.projects.push(p3._id);
f12.pendingProjects.push(p3._id);
f13.pendingProjects.push(p3._id);
f14.pendingProjects.push(p3._id);
f15.pendingProjects.push(p3._id);

//F4 part open: some filled but lots waiting project
f4.myProjects.push(p4._id);
f5.projects.push(p4._id);
f7.projects.push(p4._id);
f8.projects.push(p4._id);
f10.projects.push(p4._id);
f11.projects.push(p4._id);
f2.pendingProjects.push(p4._id);
f9.pendingProjects.push(p4._id);
f12.pendingProjects.push(p4._id);
f3.pendingProjects.push(p4._id);
f1.pendingProjects.push(p4._id);
f6.pendingProjects.push(p4._id);
f13.pendingProjects.push(p4._id);

//F2 part open: some filled but lots waiting project
f2.myProjects.push(p5._id);
f13.projects.push(p5._id);
f10.projects.push(p5._id);
f3.pendingProjects.push(p5._id);
f5.pendingProjects.push(p5._id);
f9.pendingProjects.push(p5._id);
f11.pendingProjects.push(p5._id);
f7.pendingProjects.push(p5._id);
f8.pendingProjects.push(p5._id);

//F2 fully filled project
f2.myProjects.push(p6._id);
f12.projects.push(p6._id);
f13.projects.push(p6._id);
f14.projects.push(p6._id);
f15.projects.push(p6._id);

//F2 fully filled project
f3.myProjects.push(p7._id);
f12.projects.push(p7._id);
f3.projects.push(p7._id);
f7.projects.push(p7._id);
f10.projects.push(p7._id);
f14.projects.push(p7._id);
f8.projects.push(p7._id);
