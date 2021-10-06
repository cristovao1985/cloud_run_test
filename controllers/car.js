const connection = require('../connections/mysql');

const list = async(req,res,next)=>{
await connection.query('SELECT * FROM carros ORDER BY nome ASC')
}

module.exports = {
    list
}