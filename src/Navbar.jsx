import AccordionMenu from "./AccordionMenu";
import { Box, Flex } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
//eslint-disable-next-line
function Navbar({ setTerm, searchImages, fetchImages }) {
  return (
    <>
      <Box width='calc(100%)' boxShadow='lg'>
        <Flex direction='row'>
          <AccordionMenu />
          <SearchBar
            width='100%'
            setTerm={setTerm}
            searchImages={searchImages}
            fetchImages={fetchImages}
          />
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
