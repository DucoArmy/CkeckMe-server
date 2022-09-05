import express from 'express'

import {
    UserGet,
    UserSet
} from '../controllers/mainController'
// import { protectedMiddleware } from '../middlewares'

const mainRouter = express.Router()

mainRouter.get('/get', UserGet)
mainRouter.post('/set', UserSet)

export default mainRouter
