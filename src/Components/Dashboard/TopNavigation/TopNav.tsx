import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  FlexProps,
  Menu,
  Stack,
  Text,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiChevronDown, FiSettings } from "react-icons/fi";
import userLogo from "../../../icons/user_icon.jpg";
import logo from "../../../icons/Fire_Sms_Logo.png";
import MobileNav from "./MobileMenu";
import Search from "./search";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
export default function TopNav({ onOpen, ...rest }: MobileProps) {
  const userImage = "";
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="65px"
      alignItems="center"
      bg={{ base: "#1A202C", md: "white" }}
      borderBottomWidth="1px"
      borderBottomColor="gray.300"
      justifyContent={{ base: "space-between", md: "" }}
      {...rest}
    >
      <Flex display={{ base: "contents", md: "none" }}>
        <Stack spacing={1} direction="row">
          <img src={logo} alt="fireSMS-Logo" />
          <Text
            color="white"
            fontSize="24px"
            fontStyle="normal"
            fontFamily="sans-serif"
            lineHeight="29px"
            fontWeight="500px"
          >
            FireSmS
          </Text>
        </Stack>
      </Flex>
      <MobileNav />

      <Search />
      <HStack
        justifyContent="flex-end"
        display={{ base: "none", md: "contents" }}
        mr="8"
        spacing={{ base: "0", md: "6" }}
      >
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                {userImage === "" ? (
                  <img
                    width="36px"
                    height="36px"
                    alt="User_Image"
                    src={userLogo}
                    style={{ borderRadius: "4px" }}
                  />
                ) : (
                  <img
                    width="36px"
                    height="36px"
                    alt="User_Image"
                    src={userImage}
                    style={{ borderRadius: "4px" }}
                  />
                )}
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg="#1A202C"
              color="white"
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem
                icon={<FiSettings />}
                _hover={{
                  bg: "#1A202C",
                  color: "white",
                }}
              >
                My Profile
              </MenuItem>
              <MenuItem
                icon={<FiSettings />}
                _hover={{
                  bg: "#1A202C",
                  color: "white",
                }}
              >
                Settings
              </MenuItem>
              <MenuDivider />
              <MenuItem
                icon={<FiSettings />}
                _hover={{
                  bg: "#1A202C",
                  color: "white",
                }}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
}
