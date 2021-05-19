const express = require('express')
const router = express.Router()
const store = require('../store')


router.get('/', function (req, res) {
    //в итоговый массив отправляем объекты только с необходимыми пропертями
    const courses = store.getCourses()
        .map(course => {
            const {id, title, author, rating, priceWithoutStr} = course;
            return {id, title, author, rating, priceWithoutStr};
        });
    res.json(courses);
})

router.get(`/:id`, (req, res) => {
    const courseId = req.params.id; // Так получаем id
    const course = store.getCourse(courseId);
    res.json(course);
})

module.exports = router