const { item,user } = require('../models')

class ItemController {
    static getItems(req, res) {
        item.findAll({
            order: [
                ['id', 'ASC']
            ], 
            include: [ user ]
        })
            .then(items => {
                res.json(items)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static findById(req, res) {
        const id = Number(req.params.id);
        item.findByPk(id)
            .then(result => {
                if (result)
                    res.json(result)
                else
                    res.json({
                        message: "Item not found!",
                    })
            })
            .catch(err => {
                res.json(err)
            })
    }

    static create(req, res) {
        const { name, type, price, stock, image, userId } = req.body
        item.create({
            name, type, price, stock, image, userId
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static update(req, res) {
        const { name, type, price, stock, image, userId } = req.body
        const id = +req.params.id

        item.update({
            name, type, price, stock, image, userId
        }, {
            where: { id }
        })
            .then(result => {
                if (result[0] === 1)
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

        item.destroy({
            where: { id }
        })
            .then(result => {
                if (result === 1)
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

module.exports = ItemController