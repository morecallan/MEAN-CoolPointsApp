//////// ENV variables subject to change on deploy ////////
const PORT = process.env.PORT || 3000
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379'

//////// MODULE IMPORTS: Express, body-parser ////////
const {json} = require('body-parser');
const express = require('express');
const app = express();

//////// REDIS: Storing user session ////////
const session = require('express-session')
const RedisStore = require('connect-redis')(session)

app.use(session({
  'store': new RedisStore({
    url: REDIS_URL
  }),
  'secret': 'cookiemonster'
}))


app.use((req, res, next) => {
   //app.locals.email = req.session.email
   //app.locals.uid = req.session.uid
   next()
})

//////// Middlewares ////////
app.use(express.static('client'))
app.use(json())

app.get('/', (req, res) => {
  console.log("hello world")
})


app.listen(PORT, () => console.log(`listening on port ${PORT}`))
