import React from 'react';
import './SearchForm.css';
import SearchIcon from '@mui/icons-material/Search';

export const SearchForm = () => {
  return (
    <form className='searchForm'>
      <input type="text" placeholder='Search' />
      <SearchIcon />
    </form>
  )
}
