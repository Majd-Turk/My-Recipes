const express = require('express')
const path = require('path')
const api = require('./recipesApi')
const app = express()


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())

app.use('/', api)

const port = 3000
app.listen(port, function () {
  console.log(`Running server on port ${port}`)
})
