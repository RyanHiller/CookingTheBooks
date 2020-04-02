import React from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <div className={styles.Content}>
        <img className={styles.Logo} alt="Cooking The Books Logo" src={require('../../assets/img/logo_4x.png')} />
        <div className={styles.Description}>
          Cooking The Books was designed with the purpose of providing people with a quick, reliable source of recipes
          based on the ingredients that they have available. No saving and updating your inventory. No nonsense.
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default HomePage;
