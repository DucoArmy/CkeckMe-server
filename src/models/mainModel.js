import mysql from 'mysql'
import db from '../db'

export const SelectUser = () => {
    return new Promise((resolve, reject) => {
        db.query("select * from member;", (err, result, fields) => {
            if(err) {
                reject(err)
            }
            else {
                resolve(result)
            }
        })
    })
}

export const InsertUser = (user) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO member(name, grade, class, birthday, email, github, phone_number) 
        VALUES('${user.name}', ${user.grade}, ${user.class}, '${user.birthday}', '${user.email}', '${user.github}', '${user.phone_number}');`
        , (err, result, fields) => {
            if(err) {
                reject(err)
            }
            else {
                resolve(result)
            }
        })
    })
}
export const getAttendAsId = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT isAttend from attendance where memberId = ${id};`,
        (err, result, fields) => {
            if(result.length != 1) {
                db.query(`INSERT INTO attendance value(${id}, 0);`),
                resolve(0)
            }
            else {
                resolve(result[0].isAttend)
            }
        })
    })
}
export const getAttendAsName = (name) => {
    return new Promise((resolve, reject) => {
        db.query(`select attendance.isAttend from attendance 
                LEFT OUTER JOIN member on attendance.memberId = member.id 
                where member.name = "${name}";`,
        (err, result, fields) => {
            if(result.length != 1) {
                db.query(`INSERT INTO attendance value(${id}, 0);`),
                resolve(0)
            }
            else {
                resolve(result[0].isAttend)
            }
        })
    })
}
export const getAttendAll = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * from attendance;`,
        (err, result, fields) => {
            resolve(result)
        })
    })
}

export const setAttend = (id, value) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT memberId from attendance where memberId = ${id};`,
        (err, result, fields) => {
            const getResult = (err, result, fields) => {
                if(err) {
                    reject(err)
                }
                else {
                    resolve(result)
                }
            }
            console.log(result.length)
            db.query(result.length === 1 ? 
                `UPDATE attendance SET isAttend = ${value} WHERE memberId = ${id};` :
                `INSERT INTO attendance value(${id}, ${value});`,
            getResult)
        })
    })
}