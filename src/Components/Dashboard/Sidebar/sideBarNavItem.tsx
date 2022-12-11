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
        align="center"
        p="4"
        pb="49px"
        mx="4"
        w="231px"
        h="54px"
        borderRadius="18px"
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
            mr="4"
            fontSize="16"
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
