const express = require("express");
const app = express();
const axios = require('axios');
const port = 3000;
app.use(express.json());



app.get("/", (req, res) => {
  res.json({ message: 'Full Cycle Rocks!'});
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});

const getRandomNames = async () => { 
  const { data } = await axios.get('https://randomuser.me/api/?results=1');
   return data.results.map(({ name }) => name.first);
}

getRandomNames();