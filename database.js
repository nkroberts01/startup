const { MongoClient } = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);

const recipeCollection = client.db('startup').collection('recipe');

function addRecipe(recipe) {
  recipeCollection.insertOne(recipe);
}

function getRecipes() {
  const query = {recipe: {$gt: 0}};
  const options = {
    limit: 100,
  };
  const cursor = recipeCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {addRecipe, getRecipes};