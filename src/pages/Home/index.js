import { useCallback } from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import { useLocation } from 'wouter';
import useGifs from '../../hooks/useGifs';
import ListOfGifs from '../../components/ListOfGifs';
import LazyTrendingSearches from '../../components/TrendingSearches';
import SearchForm from '../../components/SearchForm';

function Home() {
  const [location, setLocation] = useLocation();
  const { loading, gifs } = useGifs();

  /*
    - useCallabck() is a hook that returns a memoized callback, and it will only change if one of the dependencies has changed.
  */
  const handleSubmit = useCallback(
    keyword => setLocation(`/search/${keyword}`),
    [setLocation]
  );

  // const handleSubmit = keyword => setLocation(`/search/${keyword}`);

  return (
    <VStack spacing={2}>
      <SearchForm onSubmit={handleSubmit} />
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
