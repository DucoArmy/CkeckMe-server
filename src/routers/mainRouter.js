import express from 'express'

import {
    UserGet,
    UserGetAll,
    UserSet
} from '../controllers/mainController'
import setAttendMiddleware from '../middlewares/setAttendMiddleware'

const mainRouter = express.Router()

mainRouter.get('/get', UserGet)
mainRouter.get('/get/all', UserGetAll)
mainRouter.post('/set', setAttendMiddleware, UserSet)

export default mainRouter
