import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import styles from './SearchResultsPage.module.css';

const SearchResultsPage = () => {
  let recipes = [];
  let page = 0;
  const query = new URLSearchParams(useLocation().search).get('q');

  axios.get('/api/recipes/bySearch', { params: { input: query } }).then((res) => {
    recipes.push(res.data);
    console.log(recipes)
  });

  return (
    <div className={styles.PageContainer}>
      <div className={styles.Content}>
        <div className={styles.Title}>Search Results for "{query}"</div>
        <ul className={styles.Results}>
          {recipes.slice(page, page + 10).map((recipe) => (
            <li className={styles.ResultItem}>{recipe.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResultsPage;
