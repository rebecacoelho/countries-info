"use client";
import { useState } from 'react';
import styles from './Menu.module.css';

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania', 'All'];

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
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
