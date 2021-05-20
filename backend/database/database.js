const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "localhost",
    user: "admin",
    database: "courses",
    password: "admin"
});

function getDatafromDB(object) {
    
    let QUERY = `SELECT course_ID, title, author, rating, price FROM analytics LIMIT 10`
    // let data;
    const {rows} = connection.query(QUERY,
        function (err,results) {
           if(err) console.log(`Ошибка получения данных: ${err}`);
        console.log(results);
        // data = results;
        // res.send(JSON.stringify(results));
        }
        
    )
    console.log(`Data from DB: ${rows}`);
    connection.end(err => err ? console.log("Ошибка отключения: " + err.message) : null );

}

module.exports = {
    getDatafromDB
};