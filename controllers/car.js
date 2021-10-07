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

const insert = async (req, res, next) => {
 
  const carro = {
    marca: req.body.marca,
    ano: req.body.ano,
    modelo: req.body.modelo,
  };
  await connection.query(
    "INSERT INTO carros SET ?",
    carro,
    function (error, results, fields) {
      if (error) res.send({ data: null, message: error, success: false });

      res.send({
        data: carro,
        success: true,
        message: "Veículo inserido com sucesso",
      });
    }
  );
};

const update = async (req, res, next) => {
  
  const carro = {
    marca: req.body.marca,
    ano: req.body.ano,
    modelo: req.body.modelo,
  };
  await connection.query(
    `UPDATE carros SET ? WHERE id=${req.params.id}`,
    carro,
    function (error, results, fields) {
      if (error) res.send({ data: null, message: error, success: false });

      res.send({
        data: carro,
        success: true,
        message: "Veículo atualizado com sucesso",
      });
    }
  );
};


const remove = async (req, res, next) => {
  
 
    await connection.query(
      `DELETE FROM carros WHERE id=${req.params.id}`,
      function (error, results, fields) {
        if (error) res.send({ data: null, message: error, success: false });
  
        res.send({
          data: null,
          success: true,
          message: "Veículo removido com sucesso",
        });
      }
    );
  };

module.exports = {
  list,
  insert,
  update,
  remove
};
