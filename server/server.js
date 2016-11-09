'use strict';

//////// ENV variables subject to change on deploy ////////
const PORT = process.env.PORT || 3000;
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/assignmentTracker';


//////// MODULE IMPORTS: Express, body-parser ////////
const {json} = require('body-parser');
const express = require('express');
const app = express();


//////// ROUTES IMPORTS: user, instructor, student, class, assignment ////////
const userRoutes = require('./routes/user');
const instructorRoutes = require('./routes/instructor');
const studentRoutes = require('./routes/student');
const classRoutes = require('./routes/class');
const assignmentRoutes = require('./routes/assignment');


//////// REDIS: Storing user session ////////
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

app.use(session({
  'store': new RedisStore({
    url: REDIS_URL
  }),
  'secret': 'cookiemonster'
}))

// Redis session sets app.locals each req
app.use((req, res, next) => {
   //app.locals.email = req.session.email
   //app.locals.uid = req.session.uid
   next();
})

//////// Middlewares ////////
app.use(express.static('client'));
app.use(json());
app.use(userRoutes, instructorRoutes, studentRoutes, classRoutes, assignmentRoutes);

app.get('/', (req, res) => {
  res.send("hello world")
})


app.listen(PORT, () => console.log(`listening on port ${PORT}`))
