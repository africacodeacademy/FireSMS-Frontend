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
            <Link to="/">Pricing</Link>
          </MenuItem>
          <MenuItem _hover={{ bg: "gray.800", color: "white" }}>
            <Link to="/Docs">Developers</Link>
          </MenuItem>
          <MenuItem _hover={{ bg: "gray.800", color: "white" }}>
            <Link to="/SignIn">Sign In</Link>
          </MenuItem>
          <MenuItem _hover={{ bg: "gray.800", color: "white" }}>
            <Link to="/SignUp">Create account</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
export default MenuBtn;
