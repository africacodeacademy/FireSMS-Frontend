import { Flex, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavItemProps {
  icon: IconType;
  name: string;
}

function NavItem(props: NavItemProps) {
  const { name, icon } = props;
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      fontWeight="semibold"
      _focus={{
        boxShadow:
          "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
      }}
      _active={{
        transform: "scale(0.98)",
        bg: "gray.200",
      }}
      _hover={{
        bg: "gray.200",
        color: "gray.800",
        fontWeight: "semibold",
      }}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="20"
          _groupHover={{
            color: "gray.800",
            fontWeight: "semibold",
          }}
          as={icon}
        />
      )}
      {name}
    </Flex>
  );
}
export default NavItem;
