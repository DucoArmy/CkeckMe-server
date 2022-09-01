import express from 'express'
import session from 'express-session'

import mainRouter from './routers/mainRouter'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {},
  })
)

app.use('/main', mainRouter)
export default app
