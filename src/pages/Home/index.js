import { Heading, Stack, Divider } from '@chakra-ui/react';
import useGifs from '../../hooks/useGifs';
import ListOfGifs from '../../components/ListOfGifs';
import LazyTrendingSearches from '../../components/TrendingSearches';
import SearchForm from '../../components/SearchForm';
import { Helmet } from 'react-helmet';

function Home() {
  const { loading, gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <Stack spacing={5}>
        <SearchForm />
        <Stack>
          <Stack spacing={3}>
            <Stack spacing={1}>
              <Heading size="lg">Last search</Heading>
              <Divider />
            </Stack>
            <ListOfGifs gifs={gifs} />
          </Stack>
          <Stack spacing={3}>
            <Stack spacing={1}>
              <Heading size="lg">Trending search</Heading>
              <Divider />
            </Stack>
            <LazyTrendingSearches />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Home;
