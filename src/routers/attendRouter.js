import express from 'express'

import {
    UserSet,
    UserGetAsName,
    UserGetAsId,
    UserGetAll
} from '../controllers/attendController'
import setAttendMiddleware from '../middlewares/setAttendMiddleware'

const attendRouter = express.Router()

// attendRouter.get('/get/id', UserGetAsId)
attendRouter.get('/get/name', UserGetAsName)
attendRouter.get('/get/all', UserGetAll)
attendRouter.post('/set', setAttendMiddleware, UserSet)

export default attendRouter