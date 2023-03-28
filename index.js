const express = require('express');
const app = express();
const DB = require('./database.js');

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json);

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

app.use((_req, res) => {
    res.sendFile('index.html', {root: 'public'});
  });
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });