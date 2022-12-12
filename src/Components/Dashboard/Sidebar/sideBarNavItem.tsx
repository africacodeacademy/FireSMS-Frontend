import { Flex, FlexProps, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface NavItemProps extends FlexProps {
  icon: IconType;
  ItemName: string;
  link: string;
}
export default function NavItem(props: NavItemProps) {
  const { ItemName, icon, link } = props;
  return (
    <Link
      to={link}
      onClick={() => {
        window.scroll({ top: 0, behavior: "smooth" });
      }}
    >
      <Flex
        fontFamily="sans-serif"
        fontStyle="normal"
        fontSize="15px"
        fontWeight="400px"
        lineHeight="24px"
        align="center"
        p="4"
        mb="15px"
        gap="7px"
        ml="8"
        w="231px"
        h="54px"
        borderRadius="8px"
        color="white"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#FF6406",
          color: "white",
        }}
      >
        {icon && (
          <Icon
            mr="22"
            w="16px"
            h="16px"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {ItemName}
      </Flex>
    </Link>
  );
}
