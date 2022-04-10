const { user } = require('../models')

class UserController {
    static getUsers(req, res) {
        user.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
            .then(users => {
                res.json(users)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static findById(req, res) {
        const id = Number(req.params.id);
        user.findByPk(id)
            .then(result => {
                if (result)
                    res.json(result)
                else
                    res.json({
                        message: "User not found!",
                    })
            })
            .catch(err => {
                res.json(err)
            })
    }

    static create(req, res) {
        const { username, email, password, image } = req.body

        user.findOne({
            where: { email }
        })
            .then(resultEmail => {
                if (resultEmail) {
                    res.json({
                        message: "User already exists!",
                    })
                } else {
                    // return user.findOne({
                    //     where: { username }
                    // })
                    return user.create({
                        username, email, password, image
                    })
                }
            })
            // .then(resultUsername => {
            //     if (resultUsername) {
            //         res.json({
            //             message: "Username already taken, use another username!"
            //         })
            //     } else
            //         return user.create({
            //             username, email, password, image
            //         })

            // })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static update(req, res) {
        const { username, email, password, image } = req.body
        const id = +req.params.id

        user.update({
            username, email, password, image
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

        user.destroy({
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

module.exports = UserController