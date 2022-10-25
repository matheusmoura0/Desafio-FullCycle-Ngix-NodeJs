const express = require("express");
const app = express();

const port = 3000;

const mysql = require ('mysql2/promise');


const connection = mysql.createPool({
    host: 'db',
    user: 'root',
    password: 'password',
    database: 'FullCycleDB',
  });




const initdb  = `
CREATE TABLE IF NOT EXISTS people (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    PRIMARY KEY (id)
    );`

connection.query(initdb);


app.use(express.json());
const { insertRandomNames, getFormatedlistOfNames } = require('./utils/helpers')


app.get('/', async (req, res) => {
  insertRandomNames();
  const names = await getFormatedlistOfNames();
  res.status(200).json( !names ? `Full Cycle Rocks!` : `Full Cycle Rocks!  ` + `Names:  ` + names.map((name) => `${name  }`));
})


app.listen(port, () => {
console.log(`Servidor rodando na porta: ${port}`);
});
