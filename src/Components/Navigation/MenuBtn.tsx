import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function MenuBtn() {
  return (
    <Flex>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          color="white"
          display={["flex", "flex", "none", "none"]}
          mr="4"
        />
        <MenuList>
          <MenuItem _hover={{ bg: "gray.800", color: "white" }}>
            Pricing
          </MenuItem>
          <MenuItem _hover={{ bg: "gray.800", color: "white" }}>
            Developers
          </MenuItem>
          <MenuItem _hover={{ bg: "gray.800", color: "white" }}>
            Sign In
          </MenuItem>
          <MenuItem _hover={{ bg: "gray.800", color: "white" }}>
            Create account
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
export default MenuBtn;
