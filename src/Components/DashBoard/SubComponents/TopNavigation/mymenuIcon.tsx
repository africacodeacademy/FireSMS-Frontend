import {
  Flex,
  Menu,
  MenuButton,
  Text,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyMenuItem from "../../../Navigation/MyMenuItem";
import { DashBoardContext } from "../../DashboardContext/dashboardContext";

function MyMenuIcon() {
  const { setSelectedContent } = useContext(DashBoardContext);
  const navigate = useNavigate();
  const signOut = async () => {
    localStorage.removeItem("session");
    localStorage.removeItem("access_token");
    navigate("/signIn");
  };

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
          <Text onClick={() => setSelectedContent("Pricing")}>
            <MyMenuItem name={name} />
          </Text>
          <Text onClick={() => setSelectedContent("developer")}>
            <MyMenuItem name={name2} />
          </Text>
          <Text onClick={() => setSelectedContent("Profile")}>
            <MyMenuItem name={name3} />
          </Text>
          <Text onClick={signOut}>
            <MyMenuItem name={name4} />
          </Text>
        </MenuList>
      </Menu>
    </Flex>
  );
}
export default MyMenuIcon;
