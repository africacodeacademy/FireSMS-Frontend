import { Flex, Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MyMenuItem from "../../../Navigation/MyMenuItem";

function MyMenuIcon() {
  // props data for Nav buttons
  const name = "Pricing";
  const name2 = "Developers";
  const name3 = "Profile";
  const name4 = "Sign Out";

  return (
    <Flex display={{ base: "contents", md: "none" }}>
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
        <MenuList bg="gray.800" mt="1.5%">
          <MyMenuItem name={name} />
          <MyMenuItem name={name2} />
          <MyMenuItem name={name3} />
          <MyMenuItem name={name4} />
        </MenuList>
      </Menu>
    </Flex>
  );
}
export default MyMenuIcon;
