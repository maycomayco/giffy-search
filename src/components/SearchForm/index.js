import React from 'react';
import { Input, Button, Flex, Select, Spacer } from '@chakra-ui/react';
import { useLocation } from 'wouter';
import useForm from './hook';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

const SearchForm = ({ initialKeyword = '', initialRating = 'g' }) => {
  const [_, setLocation] = useLocation();

  const { keyword, rating, times, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const handleChange = e => {
    updateKeyword(e.target.value);
  };

  const handleChangeRating = e => {
    updateRating(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLocation(`/search/${keyword}/${rating}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap={1}>
        <Input
          onChange={handleChange}
          placeholder="Flinstones..."
          value={keyword}
        />
        <Spacer />
        <Select
          placeholder="Select rating"
          value={rating}
          w={150}
          onChange={handleChangeRating}
        >
          {RATINGS.map(rating => (
            <option key={rating}>{rating}</option>
          ))}
        </Select>
        <Spacer />
        <Button type="submit" colorScheme="blue" w={150}>
          Search
        </Button>
        {times}
      </Flex>
    </form>
  );
};

/*
  - React.memo() is a higher order component that prevents a component from re-rendering if its props are the same.
  - A Higher Order Component is a function that takes a component as an argument and returns a new component.
  - This is because the component is re-rendered every time the parent (<Home />) component is re-rendered.
*/
export default React.memo(SearchForm);
