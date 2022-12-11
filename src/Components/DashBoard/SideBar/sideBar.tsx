import { Box, Icon, CloseButton, Flex, Text, BoxProps } from "@chakra-ui/react";
import { FiHome, FiCompass, FiStar, FiSettings } from "react-icons/fi";
import NavItem from "./sideBarNavItem";

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
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          color="white"
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Flex
        align="center"
        p="4"
        cursor="pointer"
        mx="4"
        color="white"
        bg="#FF6406"
        borderRadius="18px"
        w="231px"
        h="54px"
        mt="95px"
        mb="95px"
      >
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: "white",
          }}
          as={FiHome}
        />
        Send SMS
      </Flex>
      <NavItem icon={FiHome} ItemName="Home" link="/dashboard/api-key" />
      <NavItem icon={FiStar} ItemName="Our-Star" link="/dashboard/sms" />
      <NavItem icon={FiCompass} ItemName="Compass" link="/dashboard/api-key" />
      <NavItem icon={FiSettings} ItemName="Settings" link="/dashboard/sms" />
    </Box>
  );
}
