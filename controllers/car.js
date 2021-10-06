const connection = require("../connections/mysql");

const list = async (req, res, next) => {
  await connection.query(
    `
    SELECT * 
    FROM carros`,
    function (error, results, fields) {
      if (error) res.send({ data: null, message: error, success: false });

      res.send({
        data: results,
        success: true,
        message: null,
      });
    }
  );
};

module.exports = {
  list,
};
