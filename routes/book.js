const todoRoute = require('express').Router()
const BookController = require('../controllers/BookController')

todoRoute.get('/', BookController.getTodos)
todoRoute.post('/add', BookController.create)
todoRoute.post('/edit/:id', BookController.update)
todoRoute.get('/delete/:id', BookController.delete)
todoRoute.get('/:id', BookController.findById)

module.exports = todoRoute