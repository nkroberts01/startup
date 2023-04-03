const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const app = express();
const DB = require('./database')

const authCookieName = 'token';

app.use(cookieParser());
app.use(express.json());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({ cookie: `${req.params.name}:${req.params.value}` });
});

app.get('/cookie', (req, res, next) => {
  res.send({ cookie: req.cookies });
});

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.get('/recipes', async (_req, res) => {
  const recipes = await DB.getRecipes();
  res.send(recipes);
});

apiRouter.post('/recipe', async (req, res) => {
  DB.addRecipe(req.body);
  const recipes = await DB.getRecipes();
  res.send(recipes);
})

const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Listening to a network port
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
