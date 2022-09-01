import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AuthUser from "../Auth/AuthUser";

function App() {
  const navigate = useNavigate();
  const signOut = () => {
    AuthUser.logout(() => {
      navigate("/signIn");
    });
  };
  return (
    <Box alignItems="center">
      <Stack alignItems="center">
        <Text mt="5%" fontWeight="bold" color="teal.400" size="lg">
          Dash Board
        </Text>
        <Text>UserName:</Text>
        <Button w="20%" mt="10%" bg="red" color="white" onClick={signOut}>
          LogOut
        </Button>
      </Stack>
    </Box>
  );
}
export default App;
