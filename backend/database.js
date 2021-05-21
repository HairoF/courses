const mysql = require('mysql2');
const dbConfig = {
    host: "localhost",
    user: "admin",
    database: "courses",
    password: "admin"
};


async function getDatafromDB(object) {

    let QUERY = `SELECT course_ID, title, author, rating, price
                 FROM analytics
                 LIMIT 10`
    // let data;
    const {rows} = await executeQuery(QUERY);
    console.log(`Data from DB: ${rows}`);
}


async function executeQuery(query) {
    const connection = mysql.createConnection(dbConfig);
    return await new Promise(async (resolve, reject) => {
        connection.query(query, (err, results) => {
            if(err){
                reject(err);
            }else{
                resolve(results);
            }
        });

        connection.end(err => {
            if (err) {
                console.log("Ошибка отключения: " + err.message);
            }
        });
    });
}

module.exports = {
    getDatafromDB
};
