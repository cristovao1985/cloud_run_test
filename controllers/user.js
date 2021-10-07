const connection = require("../connections/mysql");

const list = async (req, res, next) => {
    await connection.query(`SELECT * FROM users`, function (error, results, fields) {
        if (error) res.send({ data: null, message: error, success: false });

        res.send({
            data: results,
            success: true,
            message: null,
        });
    })
}

const insert = async (req, res, next) => {
    const user = {
        nome: req.body.nome,
        email: req.body.email
    }
    await connection.query(`INSERT INTO users SET ?`, user, function (error, results, fields) {
        if (error) res.send({ data: null, message: error, success: false });

        res.send({
            data: user,
            success: true,
            message: "Usuário criado com sucesso",
        });
    })
}

module.exports = {
    list, insert
}