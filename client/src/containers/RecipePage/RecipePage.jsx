import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import styles from './RecipePage.module.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const findRecipe = (id, recipes) => {
  return recipes.find((recipe) => {
    return recipe._id === id;
  });
};

const RecipePage = (props) => {
  const [recipes, setRecipes] = React.useState([]);
  const [recipe, setRecipe] = React.useState({});
  const id = useQuery().get('id');

  React.useEffect(() => {
    setRecipes(props.recipes);
    if (recipes.length === 0) {
      axios
        .get('/api/recipes')
        .then((res) => {
          setRecipes(res.data);
        })
        .catch(alert);
    }

    setRecipe(findRecipe(id, recipes));
  }, [props.recipes, recipes, id]);

  console.log(recipe);

  return recipe ? (
    <div className={styles.RecipePage}>
      <div className={styles.Content}>
        <div className={styles.Title}>{recipe.title}</div>
        <div className={styles.Details}>
          <ul className={styles.Ingredients}>
            {recipe.ingredients
              ? recipe.ingredients.map((item) => (
                  <li className={styles.Ingredient} key={recipe._id + 'INGR' + item.toString()}>
                    {item}
                  </li>
                ))
              : null}
          </ul>
          <img className={styles.Image} src={recipe.photo_url} alt={recipe.title} />
          <ul className={styles.Footnotes}>
            <b>Author Notes:</b> <br />
            {recipe.footnotes
              ? recipe.footnotes.map((item) => (
                  <li className={styles.Footnotes} key={recipe._id + 'FOOT' + item.toString()}>
                    {item}
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className={styles.InstructionsContainer}>
          <b>Instructions: </b>
          <ol className={styles.Instructions}>
            {recipe.instructions
              ? recipe.instructions.map((item) => (
                  <li className={styles.Instruction} key={recipe._id + 'INSTR' + item.toString()}>
                    {item}
                  </li>
                ))
              : null}
          </ol>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default RecipePage;
