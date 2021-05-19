const express = require('express')
const cors = require('cors');
const courses = require('./routes/courses')

const app = express()

const PORT = 4000
const API_PATH = '/api/v1'

app.use(cors())
app.use(`${API_PATH}/courses`, courses)

app.listen(PORT, () => {
    console.log(`Server listening port ${PORT}`);
})