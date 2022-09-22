import React, { useState } from 'react';
import { Input, Button, HStack } from '@chakra-ui/react';
import { useLocation } from 'wouter';

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('');
  const [_, setLocation] = useLocation();

  /*
    - useCallabck() is a hook that returns a memoized callback, and it will only change if one of the dependencies has changed.
  */
  // const handleSubmit2 = keyword => setLocation(`/search/${keyword}`);

  const handleSubmit = e => {
    e.preventDefault();
    // onSubmit(keyword);
    setLocation(`/search/${keyword}`);
  };

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          onChange={handleChange}
          placeholder="Flinstones..."
          borderRadius={0}
        />
        <Button type="submit" colorScheme="blue" borderRadius={0}>
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
