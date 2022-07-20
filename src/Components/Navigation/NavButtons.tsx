import { Button } from "@chakra-ui/react";

function NavButtons(props: any) {
  const { name } = props;

  return (
    <Button
      pt="3.5"
      pr="4"
      pl="4"
      pb="4"
      fontWeight="semibold"
      color="white"
      size="dm"
      _hover={{ bg: "blue.400", color: "white" }}
      variant="ghost"
    >
      {name}
    </Button>
  );
}
export default NavButtons;
