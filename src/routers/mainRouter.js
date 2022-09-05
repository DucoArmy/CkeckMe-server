import express from 'express'

import {
    UserIN,
    UserOUT,
    test
} from '../controllers/mainController'
// import { protectedMiddleware } from '../middlewares'

const mainRouter = express.Router()

mainRouter.post('/in', UserIN)
mainRouter.post('/out', UserOUT)
mainRouter.post('/test', test)

export default mainRouter
