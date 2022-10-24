const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000;

app.use(cors())

const courses = require("./data/courses.json");
const navbarData = require("./data/navbarData.json")


// ---> check server
app.get('/', (req, res) => {
    res.send('server is running...')
})

// ---> navbar data
app.get('/navbar-data', (req, res) => {
    res.send(navbarData)
})

// --->all courses 
app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log(`This server is running from ${port}`)
})