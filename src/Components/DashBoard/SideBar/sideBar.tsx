import {
  Box,
  Icon,
  CloseButton,
  Stack,
  Flex,
  Text,
  BoxProps,
} from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import NavItem from "./sideBarNavItem";
import logo from "../../../icons/Fire_Sms_Logo.png";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export default function SidebarContent({ onClose, ...rest }: SidebarProps) {
  return (
    <Box
      transition="3s ease"
      bg="#1A202C"
      border="1px solid"
      borderColor="rgba(26,32,44,0.2)"
      mt="0px"
      ml="-1px"
      w={{ base: "full", md: "285px" }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        height="65px"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
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
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex
        fontFamily="sans-serif"
        fontStyle="normal"
        fontSize="15px"
        fontWeight="400px"
        lineHeight="24px"
        align="center"
        p="4"
        cursor="pointer"
        ml="8"
        gap="7px"
        color="white"
        bg="#FF6406"
        borderRadius="18px"
        w="231px"
        h="54px"
        mt="45px"
        mb="65px"
        _hover={{
          bg: "#FF6406",
          color: "white",
        }}
      >
        <Icon
          mr="22"
          w="16px"
          h="16px"
          _groupHover={{
            color: "white",
          }}
          as={FiHome}
        />
        Send SMS
      </Flex>
      <NavItem icon={FiHome} ItemName="Account" link="/dashboard/api-key" />
      <NavItem icon={FiHome} ItemName="Transactions" link="/dashboard/sms" />
      <NavItem icon={FiHome} ItemName="API Keys" link="/dashboard/api-key" />
      <NavItem icon={FiHome} ItemName="Profile" link="/dashboard/sms" />
    </Box>
  );
}
