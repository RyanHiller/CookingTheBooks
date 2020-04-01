import React from 'react';
import { Link } from 'react-router-dom';

import styles from './SearchBar.module.css';

const recipes = require('../../test/testR.json');

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = recipes.filter(recipe => {
      return recipe.tags.includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className={styles.Search}>
      <input className={styles.SearchBar} type="text" placeholder="Search by recipe or ingredient" value={searchTerm} onChange={handleChange} />
      <div className={styles.SearchButton}>Search</div>
      <ul>
        {searchResults.map(item => (
          <li key={item._id.$oid}>
            <Link to={{ pathname: `/recipe/`, query: item._id.$oid, recipeProps: { recipe: item } }}>TEST</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
