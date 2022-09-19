import express from 'express'
import session from 'express-session'

import attendRouter from './routers/attendRouter'
import memberRouter from './routers/memberRouter'

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

app.use('/member', memberRouter)
app.use('/attend', attendRouter)

export default app