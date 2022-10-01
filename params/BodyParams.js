const express = require('express');

const app = express();

app.listen('3000');

// middleware
app.use(express.json());

app.route('/').post( (req, res) => {
  const {nome, nomeCompleto} = req.body;
  res.send(`Meu nome é  ${nomeCompleto}, más me chamam de ${nome}.`);
})

app.route('/').put( (req, res) => {
  const {cidade, hobbies} = req.body;
  res.send(`Moro em ${cidade}, gosto muito de${hobbies}.`);
})