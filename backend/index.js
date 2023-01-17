// npm i -D nodemon(D is for dev dependency see package.json)
const connectToMongo = require('./db');
const express = require('express')
connectToMongo();

const app = express()
const port = 3000

app.use(express.json())
//Avaliable Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.get('/', (req, res) => {
    res.send('Hello Deepak!')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})