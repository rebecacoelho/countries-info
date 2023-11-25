import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
        <label className={styles.labelContainer}>
            <input className={styles.inputContainer} type="text" placeholder="Search for a country..." />
        </label>
    </div>
  )
}

export default SearchBar