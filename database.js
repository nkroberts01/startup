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
  const cursor = recipeCollection.find();
  return cursor.toArray();
}

module.exports = {addRecipe, getRecipes};