const express = require('express')
const cors = require('cors');
const router = require('./routes/courses')

const app = express()

const PORT = 4000
const API_PATH = '/api'

app.use(cors())

app.use(`${API_PATH}`, router)

app.listen(PORT, () => {
    console.log(`Server listening port ${PORT}`);
})