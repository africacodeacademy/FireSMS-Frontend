import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import MyMenuItem from "./MyMenuItem";

function MenuBtn() {
  // props data for Nav buttons
  const name = "Pricing";
  const name2 = "Developers";
  const name3 = "Sign In";
  const name4 = "Create account";

  // Scroll to 379px from the top
  const goTo = () => {
    scroll.scrollTo(379);
  };
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
        <MenuList bg="gray.800" color="white" mt="1.5%">
          <Text onClick={goTo}>
            <Link to="/">
              <MyMenuItem name={name} />
            </Link>
          </Text>
          <Link to="/docs">
            <MyMenuItem name={name2} />
          </Link>
          <Link to="/signIn">
            <MyMenuItem name={name3} />
          </Link>
          <Link to="/signUp">
            <MyMenuItem name={name4} />
          </Link>
        </MenuList>
      </Menu>
    </Flex>
  );
}
export default MenuBtn;
