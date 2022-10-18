const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: 'Full Cycle Rocks!'});
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});