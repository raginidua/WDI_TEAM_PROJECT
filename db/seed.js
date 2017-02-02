const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(config.db);

const Freelancer = require('../models/freelancer');
const Project = require('../models/project');

//deleting existing collections before seeding new data
Project.collection.drop();
Freelancer.collection.drop();


//creating 15 freelancer objects and saving them to the database
const f1 = new Freelancer({
  firstName: 'Davinder',
  lastName: 'Kaur',
  github: 'MissDavinderKaur',
  email: 'dkaur1@hotmail.com',
  password: 'password',
  passwordConfirmation: 'password',
  profilePicture: 'https://s-media-cache-ak0.pinimg.com/originals/ca/04/f5/ca04f5cbbf14c8e5a07eab9bba31808e.jpg'
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
  passwordConfirmation: 'password',
  profilePicture: 'https://s-media-cache-ak0.pinimg.com/originals/ca/04/f5/ca04f5cbbf14c8e5a07eab9bba31808e.jpg'
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
  passwordConfirmation: 'password',
  profilePicture: 'https://s-media-cache-ak0.pinimg.com/originals/ca/04/f5/ca04f5cbbf14c8e5a07eab9bba31808e.jpg'
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
  passwordConfirmation: 'password',
  profilePicture: 'http://68.media.tumblr.com/f57865c82c87e9aacb1f54c1da0a5fc0/tumblr_inline_mrg2zjX7Si1qz4rgp.png'
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
  passwordConfirmation: 'password',
  profilePicture: 'http://68.media.tumblr.com/f57865c82c87e9aacb1f54c1da0a5fc0/tumblr_inline_mrg2zjX7Si1qz4rgp.png'
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
  passwordConfirmation: 'password',
  profilePicture: 'https://s-media-cache-ak0.pinimg.com/originals/ca/04/f5/ca04f5cbbf14c8e5a07eab9bba31808e.jpg'
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
  passwordConfirmation: 'password',
  profilePicture: 'http://68.media.tumblr.com/f57865c82c87e9aacb1f54c1da0a5fc0/tumblr_inline_mrg2zjX7Si1qz4rgp.png'
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
  passwordConfirmation: 'password',
  profilePicture: 'http://68.media.tumblr.com/f57865c82c87e9aacb1f54c1da0a5fc0/tumblr_inline_mrg2zjX7Si1qz4rgp.png'
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
  passwordConfirmation: 'password',
  profilePicture: 'http://68.media.tumblr.com/f57865c82c87e9aacb1f54c1da0a5fc0/tumblr_inline_mrg2zjX7Si1qz4rgp.png'
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
  passwordConfirmation: 'password',
  profilePicture: 'http://68.media.tumblr.com/f57865c82c87e9aacb1f54c1da0a5fc0/tumblr_inline_mrg2zjX7Si1qz4rgp.png'
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
  passwordConfirmation: 'password',
  profilePicture: 'http://68.media.tumblr.com/f57865c82c87e9aacb1f54c1da0a5fc0/tumblr_inline_mrg2zjX7Si1qz4rgp.png'
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
  passwordConfirmation: 'password',
  profilePicture: 'http://68.media.tumblr.com/f57865c82c87e9aacb1f54c1da0a5fc0/tumblr_inline_mrg2zjX7Si1qz4rgp.png'
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
  passwordConfirmation: 'password',
  profilePicture: 'http://68.media.tumblr.com/f57865c82c87e9aacb1f54c1da0a5fc0/tumblr_inline_mrg2zjX7Si1qz4rgp.png'
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
  passwordConfirmation: 'password',
  profilePicture: 'https://s-media-cache-ak0.pinimg.com/originals/ca/04/f5/ca04f5cbbf14c8e5a07eab9bba31808e.jpg'
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
  passwordConfirmation: 'password',
  profilePicture: 'http://68.media.tumblr.com/f57865c82c87e9aacb1f54c1da0a5fc0/tumblr_inline_mrg2zjX7Si1qz4rgp.png'
});
f15.save((err, user) => {
  if (err) return console.log(err);
  console.log(`${user.firstName} was saved`);
});

