const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000;

app.use(cors())

const courses = require("./data/courses.json");


// ---> check server
app.get('/', (req, res) => {
    res.send('server is running...')
})

// --->all courses 
app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log(`This server is running from ${port}`)
})