const express = require('express')

const Test = require('./modules/test.controller')

const app = express()
app.set('view engine', 'pug')

app.get('/', (req, res, next) => {
    res.render('index', { deliveryRoutes: Test.solution() })
})

const port = process.env.port || 3000
app.listen(port, () => {
    console.log('Server listening on port 3000')
})
