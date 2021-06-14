
const mysql = require('mysql2');
const dbConfig = {
    host: "localhost",
    user: "admin",
    database: "courses",
    password: "admin"
};

async function getJobsDB() {
    const connection = mysql.createConnection(dbConfig);
        let QUERY = `SELECT ID, name FROM jobs`;

        const data =  await executeQuery(QUERY,connection)

    connection.end( err => {
        if (err) console.log('ошибка закрытия соединения '+ err)
    })

    return data

}

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
    const connection = mysql.createConnection(dbConfig);
    const {courseId} = id;

    let QUERY_DETAILS = `SELECT * FROM ${table} 
                         WHERE course_ID = ${courseId}`;
    
    const data =  await executeQuery(QUERY_DETAILS,connection)  //array expected here

    connection.end( err => {
        if (err) console.log('ошибка закрытия соединения '+ err)
    })

    return data[0];
}


async function executeQuery(query,connection=null) {

    const data =  await new Promise(async (resolve, reject) => {
        connection.query(query, (err, results) => {
            if(err) reject(err);

            resolve(results);
        })

    })

    return data
}

//python

async function getDataDBPython(array,skills) {
    const connection = mysql.createConnection(dbConfig);
    const filteredArray = [];

    if(skills.trim() !== '') {
        function curryingSkills(skills) {
            return async function(num) {
                const skillsMap = skills.split(' ');
                let query = 'ORDER BY'
                await skillsMap.map( (element, i) => {
                    if(i == 0) {// первый элемент без знака +
                        query += ` CASE WHEN acquired_skills LIKE '%${element}%' THEN 1 ELSE 0 END`
                    }
                    else {
                        query += ` + CASE WHEN acquired_skills LIKE '%${element}%' THEN 1 ELSE 0 END`
                    }
                    
                })
                // console.log('end', num);
                const allCoursesID = await executeQuery(`SELECT * FROM all_courses WHERE course_ID=${parseInt(num) + 1} ${query}`, connection)
    
                filteredArray.push(allCoursesID[0])
            }
        } 

        await Promise.all( array.map( curryingSkills(skills)) ) 
        return filteredArray
    } else {
        // await Promise.all(array.map(async (index) => {
        //     const allCoursesID = await executeQuery(`SELECT course_ID, title, author, rating, price FROM all_courses WHERE course_ID=${parseInt(index) + 1}`)
        //     filteredArray.push(allCoursesID[0])
        // }))
        const query = await sliceQuery(array);
        console.log(typeof query);
        const allCoursesID = await executeQuery(query,connection);

        connection.end( err => {
            if (err) console.log('ошибка закрытия соединения '+ err)
        })
        return allCoursesID

    }

}

async function getVacancyDB(vacancyName, skillsLearned) {
    const connection = mysql.createConnection(dbConfig);

    const query = `SELECT competition FROM jobs WHERE name='${vacancyName}'` 
    const data = await executeQuery(query,connection);
    const competitionList = await deleteLearnedSkills(data,skillsLearned);
    console.log(competitionList)

    let beliberda = [];
    for await (let skill of competitionList) {
        const query = `SELECT course_ID, title, duration, rating, price FROM all_courses WHERE title LIKE'%${skill}%' LIMIT 3`
        const vacancyList = await executeQuery(query, connection)
        // const obj = {skill: list}
        if (vacancyList.length > 0) {
            beliberda.push({skillName: skill, skillsList :  vacancyList})
        }
    }
    connection.end( err => {
        if (err) console.log('ошибка закрытия соединения '+ err)
    })
    
    return beliberda
}


async function sliceQuery(array) {
    let query = 'SELECT course_ID, title, duration, rating, price FROM all_courses WHERE course_ID IN ';
    const in_s = [];
    
    await array.map( (i) => in_s.push(parseInt(i)+1))
    query += `(${in_s.join(', ')})`
    
    return  query
}

async function deleteLearnedSkills(skillsFromDB, learnedSkills) {
    const skilSplited = learnedSkills.split(' ') //learned
    let competList = skillsFromDB[0].competition.split('; ');
    for await(skill of skilSplited) {
        const index = competList.findIndex( el => el === skill);

        if (index !== -1) {
            const befor = competList.slice(0,index);
            const after = competList.slice(index + 1);
            const ba = [...befor,...after]

            competList = ba
        }
    }

    return competList
}

// console.log()
module.exports = {
    getJobsDB,
    getDetailsDB,
    getDataDB,
    getVacancyDB,
    getDataDBPython
};
