const { todos } = require('../models')

class TodoController {
    static getTodos(req, res) {
        todos.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
            .then(todos => {
                // res.json(todos)
                res.render('todo.ejs', { todos })
            })
            .catch(err => {
                res.json(err)
            })
    }

    static findById(req, res) {
        const id = Number(req.params.id);
        todos
          .findByPk(id)
          .then((result) => {
            if (result) res.render("todoDetail.ejs", { todos: result });
            // res.json(result)
            else
              res.json({
                message: "User not found!",
              });
          })
          .catch((err) => {
            res.json(err);
          });
      }
    static createPage(req, res) {
        res.render('todoCreate.ejs')
    }
    static create(req, res) {
        const { task, status } = req.body
        todos.create({
            task, status
        })
            .then(result => {
                res.redirect('/todos')
            })
            .catch(err => {
                res.json(err)
            })
    }
    static updatePage(req, res) {
        const id = +req.params.id

        todos.findByPk(id)
            .then(result => {
                res.render('todoUpdate.ejs', { todos: result })
            })
            .catch(err => {
                res.json(err)
            })
    }
    static update(req, res) {
        const { task, status } = req.body
        const id = +req.params.id

        todos.update({
            task, status
        }, {
            where: { id }
        })
            .then(result => {
                if (result[0] === 1)
                res.redirect('/todos')
                else
                    res.json({
                        message: `Id ${id} has not been updated!`
                    })
            })
            .catch(err => {
                res.json(err)
            })
    }

    static delete(req, res) {
        const id = +req.params.id

        todos.destroy({
            where: { id }
        })
            .then(result => {
                if (result === 1)
                res.redirect('/todos')
                else
                    res.json({
                        message: `Id ${id} has not been deleted!`
                    })
            })
            .catch(err => {
                res.json(err)
            })
    }
}

module.exports = TodoController