import { Link as LinkChakra, Wrap, WrapItem, Box } from '@chakra-ui/react';
import { Link } from 'wouter';

const Category = ({ options = [] }) => (
  <>
    <Wrap>
      {options.map(elem => (
        <WrapItem key={elem}>
          <Box bg="blue.500" p={1}>
            <LinkChakra as={Link} to={`/search/${elem}`}>
              {elem}
            </LinkChakra>
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  </>
);

export default Category;
