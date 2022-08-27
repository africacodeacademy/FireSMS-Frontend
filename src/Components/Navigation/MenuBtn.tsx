import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

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
            <Link id="Pricing" to="/">
              Pricing
            </Link>
          </MenuItem>
          <MenuItem _hover={{ bg: "gray.800", color: "white" }}>
            <Link id="Developers" to="/Docs">
              Developers
            </Link>
          </MenuItem>
          <MenuItem _hover={{ bg: "gray.800", color: "white" }}>
            <Link id=" SignOption" to="/SignIn">
              Sign In
            </Link>
          </MenuItem>
          <MenuItem _hover={{ bg: "gray.800", color: "white" }}>
            <Link id="Create account" to="/SignUp">
              Create account
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
export default MenuBtn;
