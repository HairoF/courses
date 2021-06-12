const express = require('express');
const router = express.Router();
const {getDataDB, getDetailsDB, getDataDBPython, getJobsDB,getVacancyDB} = require('../database/database');
//test python
const {pyGet} = require('../childProccess/pythonShell');

//
router.get('/',express.json(), async function (req,res) {
    try {
        const jobs = await getJobsDB();
        res.json(jobs)
    } catch (error) {
        console.log('err from get '+ error)
    }
})

router.post('/', express.json(), async function (req, res) {

    try {
        const {course, skill} = req.body;
        
        // if (course.trim() == '' || course === undefined) {
        //     const indexes = await pyGet(skill)
            
        //     const dataFromPython = await getDataDBPython(indexes,skill) 

        //     res.json(dataFromPython)
        // } else {
            console.log(`Data from user: ${course}   ${skill}`);
            const indexes = await pyGet(course || skill)//array of index
            console.log(`Data from python: ${indexes}`);
            const dataFromPython = await getDataDBPython(indexes,skill) 

            res.json(dataFromPython)
        // }
        
        // console.log(`Data from python: ${indexes}`);


        // const findedData = await getDataDB('all_courses',req.body);
        // res.json(findedData)

    } catch (error) {
        console.log(`BaseURL: ${req.url} Error from localhost/: ${error}`);
    }
})

router.post('/programming/', express.json(), async function (req, res) {
    try {
        const {vacancy} = req.body

        const findedData = await getVacancyDB(vacancy);
        console.log('array');
        // console.log(findedData)
        res.json(findedData)
    } catch (error) {
        console.log(`BaseURL2: ${req.url} Error from localhost/programming/: ${error}`);
    }
})

router.post(`/:id`,express.json(), async (req, res) => {

    try {
        const findedData = await getDetailsDB('all_courses',req.body);
        res.json(findedData)
    } catch (error) {
        console.log(`BaseURL: ${req.url} Error from localhost/:id: ${error}`);
    }
})

/*
router.post('/programming/', express.json(), async function (req, res) {
    try {
        const findedData = await getDataDB('programming',req.body);
        res.json(findedData)
    } catch (error) {
        console.log(`BaseURL2: ${req.url} Error from localhost/programming/: ${error}`);
    }
})

router.post('/analysis/', express.json(), async function (req, res) {
    try {
        const findedData = await getDataDB('analytics',req.body);
        res.json(findedData)
    } catch (error) {
        console.log(`BaseURL: ${req.path} Error from localhost/analysis/: ${error}`);
    }
})

/////////id

router.post(`/programming/:id`,express.json(), async (req, res) => {
    try {
        const findedData = await getDetailsDB('programming',req.body);
        res.json(findedData)
    } catch (error) {
        console.log(`BaseURL2: ${req.path} Error from localhost/programming/:id: ${error}`);
    }
})


router.post(`/analysis/:id`,express.json(), async (req, res) => {
    try {
        const findedData = await getDetailsDB('analytics',req.body);
        res.json(findedData)
    } catch (error) {
        console.log(`BaseURL: ${req.path} Error from localhost/analysis/:id: ${error}`);
    }
})
*/

module.exports = router;