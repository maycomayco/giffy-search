import React, { useState } from 'react';
import { Input, Button, HStack } from '@chakra-ui/react';

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(keyword);
  };

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input onChange={handleChange} placeholder="Flinstones..." />
        <Button type="submit" mt={2} colorScheme="blue">
          Search
        </Button>
      </HStack>
    </form>
  );
};

/*
  - React.memo() is a higher order component that prevents a component from re-rendering if its props are the same.
  - A Higher Order Component is a function that takes a component as an argument and returns a new component.
  - This is because the component is re-rendered every time the parent (<Home />) component is re-rendered.
*/
export default React.memo(SearchForm);
