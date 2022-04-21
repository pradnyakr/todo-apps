const { books } = require('../models')

class BookController {
    static getTodos(req, res) {
        books.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
            .then(result => {
                res.json(result)
                // res.render('book.ejs', { books })
            })
            .catch(err => {
                res.json(err)
            })
    }

    static findById(req, res) {
        const id = Number(req.params.id);
        books
          .findByPk(id)
          .then((result) => {
            if (result) res.render("todoDetail.ejs", { books: result });
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
      
    static create(req, res) {
        const { title, author, released_date, pages, genre } = req.body
        books.create({
            title, author, released_date, pages, genre
        })
            .then(result => {
                // res.redirect('/books')
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }
    
    static update(req, res) {
        const { title, author, released_date, pages, genre } = req.body
        const id = +req.params.id

        books.update({
            title, author, released_date, pages, genre
        }, {
            where: { id }
        })
            .then(result => {
                if (result[0] === 1)
                // res.redirect('/books')
                res.json({
                    message: `Id ${id} has been updated!`
                })
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

        books.destroy({
            where: { id }
        })
            .then(result => {
                if (result === 1)
                // res.redirect('/books')
                res.json({
                    message: `id ${id} has been deleted!`
                })
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

module.exports = BookController