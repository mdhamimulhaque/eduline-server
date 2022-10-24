const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000;

app.use(cors())
// ---> check server
app.get('/', (req, res) => {
    res.send('server is running...')
})

app.listen(port, () => {
    console.log(`This server is running from ${port}`)
})