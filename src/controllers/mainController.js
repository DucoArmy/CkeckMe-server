import {
    getAttend,
    setAttend
} from '../models/mainModel'

export const UserGet = async (req, res) => {
    const { id } = req.body
    const result = await getAttend(id)
    return res.status(200)
    .json({
        status: 200,
        result
    })
}

export const UserSet = async (req, res) => {
    const { id, value } = req.body
    const result = await setAttend(id, value)
    return res.status(200)
    .json({
        status: 200
    })
}