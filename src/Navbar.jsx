import AccordionMenu from "./AccordionMenu";
import { Box, Flex } from "@chakra-ui/react";
import SearchBar from "./SearchBar";
//eslint-disable-next-line
function Navbar({ findName, searchImages }) {
  return (
    <>
      <Box width='calc(100%)' boxShadow='lg'>
        <Flex direction='row'>
          <AccordionMenu />
          <SearchBar width='100%' findName={findName} searchImages={searchImages} />
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;