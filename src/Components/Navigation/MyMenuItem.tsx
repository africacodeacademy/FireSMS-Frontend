import { MenuItem } from "@chakra-ui/react";

interface ItemProp {
  name: string;
}

function MyMenuItem(props: ItemProp) {
  const { name } = props;

  return (
    <MenuItem
      color="white"
      _hover={{ bg: "gray.200", color: "gray.900", fontWeight: "semibold" }}
      onClick={() => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      {name}
    </MenuItem>
  );
}
export default MyMenuItem;
