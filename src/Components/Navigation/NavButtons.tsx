import { Button } from "@chakra-ui/react";

interface ButtonProp {
  name: string;
}

function NavButtons(props: ButtonProp) {
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
      onClick={() => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      {name}
    </Button>
  );
}
export default NavButtons;
