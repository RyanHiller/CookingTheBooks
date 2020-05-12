import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import SearchResult from "./SearchResult/SearchResult";

import styles from "./SearchResultsPage.module.css";

const SearchResultsPage = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [noResults, setNoResults] = React.useState(false);
  let page = 0;
  const query = new URLSearchParams(useLocation().search).get("q");

  React.useEffect(() => {
    axios
      .get("/api/recipes/bySearch", { params: { input: query } })
      .then((res) => {
        setRecipes(res.data);
      })
      .finally(() => {
        if (recipes.length === 0) setNoResults(true);
      });
  });

  return (
    <div className={styles.PageContainer}>
      <div className={styles.Content}>
        <div className={styles.Title}>Search Results for "{query}"</div>
        <ul className={styles.Results}>
          {recipes.length > 0 ? (
            recipes.slice(page, page + 10).map((recipe) => <SearchResult recipe={recipe} key={recipe._id} />)
          ) : noResults ? (
            <div>No Search Results Found.</div>
          ) : (
            <div>Loading...</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchResultsPage;
