import { Button } from "@chakra-ui/react";

function NavButtons(props: any) {
  const { name } = props;

  return (
    <Button
      pt="5.4"
      pr="4"
      pl="4"
      pb="5.4"
      color="white"
      size={{ base: "8px", md: "md" }}
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
