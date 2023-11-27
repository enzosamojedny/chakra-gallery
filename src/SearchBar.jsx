import { useState } from "react";
import { Input, Box, Button, Center } from "@chakra-ui/react";
import { debounce } from "lodash";
//eslint-disable-next-line
function SearchBar({ searchImages, fetchImages }) {
  const [find, setFind] = useState("");

  const onInputChange = (event) => {
    const searchTerm = event.target.value;
    setFind(searchTerm);
  };

  const debouncedSearchImages = debounce(searchImages, 1000);
  const debouncedFetchedImages = debounce(fetchImages, 1000);
  const onSubmit = () => {
    if (find === "") {
      <div>Search cannot be empty</div>;
    }
    debouncedSearchImages(find);
  };
  const onRandom = () => {
    debouncedFetchedImages();
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
        <Button onClick={onRandom} marginLeft={"10px"}>
          Randomize
        </Button>
      </Center>
    </Box>
  );
}

export default SearchBar;
