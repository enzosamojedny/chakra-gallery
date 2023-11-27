import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
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
          <MenuItem icon={<AddIcon />}>
            <a
              href='https://www.linkedin.com/in/enzosamojedny/'
              target='_blank'
              rel='noopener noreferrer'>
              About Me
            </a>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default AccordionMenu;
