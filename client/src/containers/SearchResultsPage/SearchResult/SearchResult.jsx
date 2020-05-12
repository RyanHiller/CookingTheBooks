import React from "react";
import { Link } from "react-router-dom";

import styles from "./SearchResult.module.css";

const searchResult = (props) => {
  const recipe = props.recipe;

  const goToRecipe = () => {};

  return (
    <Link to={`/recipes?id=${recipe._id}`} className={styles.ResultLink} style={{textDecoration: 'none'}}>
      <div className={styles.Result} onClick={goToRecipe}>
        <img className={styles.Image} src={recipe.photo_url} alt={recipe.title} />
        <h2 className={styles.Title}>{recipe.title}</h2>
        <div className={styles.Time}>
          <p>Prep Time: {recipe.prep_time_minutes} minutes</p>
          <p>Cook Time: {recipe.cook_time_minutes} minutes</p>
          <p>Total Time: {recipe.total_time_minutes} minutes</p>
        </div>
      </div>
    </Link>
  );
};

export default searchResult;
