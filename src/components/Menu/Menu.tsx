"use client";
import { useState } from 'react';
import styles from './Menu.module.css';

const Menu = ({ filterByRegion, selectedOption }: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'All'];

  const handleOptionClick = (option: any) => {
    filterByRegion(option); 
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.selectedOption} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {selectedOption || 'Filter by Region'}
        <span className={styles.arrow}>{isDropdownOpen ? '▲' : '▼'}</span>
      </div>
      {isDropdownOpen && (
        <ul className={styles.options}>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
