const express = require('express');
const router = express.Router();
const {getDataDB, getDetailsDB} = require('../database/database');

router.post('/', express.json(), async function (req, res) {

    try {
        const findedData = await getDataDB('all_courses',req.body);
        res.json(findedData)
    } catch (error) {
        console.log(`BaseURL: ${req.url} Error from localhost/: ${error}`);
    }
})

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

router.post(`/:id`,express.json(), async (req, res) => {

    try {
        const findedData = await getDetailsDB('all_courses',req.body);
        res.json(findedData)
    } catch (error) {
        console.log(`BaseURL: ${req.url} Error from localhost/:id: ${error}`);
    }
})


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


module.exports = router;