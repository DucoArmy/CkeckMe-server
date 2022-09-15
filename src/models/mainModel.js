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
export const getAttend = (id) => {
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
export const getAllAttend = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * from attendance;`,
        (err, result, fields) => {
            resolve(result)
        })
    })
}

export const setAttend = (id, value) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT id from member where id = ${id};`,
        (err, result, fields) => {
            const getResult = (err, result, fields) => {
                if(err) {
                    reject(err)
                }
                else {
                    resolve(result)
                }
            }
            db.query(result.length === 1 ? 
                `UPDATE attendance SET isAttend = ${value} WHERE memberId = ${id};` :
                `INSERT INTO attendance value(${id}, ${value});`,
            getResult)
        })
    })
}