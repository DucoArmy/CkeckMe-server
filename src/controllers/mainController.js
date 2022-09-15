import {
    getAttend,
    setAttend,
    getAllAttend
} from '../models/mainModel'

export const UserGet = async (req, res) => {
    const { id } = req.query
    const result = await getAttend(id)
    return res.status(200)
    .json({
        status: 200,
        result
    })
}
export const UserGetAll = async (req, res) => {
    const result = await getAllAttend()
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