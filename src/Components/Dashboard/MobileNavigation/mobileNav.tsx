import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  useColorModeValue,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiMenu, FiChevronDown, FiSettings } from "react-icons/fi";

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
export default function MobileNav({ onOpen, ...rest }: MobileProps) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="70px"
      alignItems="center"
      bg="white"
      borderBottomWidth="1px"
      borderBottomColor="gray.300"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack mr="4" spacing={{ base: "0", md: "6" }}>
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size="sm" src="" />
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
