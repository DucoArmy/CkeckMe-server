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
    console.log(`INSERT INTO member(name, grade, class, birthday, email, github, phone_number) 
    VALUES('${user.name}', ${user.grade}, ${user.class}, '${user.birthday}', '${user.email}', '${user.github}', '${user.phone_number}');`)
    // return new Promise((resolve, reject) => {
    //     db.query(`INSERT INTO member(name, grade, class, birthday, email, github, phone_number) 
    //     VALUES('${user.name}', ${user.grade}, ${user.class}, '${user.birthday}', '${user.email}', '${user.github}', '${user.phone_number}');`
    //     , (err, result, fields) => {
    //         if(err) {
    //             reject(err)
    //         }
    //         else {
    //             resolve(result)
    //         }
    //     })
    // })
}