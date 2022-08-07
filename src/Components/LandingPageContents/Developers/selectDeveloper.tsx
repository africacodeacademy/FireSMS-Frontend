import { Stack } from "@chakra-ui/react";
import Footer from "../../Footer/footer";
import NavHeader from "../../Navigation/NavHeader";
import Developers from "./developers";

function SelectDeveloper() {
  return (
    <Stack bg="gray.800">
      <NavHeader />
      <Developers />
      <Footer />
    </Stack>
  );
}
export default SelectDeveloper;
