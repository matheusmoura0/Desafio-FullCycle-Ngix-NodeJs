const express = require("express");
const app = express();

const port = 3000;



app.use(express.json());
const { insertRandomNames, getFormatedlistOfNames } = require('./utils/helpers')


app.get('/', async (req, res) => {
  insertRandomNames();
  const names = await getFormatedlistOfNames();
  res.status(200).json( !names ? `<h1>Full Cycle Rocks!</h1>` : `<h1>Full Cycle Rocks!</h1>` + `<h2>Names:</h2>` + names.map((name) => `<p>${name}</p>`).join(''));
})


app.listen(port, () => {
console.log(`Servidor rodando na porta: ${port}`);
});
