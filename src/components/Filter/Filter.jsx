import { Box } from '../Box';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { chatngeFilterValue } from '../redux/filterSlice';
import { useState, useEffect } from 'react';
import { useDebounce } from 'components/utiles';

import { FilterInput, FilterTitle } from './Filter.styled';

const filterId = nanoid();

export const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const debounsedfilterValue = useDebounce(filter, 500);

  useEffect(() => {
    dispatch(chatngeFilterValue(debounsedfilterValue));
  }, [debounsedfilterValue, dispatch]);

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value.toLowerCase());
  };
  return (
    <Box display="flex" flexDirection="column">
      <FilterTitle htmlFor={filterId}>Finde contact by name</FilterTitle>
      <FilterInput
        value={filter}
        type="text"
        id={filterId}
        onChange={handleFilterChange}
      />
    </Box>
  );
};
