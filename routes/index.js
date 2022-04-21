const route = require('express').Router()

route.get('/', (req, res) => {
    res.render('index.ejs')
    // res.json({
    //     message: "Home Page"
    // })
})

const todoRoutes = require('./book')

route.use('/books', todoRoutes)

module.exports = route