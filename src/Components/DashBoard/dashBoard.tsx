/* eslint-disable react/jsx-no-constructed-context-values */
import { Box, useControllableState } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import Loader from "react-spinners/HashLoader";
import { DashBoardContext } from "./DashboardContext/dashboardContext";
import SideBarWithHeader from "./SubComponents/SideBar/sideBar";

type UserValues = {
  uuId: string;
  decoded: string;
  idUser: string;
  email: string;
  country: string;
  phone: string;
};

function DashBaord() {
  const [selectedContent, setSelectedContent] = useControllableState({
    defaultValue: "Home",
  });
  const [sideBarSize, setSideBarSize] = useState("large");
  const navigate = useNavigate();
  const [usersID, setUsersID] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setLoading(true);
    if (localStorage.getItem("access_token") === null) {
      setLoading(false);
      navigate("/signIn");
    } else {
      const token = localStorage.getItem("access_token");
      const decoded: UserValues = jwt_decode(token || "");
      setEmail(decoded.email);
      setCountry(decoded.country);
      setPhoneNumber(decoded.phone);
      setUsersID(decoded.uuId);
      setUserName(decoded.email.split("@")[0]);
      setLoading(false);
    }
  }, [navigate]);

  if (loading === true) {
    return (
      <Box mt="3%">
        <Loader color="#00A3C4" size={50} />
      </Box>
    );
  }

  return (
    <Box>
      <DashBoardContext.Provider
        value={{
          sideBarSize,
          setSideBarSize,
          selectedContent,
          setSelectedContent,
          usersID,
          phoneNumber,
          email,
          country,
          userName,
        }}
      >
        <SideBarWithHeader />
      </DashBoardContext.Provider>
    </Box>
  );
}
export default DashBaord;
