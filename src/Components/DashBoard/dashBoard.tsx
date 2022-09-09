/* eslint-disable react/jsx-no-constructed-context-values */
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Historysms from "./SubComponents/history";
import SmsCard from "./SubComponents/sendSMS";
import { DashBoardContext } from "./DashboardContext/dashboardContext";

type UserValues = {
  phone: string;
  uuId: string;
  decoded: string;
  idUser: string;
};

function DashBoard() {
  const navigate = useNavigate();
  const [usersID, setUsersID] = useState("");
  const [usersphone, setUsersphone] = useState("");

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      navigate("/signIn");
    } else {
      const token = localStorage.getItem("access_token");
      const decoded: UserValues = jwt_decode(token || "");
      setUsersID(decoded.uuId);
      setUsersphone(decoded.phone);
    }
  }, [navigate]);

  const signOut = async () => {
    localStorage.removeItem("session");
    localStorage.removeItem("access_token");
    navigate("/signIn");
  };

  return (
    <Box alignItems="center">
      <Stack alignItems="center">
        <Text mt="5%" fontWeight="bold" color="teal.400" size="lg">
          Dash Board
        </Text>
        <Text>User id: {usersID}</Text>
        <Text>User phone: {usersphone}</Text>
        <Button w="20%" mt="10%" bg="red" color="white" onClick={signOut}>
          LogOut
        </Button>
        <DashBoardContext.Provider value={{ usersID, usersphone }}>
          <Stack alignItems="center">
            <Historysms />
          </Stack>
          <Stack alignItems="center">
            <SmsCard />
          </Stack>
        </DashBoardContext.Provider>
      </Stack>
    </Box>
  );
}
export default DashBoard;
