import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './SearchBar.module.css';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const history = useHistory();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const canSubmit = () => {
    return searchTerm.trim().length > 0;
  };

  const handleSubmit = (event) => {
    if (!canSubmit()) {
      event.preventDefault();
      return;
    } else {
      event.preventDefault();
      const inputValue = searchTerm.trim();
      history.push(`/search?q=${inputValue}`);
    }
  };

  const isEnabled = canSubmit();

  return (
    <div className={styles.Search}>
      <form className={styles.SearchBar} onSubmit={handleSubmit}>
        <input
          className={styles.SearchInput}
          name='searchBar'
          type='text'
          placeholder='Search by recipe or ingredient'
          value={searchTerm}
          onChange={handleChange}
          minLength={3}
        />
        <button className={styles.SearchButton} type='submit' disabled={!isEnabled}>
          Search
        </button>
      </form>
      {/* <ul className={styles.SearchSuggestions}></ul> */}
    </div>
  );
};

export default SearchBar;
