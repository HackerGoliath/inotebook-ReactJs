// npm i -D nodemon(D is for dev dependency see package.json)
const connectToMongo = require('./db');
connectToMongo();

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Deepak!')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})