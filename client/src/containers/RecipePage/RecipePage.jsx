import React from 'react';

import styles from './RecipePage.module.css';

const RecipePage = props => {
  const recipe = props.location.recipeProps.recipe;

  return (
  <div className={styles.RecipePage}>
    <div className={styles.Title}>{recipe.title}</div>
  </div>
  )
};

export default RecipePage;
