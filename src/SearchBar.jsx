import { useState } from "react";
import { Input, Box, Button, Center } from "@chakra-ui/react";
import { debounce } from "lodash";
//eslint-disable-next-line
function SearchBar({ searchImages }) {
  const [find, setFind] = useState("");

  const onInputChange = (event) => {
    const searchTerm = event.target.value;
    setFind(searchTerm);
  };

  const debouncedSearchImages = debounce(searchImages, 1000);

  const onSubmit = () => {
    debouncedSearchImages(find);
  };

  return (
    <Box display={"flex"}>
      <Center>
        <Input
          value={find}
          placeholder='Search...'
          size='lg'
          margin='5px'
          onChange={onInputChange}
        />
        <Button onClick={onSubmit}>Submit</Button>
      </Center>
    </Box>
  );
}

export default SearchBar;
