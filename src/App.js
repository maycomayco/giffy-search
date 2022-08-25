import React, { Suspense } from 'react';
import {
  Container,
  VStack,
  Box,
  Heading,
  Link as LinkChakra,
} from '@chakra-ui/react';
import { Link, Route } from 'wouter';
import SearchResults from './pages/SearchResults';
// import Home from './pages/Home';
import Detail from './pages/Detail';
import { GifsContextProvider } from './context/GifsContext';

// Route splitting
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <Container maxW="container.xl">
      <VStack spacing={3}>
        <Box>
          <Heading fontSize="4xl">
            <LinkChakra as={Link} to="/">
              Gifu App
            </LinkChakra>
          </Heading>
        </Box>
        <Box w="100%">
          <Suspense fallback={<div>Loading...</div>}>
            {/* wrap only the routes of our app with the provider */}
            <GifsContextProvider>
              {/*
                - Set routes of the app in the declarative way
                - Home page will only load when the user requires it, the import will be dynamic
              */}
              <Route component={Home} path="/" />
              {/* <Route component={ListGifs} path="/gif/:keyword"></Route> */}
              <Route component={SearchResults} path="/search/:keyword" />
              <Route component={Detail} path="/gif/:id" />
            </GifsContextProvider>
          </Suspense>
        </Box>
      </VStack>
    </Container>
  );
}

export default App;
