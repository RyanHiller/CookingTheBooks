const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  author: String,
  cook_time_minutes: String,
  description: String,
  footnotes: Array,
  ingredients: Array,
  instructions: Array,
  photo_url: String,
  prep_time_minutes: Number,
  rating_stars: Number,
  title: String,
  total_time_minutes: Number,
  url: String
});

const Recipe = mongoose.model('Recipe', RecipeSchema, 'recipes');
module.exports = Recipe;