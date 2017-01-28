const express         = require('express');
const morgan          = require('morgan');
const mongoose        = require('mongoose');
const bodyParser      = require('body-parser');

const config          = require('./config/config');
const projectsRouter  = require('./config/projects-router');


const app             = express();

//connect to mongoose database
mongoose.connect(config.db, console.log(`mongoose connected to ${config.db}`));

//morgan used for loging of request information in terminal
//body-parser used to allow server to interpret data contained
//in post request bodies
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//when request made to localhost... /api/projects use the projectsRouter
app.use('/api/projects', projectsRouter);

//telling app to listen at port 3000 and logging message at start
app.listen(config.port, () => console.log(`server listening at port ${config.port}`));
