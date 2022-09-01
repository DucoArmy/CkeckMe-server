import express from 'express'

import {
    UserIN,
    UserOUT
} from '../controllers/mainController'
// import { protectedMiddleware } from '../middlewares'

const mainRouter = express.Router()

mainRouter.post('/in', UserIN)
mainRouter.post('/out', UserOUT)

export default mainRouter
