import React from "react";
import { Link } from "react-router-dom";

import styles from "./SearchBar.module.css";

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    React.useEffect(() => {
        const results = getSuggestions(searchTerm);
        setSearchResults(results);
    }, [searchTerm]);

    const getSuggestions = (input) => {
        const inputValue = input.trim().toLowerCase();
        const inputLength = inputValue.length;
        let filteredArr = [];

        if (inputLength < 3) {
          return [];
        } else {
          filteredArr = props.recipes.filter(recipe => recipe.title.toLowerCase().includes(inputValue));
          /* TODO: Add ingredient search */
        }


        if (filteredArr.length > 7) filteredArr = filteredArr.slice(0, 7);
        return filteredArr;
    };

    return (
        <div className={styles.Search}>
            <div className={styles.SearchBar}>
                <input
                    className={styles.SearchInput}
                    type='text'
                    placeholder='Search by recipe or ingredient'
                    value={searchTerm}
                    onChange={handleChange}
                />
                <div className={styles.SearchButton}>Search</div>
            </div>
            <ul className={styles.SearchSuggestions}>
                {searchResults.map((item) => (
                    <li className={styles.SearchSuggestion} key={item._id}>
                        <Link to={`/recipes?id=${item._id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;
