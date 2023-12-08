import React, { useContext, useState } from 'react';
import styles from './SearchBar.module.css';
import ThemeContext from '@/context/ThemeContext';

const SearchBar = ({ onSearch }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { isDarkMode } = useContext(ThemeContext);

  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;
    setSearchTerm(inputValue);
    onSearch(inputValue); 
  };

  return (
    <div className={styles.searchBarContainer}>
      <label className={`${styles.labelContainer} ${isDarkMode ? styles.darkSearch : ''}`}>
        <input
          className={`${styles.inputContainer} ${isDarkMode ? styles.darkInput : ''}`}
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
