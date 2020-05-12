import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import styles from './RecipePage.module.css';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const RecipePage = (props) => {
  const id = useQuery().get('id');
  const [recipe, setRecipe] = React.useState({});

  React.useEffect(() => {
    if (!recipe.title) {
      if (props.recipe === null) {
        axios
          .get('/api/recipes/byId', { params: { id: id } })
          .then((res) => {
            if (res.data !== null) setRecipe(res.data)
            else alert("Recipe not found");
          })
          .catch(alert);
      } else {
        setRecipe(props.recipe);
      }
    }
  }, [props.recipe, recipe.title, id]);

  let footnotes =
    recipe.footnotes && recipe.footnotes.length > 0 ? (
      <div className={styles.FootnotesContainer}>
        <b>Author Notes:</b> <br />
        <ul className={styles.Footnotes}>
          {recipe.footnotes.map((item) => (
            <li className={styles.Footnotes} key={recipe._id + 'FOOT' + item.toString()}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <div className={styles.FootnotesContainer}></div>
    );

  let ingredients = recipe.ingredients ? (
    <div className={styles.IngredientsContainer}>
      <b>Ingredients:</b>
      <ul className={styles.Ingredients}>
        {recipe.ingredients.map((item) => (
          <li className={styles.Ingredient} key={recipe._id + 'INGR' + item.toString()}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div className={styles.IngredientsContainer}>Loading...</div>
  );

  let imageURL = recipe.photo_url === '' ? '../../assets/img/logo_4x.png' : recipe.photo_url;

  let instructions = recipe.instructions ? (
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
  ) : (
    <div className={styles.InstructionsContainer}>Loading...</div>
  );

  const recipePage = (
    <div className={styles.RecipePage}>
      <div className={styles.Content}>
        <div className={styles.Title}>{recipe.title}</div>
        <div className={styles.Details}>
          {ingredients}
          <img className={styles.Image} alt={recipe.title} src={imageURL} />
          {footnotes}
        </div>
        {instructions}
      </div>
    </div>
  );
  
  return recipePage;
};

export default RecipePage;
