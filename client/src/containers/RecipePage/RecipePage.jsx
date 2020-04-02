import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import styles from './RecipePage.module.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const findRecipe = (id, recipes) => {
  return recipes.find(recipe => {
    return recipe._id === id;
  });
};

const RecipePage = props => {
  const [recipes, setRecipes] = React.useState([]);
  const [recipe, setRecipe] = React.useState({});
  const id = useQuery().get('id');

  React.useEffect(() => {
    setRecipes(props.recipes);
    if (recipes.length === 0) {
      axios
        .get('/api/recipes')
        .then(res => {
          setRecipes(res.data);
        })
        .catch(alert);
    }

    setRecipe(findRecipe(id, recipes));
  });

  console.log(recipe);

  return recipe ? (
    <div className={styles.RecipePage}>
      <div className={styles.RecipeHeader}>
        <div className={styles.Title}>{recipe.title}</div>
        <img className={styles.Image} />
      </div>
      {/* <ul className={styles.Ingredients}>{recipe.ingredients.map(item => {})}</ul> */}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default RecipePage;
