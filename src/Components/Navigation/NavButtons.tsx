import { Button } from "@chakra-ui/react";

function NavButtons(props: any) {
  const { name } = props;

  return (
    <Button
      pt="3.5"
      pr="4"
      pl="4"
      pb="4"
      color="white"
      size="16px"
      cursor="pointer"
      _hover={{ bg: "#FF5F0F", color: "white" }}
      variant="ghost"
      as="a"
      target="_blank"
    >
      {name}
    </Button>
  );
}
export default NavButtons;
