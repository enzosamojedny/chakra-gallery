import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, AddIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
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
          <NavLink to='/new-tab'>
            <MenuItem icon={<AddIcon />} command='⌘T'>
              New Tab
            </MenuItem>
          </NavLink>
        </MenuList>
      </Menu>
    </div>
  );
}

export default AccordionMenu;
