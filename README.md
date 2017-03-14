# team:up

![image](http://i.imgur.com/yfZmtjZ.png?1)

**See it here: [team:up](https://bytemeteamup.herokuapp.com/).**

##Overview

This application was our team project for the Web Development Immersive course at General Assembly in London.  I was in **team byte:me** and worked with four other classmates.  

The brief for the project was to develop a RESTful app with authentications using an AnjularJS front-end, a Node.js/Express.js back-end, and a MongoDB database. 

As a team, we generated several different ideas and discussed all of them.  As a team of developers, we wanted to focus on an app which would help developers.  We decided to build a platform allowing lead freelancer developers to build a team of other freelancers to help them tackle client projects.  

The lead freelancer can post a job, other freelancers can apply for the job and the lead freelancer can accept or reject the applicants until the team is fully populated.  In this way, an agency model is replicated online, and the lead freelancer can capture the benefits of working in a team with a diverse skill set. The tool would also make it easier for the freelancer to keep track of who is working on the project rather than farming out aspects of the project ad-hoc.  

We set up 9 different categories for freelancers which they are required to confirm when registering: Back-end Developers, Front-end Developers, Designers, Project Managers etc. 

We created the app based on two major models - Freelancers and Projects.  A freelancer had fields called 'My Projects' (projects they owned), Projects (projects they were members of not as the lead freelancer) and 'Pending projects' (projects they had applied for). 

The projects model had fields including lead freelancer, required team members, open team members, waiting team members and live team members.  In hindsight, it may have been possible to do the models in a more elegant way as each time a project was created, applicants applied and were accepted or rejected, multiple fields had to be simultaneously amended. 

##How to use the app

**Login/Register**

![image](http://i.imgur.com/L6aTm3o.png?1)

When the User visits the website, there is an option to Register and Login. This step is built on JWT authentication. Once the user has logged in or registered, they are assigned a unique session token which allows them to make the API requests necessary for the application to work.


**User enters website on their profile page**

![image](http://i.imgur.com/tdZDObq.png?1)

The user can see projects they have created and own, projects they have applied for and been accepted on to, and projects for which their application is pending.

**User can use the navbar link to create a new project**

![image](http://i.imgur.com/vDaoTYd.png?1)

The new project information includes the name and description of the project, the total budget and the timeframe over which the project can take place. The project owner can also build the required team on this page by selecting the different roles and choosing the umbers required. 

**User saves the project and it is now searchable by other freelancers who can apply for the roles**

![image](http://i.imgur.com/gn1ULVA.png?1)

**The logged in user can search all available projects by clicking on the Projects tab in the navbar and can also filter through them**

![image](http://i.imgur.com/FgUTtXP.png?1)

![image](http://i.imgur.com/pRji7Jq.png?1)

**The user can click on one of the projects and apply for the role.**

![image](http://i.imgur.com/w81tOgP.png?1)

**The owner of the project can then log in, see the pending applications and accept or reject the applicants**

![image](http://i.imgur.com/89pYntb.png?1)

##Technologies Used

**Back-end**

Node.js, Express.js, gulp.js, MongoDB, Mongoose, JSON web tokens, Bcrypt, ES6.

**Front-end**

JavaScript, jQuery, AngularJS, HTML, CSS, SCSS, Materialize, AJAX requests, User Authentication.


