const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  id: Object,
  title: String,
  image: String,
  ingredients: Array,
  steps: Array,
  author: String,
  prepTime: String,
  cookingTime: String,
  tags: Array
});

const Recipe = mongoose.model('Recipe', RecipeSchema, 'testRecipes');
module.exports = Recipe;