import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import HomeNav from "../../components/HomeNav/HomeNav";
import SearchResult from "./SearchResult/SearchResult";

import styles from "./SearchResultsPage.module.css";

const SearchResultsPage = () => {
  const query = new URLSearchParams(useLocation().search).get("q");
  const [recipes, setRecipes] = React.useState([]);
  const [noResults, setNoResults] = React.useState(false);
  const [pageNum, setPageNum] = React.useState(0);
  const [maxPage, setMaxPage] = React.useState(0);
  const [pageResults, setPageResults] = React.useState([]);

  // Get recipes from database on mount
  React.useEffect(() => {
    const fetchData = async () => {
      await axios.get("/api/recipes/bySearch", { params: { input: query } }).then((res) => {
        setRecipes(res.data);
        if (res.data.length === 0) setNoResults(true);
      });
    };
    fetchData();
  }, [query]);

  React.useEffect(() => {
    if (recipes.length <= 10) {
      setMaxPage(0);
    } else if (recipes.length % 10 === 0) {
      setMaxPage(Math.floor(recipes.length / 10) - 1);
    } else {
      setMaxPage(Math.floor(recipes.length / 10));
    }
  }, [recipes.length]);

  React.useEffect(() => {
    let temp =
      recipes.length > 0 ? (
        recipes
          .slice(pageNum * 10, pageNum * 10 + 10)
          .map((recipe) => <SearchResult recipe={recipe} key={recipe._id} />)
      ) : noResults ? (
        <div>No Search Results Found.</div>
      ) : (
        <div>Loading...</div>
      );

    setPageResults(temp);
  }, [noResults, recipes, pageNum]);

  const leftArrow =
    pageNum === 0 ? (
      <div className={styles.hide}>&#9664;</div>
    ) : (
      <div onClick={() => setPageNum(pageNum - 1)}>&#9664;</div>
    );
  const rightArrow =
    pageNum === maxPage ? (
      <div className={styles.hide}>&#9654;</div>
    ) : (
      <div onClick={() => setPageNum(pageNum + 1)}>&#9654;</div>
    );
  const arrowNav = (
    <div className={styles.NavArrows}>
      {leftArrow}
      {rightArrow}
    </div>
  );

  return (
    <div className={styles.PageContainer}>
      <div className={styles.Content}>
        <HomeNav />
        <div className={styles.Title}>Search Results for "{query}"</div>
        <ul className={styles.Results}>{pageResults}</ul>
        {arrowNav}
      </div>
    </div>
  );
};

export default SearchResultsPage;
