import { Input, Box } from "@chakra-ui/react";

function SearchBar({ findName, searchImages }) {
  return (
    <Box>
      <Input placeholder='Search...' size='lg' margin='5px' />
    </Box>
  );
}

export default SearchBar;
