import { Box, Text, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import MenuBtn from "./MenuBtn";
import NavButtons from "./NavButtons";

function NavHeader() {
  // props data for Nav buttons
  const name = "Pricing";
  const name2 = "Developers";
  const name3 = "Sign In";
  const name4 = "Create account";

  return (
    <header>
      <Box
        display="flex"
        align-Items="center"
        justifyContent="space-between"
        bg="gray.800"
        w="100%"
        pos="fixed"
        zIndex={2}
      >
        <Box mt="4" mb="2">
          <Link to="/">
            <Text
              ml="4"
              color="white"
              fontWeight="bold"
              fontSize="24px"
              cursor="pointer"
            >
              FireSMS
            </Text>
          </Link>
        </Box>
        <Box mt="3" mb="2">
          <Stack
            mr="4"
            spacing={0}
            direction="row"
            align="center"
            display={["none", "none", "flex", "flex"]}
          >
            <Link to="/">
              <NavButtons name={name} />
            </Link>
            <Link to="/Docs">
              <NavButtons name={name2} />
            </Link>
            <Link to="/SignIn">
              <NavButtons name={name3} />
            </Link>
            <Link to="/SignUp">
              <NavButtons name={name4} />
            </Link>
          </Stack>
          <MenuBtn />
        </Box>
      </Box>
    </header>
  );
}
export default NavHeader;
