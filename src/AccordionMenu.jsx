import {
  Menu,
  MenuButton,
  MenuList,
  Box,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, AddIcon } from "@chakra-ui/icons";
//eslint-disable-next-line
function AccordionMenu() {
  return (
    <div>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon boxSize='35px' />}
          variant='outline'
          margin='10px'
        />
        <MenuList>
          <Box as='span' icon={<AddIcon />}>
            <Link href='https://www.linkedin.com/in/enzosamojedny/' isExternal>
              About Me
            </Link>
          </Box>
        </MenuList>
      </Menu>
    </div>
  );
}

export default AccordionMenu;