//7 projects created with various levels of position 'completion'
const p1 = new Project({
  name: 'Brand new Game App for GA',
  description: 'Design and build a new game that will take over the gaming market',
  leadFreelancer: f1._id,
  requiredTeamMembers: {
    'UIDesigners': 1,
    'UXDesigners': 1,
    'FrontendDevelopers': 1,
    'BackendDevelopers': 1,
    'DataScientists': 0,
    'Marketers': 0,
    'ProjectManagers': 0,
    'iOSDevelopers': 0,
    'AndroidDevelopers': 0
  },
  openTeamMembers: {
    'UIDesigners': 0,
    'UXDesigners': 0,
    'FrontendDevelopers': 0,
    'BackendDevelopers': 0,
    'DataScientists': 0,
    'Marketers': 0,
    'ProjectManagers': 0,
    'iOSDevelopers': 0,
    'AndroidDevelopers': 0
  },
  waitingTeamMembers: {
    'UIDesigners': [],
    'UXDesigners': [],
    'FrontendDevelopers': [],
    'BackendDevelopers': [],
    'DataScientists': [],
    'Marketers': [],
    'ProjectManagers': [],
    'iOSDevelopers': [],
    'AndroidDevelopers': []
  },
  liveTeamMembers: {
    'UIDesigners': [f2._id],
    'UXDesigners': [f3._id],
    'FrontendDevelopers': [f4._id],
    'BackendDevelopers': [f5._id],
    'DataScientists': [],
    'Marketers': [],
    'ProjectManagers': [],
    'iOSDevelopers': [],
    'AndroidDevelopers': []
  },
  budget: 10000,
  timeframe: '3',
  picture: 'http://www.curriculumresources.net/wp-content/uploads/2016/03/colorful-lightbulb.jpg'
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
    'UIDesigners': 1,
    'UXDesigners': 0,
    'FrontendDevelopers': 1,
    'BackendDevelopers': 2,
    'DataScientists': 0,
    'Marketers': 0,
    'ProjectManagers': 0,
    'iOSDevelopers': 1,
    'AndroidDevelopers': 1
  },
  openTeamMembers: {
    'UIDesigners': 1,
    'UXDesigners': 0,
    'FrontendDevelopers': 1,
    'BackendDevelopers': 2,
    'DataScientists': 0,
    'Marketers': 0,
    'ProjectManagers': 0,
    'iOSDevelopers': 1,
    'AndroidDevelopers': 1
  },
  waitingTeamMembers: {
    'UIDesigners': [f15._id, f14._id],
    'UXDesigners': [],
    'FrontendDevelopers': [f13._id, f12._id],
    'BackendDevelopers': [f11._id, f10._id, f9._id],
    'DataScientists': [],
    'Marketers': [],
    'ProjectManagers': [],
    'iOSDevelopers': [f8._id, f7._id],
    'AndroidDevelopers': [f6._id, f5._id]
  },
  liveTeamMembers: {
    'UIDesigners': [],
    'UXDesigners': [],
    'FrontendDevelopers': [],
    'BackendDevelopers': [],
    'DataScientists': [],
    'Marketers': [],
    'ProjectManagers': [],
    'iOSDevelopers': [],
    'AndroidDevelopers': []
  },

  budget: 15000,
  timeframe: '6',
  picture: 'http://www.curriculumresources.net/wp-content/uploads/2016/03/colorful-lightbulb.jpg'
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
    'UIDesigners': 1,
    'UXDesigners': 0,
    'FrontendDevelopers': 2,
    'BackendDevelopers': 2,
    'DataScientists': 0,
    'Marketers': 1,
    'ProjectManagers': 0,
    'iOSDevelopers': 0,
    'AndroidDevelopers': 0
  },
  openTeamMembers: {
    'UIDesigners': 0,
    'UXDesigners': 0,
    'FrontendDevelopers': 1,
    'BackendDevelopers': 1,
    'DataScientists': 0,
    'Marketers': 0,
    'ProjectManagers': 0,
    'iOSDevelopers': 0,
    'AndroidDevelopers': 0
  },
  waitingTeamMembers: {
    'UIDesigners': [],
    'UXDesigners': [],
    'FrontendDevelopers': [f12._id, f14._id],
    'BackendDevelopers': [f13._id, f15._id],
    'DataScientists': [],
    'Marketers': [],
    'ProjectManagers': [],
    'iOSDevelopers': [],
    'AndroidDevelopers': []
  },
  liveTeamMembers: {
    'UIDesigners': [f8._id],
    'UXDesigners': [],
    'FrontendDevelopers': [f6._id],
    'BackendDevelopers': [f7._id],
    'DataScientists': [],
    'Marketers': [f4._id],
    'ProjectManagers': [],
    'iOSDevelopers': [],
    'AndroidDevelopers': []
  },

  budget: 15000,
  timeframe: '6',
  picture: 'http://www.curriculumresources.net/wp-content/uploads/2016/03/colorful-lightbulb.jpg'
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
    'UIDesigners': 0,
    'UXDesigners': 0,
    'FrontendDevelopers': 3,
    'BackendDevelopers': 2,
    'DataScientists': 0,
    'Marketers': 0,
    'ProjectManagers': 1,
    'iOSDevelopers': 1,
    'AndroidDevelopers': 1
  },
  openTeamMembers: {
    'UIDesigners': 0,
    'UXDesigners': 0,
    'FrontendDevelopers': 2,
    'BackendDevelopers': 1,
    'DataScientists': 0,
    'Marketers': 0,
    'ProjectManagers': 0,
    'iOSDevelopers': 0,
    'AndroidDevelopers': 0
  },
  waitingTeamMembers: {
    'UIDesigners': [],
    'UXDesigners': [],
    'FrontendDevelopers': [f3._id, f1._id, f6._id, f13._id],
    'BackendDevelopers': [f2._id, f9._id, f12._id],
    'DataScientists': [],
    'Marketers': [],
    'ProjectManagers': [],
    'iOSDevelopers': [],
    'AndroidDevelopers': []
  },
  liveTeamMembers: {
    'UIDesigners': [],
    'UXDesigners': [],
    'FrontendDevelopers': [f11._id],
    'BackendDevelopers': [f8._id],
    'DataScientists': [],
    'Marketers': [],
    'ProjectManagers': [f7._id],
    'iOSDevelopers': [f5._id],
    'AndroidDevelopers': [f10._id]
  },

  budget: 25000,
  timeframe: '8',
  picture: 'http://www.curriculumresources.net/wp-content/uploads/2016/03/colorful-lightbulb.jpg'
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
    'UIDesigners': 1,
    'UXDesigners': 0,
    'FrontendDevelopers': 2,
    'BackendDevelopers': 1,
    'DataScientists': 0,
    'Marketers': 0,
    'ProjectManagers': 0,
    'iOSDevelopers': 1,
    'AndroidDevelopers': 1
  },
  openTeamMembers: {
    'UIDesigners': 0,
    'UXDesigners': 0,
    'FrontendDevelopers': 2,
    'BackendDevelopers': 1,
    'DataScientists': 0,
    'Marketers': 0,
    'ProjectManagers': 0,
    'iOSDevelopers': 0,
    'AndroidDevelopers': 1
  },
  waitingTeamMembers: {
    'UIDesigners': [],
    'UXDesigners': [],
    'FrontendDevelopers': [f9._id, f11._id, f7._id, f8._id],
    'BackendDevelopers': [f3._id, f5._id],
    'DataScientists': [],
    'Marketers': [],
    'ProjectManagers': [],
    'iOSDevelopers': [],
    'AndroidDevelopers': [f4]
  },
  liveTeamMembers: {
    'UIDesigners': [f13._id],
    'UXDesigners': [],
    'FrontendDevelopers': [],
    'BackendDevelopers': [],
    'DataScientists': [],
    'Marketers': [],
    'ProjectManagers': [],
    'iOSDevelopers': [f10._id],
    'AndroidDevelopers': []
  },

  budget: 15000,
  timeframe: '5',
  picture: 'http://www.curriculumresources.net/wp-content/uploads/2016/03/colorful-lightbulb.jpg'
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
    'UIDesigners': 1,
    'UXDesigners': 1,
    'FrontendDevelopers': 1,
    'BackendDevelopers': 1,
    'DataScientists': 0,
    'Marketers': 0,
    'ProjectManagers': 0,
    'iOSDevelopers': 0,
    'AndroidDevelopers': 0
  },
  openTeamMembers: {
    'UIDesigners': 0,
    'UXDesigners': 0,
    'FrontendDevelopers': 0,
    'BackendDevelopers': 0,
    'DataScientists': 0,
    'Marketers': 0,
    'ProjectManagers': 0,
    'iOSDevelopers': 0,
    'AndroidDevelopers': 0
  },
  waitingTeamMembers: {
    'UIDesigners': [],
    'UXDesigners': [],
    'FrontendDevelopers': [],
    'BackendDevelopers': [],
    'DataScientists': [],
    'Marketers': [],
    'ProjectManagers': [],
    'iOSDevelopers': [],
    'AndroidDevelopers': []
  },
  liveTeamMembers: {
    'UIDesigners': [f12._id],
    'UXDesigners': [f13._id],
    'FrontendDevelopers': [f14._id],
    'BackendDevelopers': [f15._id],
    'DataScientists': [],
    'Marketers': [],
    'ProjectManagers': [],
    'iOSDevelopers': [],
    'AndroidDevelopers': []
  },

  budget: 10000,
  timeframe: '3',
  picture: 'http://www.curriculumresources.net/wp-content/uploads/2016/03/colorful-lightbulb.jpg'
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
    'UIDesigners': 1,
    'UXDesigners': 1,
    'FrontendDevelopers': 2,
    'BackendDevelopers': 2,
    'DataScientists': 0,
    'Marketers': 0,
    'ProjectManagers': 0,
    'iOSDevelopers': 0,
    'AndroidDevelopers': 0
  },
  openTeamMembers: {
    'UIDesigners': 0,
    'UXDesigners': 0,
    'FrontendDevelopers': 0,
    'BackendDevelopers': 0,
    'DataScientists': 0,
    'Marketers': 0,
    'ProjectManagers': 0,
    'iOSDevelopers': 0,
    'AndroidDevelopers': 0
  },
  waitingTeamMembers: {
    'UIDesigners': [],
    'UXDesigners': [],
    'FrontendDevelopers': [],
    'BackendDevelopers': [],
    'DataScientists': [],
    'Marketers': [],
    'ProjectManagers': [],
    'iOSDevelopers': [],
    'AndroidDevelopers': []
  },
  liveTeamMembers: {
    'UIDesigners': [f12._id],
    'UXDesigners': [f3._id],
    'FrontendDevelopers': [f7._id, f10._id ],
    'BackendDevelopers': [f14._id, f8._id ],
    'DataScientists': [],
    'Marketers': [],
    'ProjectManagers': [],
    'iOSDevelopers': [],
    'AndroidDevelopers': []
  },

  budget: 10000,
  timeframe: '3',
  picture: 'http://www.curriculumresources.net/wp-content/uploads/2016/03/colorful-lightbulb.jpg'
});
p7.save((err, project) => {
  if (err) return console.log(err);
  console.log(`${project.name} was saved`);
});

//can't create a project without a freelancer
//once project created reference must be pushed back into
//the relevant freelancers documents (e.g into pending applications,
//projects I'm in, etc)

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
