const { request } = require('express');
const mysql = require('mysql2');
const dbConfig = {
    host: "localhost",
    user: "admin",
    database: "courses",
    password: "admin"
};

async function getDataDB(table,query) {
    const {course, skill} = query;
    if (course || skill) {
        let QUERY = `SELECT course_ID, title, author, rating, price 
        FROM ${table} 
        WHERE description LIKE'%${course ? course : 'OOPS'}%' 
        OR acquired_skills LIKE'%${skill ? skill : 'OOPS'}%'`;

        const data =  await executeQuery(QUERY)

        return data
    }

}

async function getDetailsDB(table,id) {
    const {courseId} = id;

    let QUERY_DETAILS = `SELECT * FROM ${table} 
                         WHERE course_ID = ${courseId}`;
    
    const data =  await executeQuery(QUERY_DETAILS)  //array expected here

    return data[0];
}


async function executeQuery(query) {
    const connection = mysql.createConnection(dbConfig);
    return await new Promise(async (resolve, reject) => {
        connection.query(query, (err, results) => {
            if(err) reject(err);

            resolve(results);
        });

        connection.end(err => {
            if (err) {
                console.log("Ошибка отключения: " + err.message);
            }
        });
    });
}

//python

async function getDataDBPython(array) {
    const filteredArray = [];

    await Promise.all(array.map(async (index) => {
        const allCoursesID = await executeQuery(`SELECT course_ID, title, author, rating, price 
                                                  FROM all_courses WHERE course_ID=${index+1}`)

        filteredArray.push(allCoursesID[0])
    })) 
    

        console.log(filteredArray)

    return filteredArray
}

module.exports = {
    getDetailsDB,
    getDataDB,
    getDataDBPython
};