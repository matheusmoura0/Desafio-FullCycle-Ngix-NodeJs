const express = require("express");
const app = express();
const axios = require('axios');
const port = 3000;
const connection = require('./model/config')
app.use(express.json());





app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});

const getRandomNames = async () => { 
  const { data } = await axios.get('https://randomuser.me/api/?results=1');
    const  names = data.results.map(({ name }) => name.first);
    const formated = names[0]
    return formated
}
const insertRandomNames = async (res) => { 
  const names = await getRandomNames();
  const query = `INSERT INTO people (name) VALUES (?)`;
  const [result] = await connection.execute(query, [names]);
  console.log('entrou')
  return result;
}

app.get("/", (req, res) => {
  insertRandomNames(res);
  res.json({ message: `Full Cycle Rocks!`});
});

const getListOfNames = async () => { 
  const query = `SELECT * FROM people`;
  const [result] = await connection.execute(query);
  console.log(result)
  return result;
}

getListOfNames();