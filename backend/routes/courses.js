const mysql = require('mysql2');
const express = require('express');
const router = express.Router();
// const database = require('../database/database');


const connection = mysql.createConnection({
    host: "localhost",
    user: "admin",
    database: "courses",
    password: "admin"
});

router.post('/', express.json(), function (req, res) {
    const {course, skill} = req.body;

    let QUERY = `SELECT course_ID, title, author, rating, price FROM analytics WHERE description LIKE'%${course}%' OR acquired_skills LIKE'%${course}%'`;

    // const findedData = database.getDatafromDB(req.body); неудача с вынесением connection.query за пределы моудля
    // const data = [];
    // connection.connect((err) => console.error("Ошибка подлючения: " + err.message));

    try {
        connection.query(QUERY,
            function (err,results) {
                if(err) console.log(`Ошибка получения данных: ${err}`);
                res.send(JSON.stringify(results))
            }
        );
    } catch (error) {
        console.log(`Error from localhost/: ${error}`);
    }
    
})

router.post(`/courses/:id`,express.json(),(req, res) => {
    const {courseId} = req.body;

    let QUERY2 = `SELECT * FROM analytics WHERE course_ID = ${courseId}`;
    
    try {
        connection.query(QUERY2,
            function (err,results) {
                if(err) console.log(`Ошибка получения данных: ${err}`);
                res.send(JSON.stringify(results[0]))
            }
        );
    } catch (error) {
        console.log(`Error from courses/id: ${error}`);
    }
})

module.exports = router