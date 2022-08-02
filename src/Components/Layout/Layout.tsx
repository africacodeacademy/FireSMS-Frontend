import { Flex } from "@chakra-ui/react";
import Plans from "../LandingPageContents/PlansComponent/plans";
import NavHeader from "../Navigation/NavHeader";

function Layout() {
  return (
    <Flex>
      <NavHeader />
      <Plans />
    </Flex>
  );
}
export default Layout;
