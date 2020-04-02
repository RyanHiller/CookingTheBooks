const router = require('express').Router();
const Recipe = require('../models/Recipe');

/**
 * URL: localhost:3001/api/recipes/
 * Response: Array of all Recipe documents
 */
router.get('/', (req, res, next) => {
  Recipe.find({}, (err, recipes) => {
    if (err) next(err);
    else res.json(recipes);
  });
});

/**
 * URL: localhost:3001/api/recipes/seed
 * Description: Used to give database some test data.
 */
router.post('/seed', (req, res, next) => {
  for (let i = 0; i < 5; i++) {
    const newRecipe = new Recipe({
      title: `FILLER TITLE ${i}`,
      image: '',
      ingredients: [
        { Name: 'shrimp, cooked', Amount: '1 lb' },
        { Name: 'Rice, cooked', Amount: '2 cups' },
      ],
      steps: [
        { Step: 'Mix rice with shrimp', Number: '1' },
        { Step: 'Eat the food', Number: '2' },
      ],
      author: 'John Smith',
      prepTime: '5 minutes',
      cookingTime: '30 minutes',
      tags: ['seafood', 'rice'],
    });
    newRecipe.save(err => {
      if (err) console.log(err);
      else console.log(`Test recipe ${i} saved!`);
    });
  }

  res.send('Make sure to run GET to see if the recipes were seeded successfully.');
});

/**
 * URL: localhost:3001/api/recipes
 * Description: Deletes all recipes from DB
 */
router.delete('/', (req, res, next) => {
  Recipe.deleteMany({}, err => {
    if (err) next(err);
    else res.send('Successfully deleted all recipes');
  });
});

module.exports = router;
