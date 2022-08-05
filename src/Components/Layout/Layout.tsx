import { Stack } from "@chakra-ui/react";
import Plans from "../LandingPageContents/PlansComponent/plans";
import PricesStak from "../LandingPageContents/PricesComponet/pricesStack";
import SmsPlatForms from "../LandingPageContents/SMSPlarForms/smsPLatforms";
import NavHeader from "../Navigation/NavHeader";

function Layout() {
  return (
    <Stack bg="gray.800">
      <NavHeader />
      <Plans />
      <PricesStak />
      <SmsPlatForms />
    </Stack>
  );
}
export default Layout;
