const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000;

app.use(cors())

const courses = require("./data/courses.json");
const navbarData = require("./data/navbarData.json");
const blog = require("./data/blog.json");


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

// ---> course details
app.get('/course-details/:id', (req, res) => {
    const id = (req.params.id);
    const courseDetails = courses.find(crs => crs._id === id)
    res.send(courseDetails)
})

//---> checkout 
app.get('/checkout/:id', (req, res) => {
    const id = (req.params.id);
    const checkoutItem = courses.find(crs => crs._id === id)
    res.send(checkoutItem)
})

// ---> blog
app.get('/blog', (req, res) => {
    res.send(blog)
})

app.listen(port, () => {
    console.log(`This server is running from ${port}`)
})