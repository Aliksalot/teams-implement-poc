const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const path = require('path')

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use(express.static(path.join(__dirname, './client/public')))

const apiRouter = require('./routes/api')

app.use('/api', apiRouter)

const pageRouter = require('./routes/page')

app.use('/', pageRouter)

app.listen(3000, ()=>{
    console.log("listening on 3000")
})