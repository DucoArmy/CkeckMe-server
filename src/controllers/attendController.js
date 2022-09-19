import {
    getAttendAsId,
    getAttendAsName,
    setAttend,
    getAttendAll
} from '../models/mainModel'

export const UserGetAsId = async (req, res) => {
    const { id } = req.query
    let result
    try { result = await getAttendAsId(name) }
    catch(e) { console.log(e) }
    return res.status(200)
    .json({
        status: 200,
        result
    })
}
export const UserGetAsName = async (req, res) => {
    const { name } = req.query
    let result
    try { result = await getAttendAsName(name) }
    catch(e) { console.log(e) }
    return res.status(200)
    .json({
        status: 200,
        result
    })
}
export const UserGetAll = async (req, res) => {
    let result
    try { result = await getAttendAll() }
    catch(e) { console.log(e) }
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