import { Stack } from "@chakra-ui/react";
import Plans from "../LandingPageContents/PlansComponent/plans";
import NavHeader from "../Navigation/NavHeader";

function Layout() {
  return (
    <Stack>
      <NavHeader />
      <Plans />
    </Stack>
  );
}
export default Layout;
