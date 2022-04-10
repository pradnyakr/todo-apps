const route = require('express').Router()

route.get('/', (req, res) => {
    res.render('index.ejs')
    // res.json({
    //     message: "Home Page"
    // })
})

const todoRoutes = require('./todo')

route.use('/todos', todoRoutes)

module.exports = route