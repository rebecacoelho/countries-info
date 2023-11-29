import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }: any) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    onSearch(inputValue); 
  };

  return (
    <div className={styles.searchBarContainer}>
      <label className={styles.labelContainer}>
        <input
          className={styles.inputContainer}
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default SearchBar;
