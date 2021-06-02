
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

async function getDataDBPython(array,skills) {
    const filteredArray = [];

    if(skills.trim() !== '' && skills !== null && skills !== undefined) {
        function curryingSkills(skills) {
            return async function(num) {
                const skillsMap = skills.split(' ');
                let query = 'ORDER BY'
                skillsMap.map( (element, i) => {
                    if(i == 0) {// первый элемент без знака +
                        query += ` CASE WHEN acquired_skills LIKE '%${element}%' THEN 1 ELSE 0 END`
                    }
                    else {
                        query += ` + CASE WHEN acquired_skills LIKE '%${element}%' THEN 1 ELSE 0 END`
                    }
                    
                })
                const allCoursesID = await executeQuery(`SELECT course_ID, title, author, rating, price FROM all_courses WHERE course_ID=${parseInt(num) + 1} ${query}`)
    
                filteredArray.push(allCoursesID[0])
            }
        } 

        await Promise.all( array.map( curryingSkills(skills)) ) 
    } else {
        await Promise.all(array.map(async (index) => {
            const allCoursesID = await executeQuery(`SELECT course_ID, title, author, rating, price FROM all_courses WHERE course_ID=${parseInt(index) + 1}`)
            filteredArray.push(allCoursesID[0])
        }))
    }

    return filteredArray
}

module.exports = {
    getDetailsDB,
    getDataDB,
    getDataDBPython
};
