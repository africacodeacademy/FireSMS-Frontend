import { Box, Stack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { DashBoardContext } from "../../../DashboardContext/dashboardContext";
import UserPic from "../../../logo/user.png";
import UpdatePassword from "./updatePasswordForm";

function UserProfile() {
  const { email, phoneNumber, country, userName } =
    useContext(DashBoardContext);
  return (
    <Box
      id="profile"
      justifyContent="center"
      alignItems="center"
      pb={{ base: "20%", md: "5%" }}
      w="100%"
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={5}
        direction={{ base: "column", md: "row" }}
        mb="4%"
      >
        <Stack
          bg="white"
          alignItems={{ base: "center", md: "left" }}
          justifyContent="left"
          shadow="lg"
          p={2}
          pt="3%"
          pb="4%"
          borderWidth="1px"
          borderRadius="lg"
          w={{ base: "100%", md: "32%" }}
        >
          <img alt="UserPic" width="100px" height="100px" src={UserPic} />
          <Text>Username : {userName}</Text>
          <Text>Country : {country}</Text>
          <Text>Phone number : {phoneNumber}</Text>
          <Text>Email Address : {email}</Text>
        </Stack>

        <Stack
          bg="whiteAlpha.800"
          alignItems="center"
          shadow="lg"
          p={2}
          borderWidth="1px"
          borderRadius="lg"
          w={{ base: "100%", md: "60%" }}
        >
          <UpdatePassword email={email} />
        </Stack>
      </Stack>
    </Box>
  );
}
export default UserProfile;
