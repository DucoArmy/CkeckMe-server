import {
    SelectUser,
    InsertUser
} from '../models/mainModel'

export const UserIN = async (req, res) => {
    console.log(req.body.name)
    return res.status(200).json({
        code: 200,
        errorMessage: 'OK',
    })
}

export const UserOUT = async (req, res) => {
    console.log("OUT")
    return res.status(200).json({
        code: 200,
        errorMessage: 'OK',
    })
}

export const test = async (req, res) => {
    console.log(await InsertUser(req.body))
    return res.status(200).json({
        code: 200,
        errorMessage: 'OK',
    })
}