import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { stylesHeader } from './styles';

const Search = ({ search }) => {
  console.log(search);
  const { search1, searchIcon, inputRoot, inputInput } = stylesHeader();

  const handeChangeTitle = ({ target }) => {
    search(target.value);
  };

  return (
    <div className={search1}>
      <div className={searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        onChange={handeChangeTitle}
        placeholder="Search…"
        classes={{
          root: inputRoot,
          input: inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export { Search };
