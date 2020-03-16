import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HomePage.module.css';

const recipes = require('../../test/testR.json');

const HomePage = () => {
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
    <div className={styles.HomePage}>
      <div className={styles.Content}>
        <img className={styles.Logo} alt="Cooking The Books Logo" src={require('../../assets/img/logo_4x.png')} />
        <div className={styles.Description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className={styles.Search}>
          <input className={styles.SearchBar} type="text" placeholder="Search by recipe or ingredient" value={searchTerm} onChange={handleChange} />
          <div className={styles.SearchButton}>Search</div>
          <ul>
            {searchResults.map(item => (
              <li key={item._id.$oid}>
                <Link to={{ pathname: `/recipe/`, query: item._id.$oid, recipeProps: { recipe: item} }}>TEST</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
