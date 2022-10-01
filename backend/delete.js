// Lembrando que essas rotas  são feitas no index.js
// estou separando apenas para fins de estudos

const express = require('express')

const app = express()

app.listen('3000')

// app.use(express.json())

let author = "Henrique"
app.route('/:id').delete( (req, res) => {
  author = ""
  res.send(req.params.id)
} )