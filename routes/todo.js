const todoRoute = require('express').Router()
const TodoController = require('../controllers/TodoController')

todoRoute.get('/', TodoController.getTodos)
todoRoute.get('/create', TodoController.createPage)
todoRoute.post('/create', TodoController.create)
todoRoute.get('/update/:id', TodoController.updatePage)
todoRoute.post('/update/:id', TodoController.update)
todoRoute.get('/delete/:id', TodoController.delete)
todoRoute.get('/:id', TodoController.findById)

module.exports = todoRoute