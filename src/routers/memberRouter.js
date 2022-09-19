import express from 'express'

import {
    UserGet,
    UserGetAll,
    UserSet
} from '../controllers/memberController'
import setAttendMiddleware from '../middlewares/setAttendMiddleware'

const memberRouter = express.Router()

// memberRouter.get('/get/id', UserGetAsId)
// memberRouter.get('/get/name', UserGetAsName)
// memberRouter.get('/get/all', UserGetAll)
// memberRouter.post('/set', setAttendMiddleware, UserSet)

export default memberRouter