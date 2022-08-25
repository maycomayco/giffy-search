/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Heading, VStack, Input, Button, HStack } from '@chakra-ui/react';
import { useLocation } from 'wouter';
import useGifs from '../../hooks/useGifs';
import ListOfGifs from '../../components/ListOfGifs';
import LazyTrendingSearches from '../../components/TrendingSearches';

function Home() {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = e => {
    e.preventDefault();
    setLocation(`/search/${keyword}`);
  };

  const handleChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <VStack spacing={2}>
      <form onSubmit={handleSubmit}>
        <HStack>
          <Input onChange={handleChange} placeholder="Flinstones..." />
          <Button type="submit" mt={2} colorScheme="blue">
            Search
          </Button>
        </HStack>
      </form>
      <div>
        <Heading>Last search</Heading>
        <ListOfGifs gifs={gifs} />
      </div>
      <div>
        <Heading>Trending search</Heading>
        <LazyTrendingSearches />
      </div>
    </VStack>
  );
}

export default Home;
