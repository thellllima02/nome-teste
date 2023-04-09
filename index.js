const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <form method="post" action="/welcome">
      <label for="name">Digite seu nome:</label>
      <input type="text" name="name" id="name">
      <button type="submit">Enviar</button>
    </form>
  `);
});

app.post('/welcome', (req, res) => {
  const name = req.body.name;
  res.send(`Seja bem-vindo, ${name}!`);
});

app.listen(3000, () => {
  console.log('O servidor está rodando na porta 3000.');
});
