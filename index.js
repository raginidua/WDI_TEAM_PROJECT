const express           = require('express');
const morgan            = require('morgan');
const mongoose          = require('mongoose');
const bodyParser        = require('body-parser');
const cors              = require('cors');
const expressJWT        = require('express-jwt');

const config            = require('./config/config');
const projectsRouter    = require('./config/projects-router');
const freelancersRouter = require('./config/freelancers-router');
// const dest              = `${__dirname}/public`;
const app               = express();

//connect to mongoose database
mongoose.connect(config.db, console.log(`mongoose connected to ${config.db}`));

//morgan used for loging of request information in terminal
//body-parser used to allow server to interpret data contained
//in post request bodies
//cors used to enable access to backend api
//express JWTtoken needs to be validated for viewing everything. Except for login & register, and the projects index that we agreed will be public

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', express.static('public'));
app.use('/', express.static('bower_components'));
//re added from original blocked out code. AM
app.use('/api', expressJWT({ secret: config.secret })
.unless({
  path: [
    { url: '/api/freelancers/register', methods: ['POST'] },
    { url: '/api/freelancers/login', methods: ['POST'] },
    { url: '/api/projects', method: ['GET'] }
  ]
}));

app.use(jwtErrorHandler);


function jwtErrorHandler(err, req, res, next){
  if(err.name !=='UnauthorizedError') return next();
  return res.status(401).json({ message: 'Unauthorized Request'});
}


//when request made to localhost... /api/projects use the projectsRouter
app.use('/api/projects', projectsRouter);
app.use('/api/freelancers', freelancersRouter);

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

//telling app to listen at port 3000 and logging message at start
app.listen(config.port, () => console.log(`server listening at port ${config.port}`));


//can someone explain the below?

// app.use('/', express.static('public'));
// app.use('/', express.static('bower_components'));
// app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));
