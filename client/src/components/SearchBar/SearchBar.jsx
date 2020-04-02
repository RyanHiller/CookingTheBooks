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

  const getSuggestions = input => {
    const inputValue = input.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : recipes.filter(recipe => 
        (recipe.tags.includes(inputValue)) || (recipe.title.toLowerCase().slice(0, inputLength) === inputValue)
      );
  }

  React.useEffect(() => {
    const results = getSuggestions(searchTerm);
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className={styles.Search}>
      <div className={styles.SearchBar}>
        <input className={styles.SearchInput} type="text" placeholder="Search by recipe or ingredient" value={searchTerm} onChange={handleChange} />
        <div className={styles.SearchButton}>Search</div>
      </div>
      <ul className={styles.SearchSuggestions}>
        {searchResults.map(item => (
          <li className={styles.SearchSuggestion} key={item._id.$oid}>
            <Link to={{ pathname: `/recipe/`, query: item._id.$oid, recipeProps: { recipe: item } }}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
