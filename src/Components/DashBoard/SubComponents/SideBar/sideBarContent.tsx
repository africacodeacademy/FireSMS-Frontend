import { Box, useColorModeValue, Text, BoxProps, Flex } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { MdOutlineSms, MdOutlineAccountBalanceWallet } from "react-icons/md";
import { TbMessageShare } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import { useContext } from "react";
import NavItem from "./NavItemFormat";
import User from "./user";
import { DashBoardContext } from "../../DashboardContext/dashboardContext";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export default function SidebarContent({ onClose, ...rest }: SidebarProps) {
  const { sideBarSize, setSideBarSize, setSelectedContent } =
    useContext(DashBoardContext);
  return (
    <Box
      transition="0.3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: 0, md: sideBarSize === "small" ? "20" : "15%" }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        height="16"
        alignItems="center"
        justifyContent="space-between"
        mb={sideBarSize === "small" ? "55%" : "20%"}
        mx="7"
        direction="row"
      >
        <Text
          mr="2"
          ml="1"
          fontSize="2xl"
          fontFamily="sans-serif"
          fontWeight="bold"
          cursor="pointer"
          _hover={{
            fontWeight: "bold",
            fontSize: "3xl",
          }}
          onClick={() => {
            if (sideBarSize === "small") setSideBarSize("large");
            else setSideBarSize("small");
          }}
        >
          {sideBarSize === "small" ? <FiMenu /> : <GrClose />}
        </Text>
      </Flex>
      {sideBarSize && sideBarSize === "large" && (
        <>
          <Text as="span" onClick={() => setSelectedContent("SendSMS")}>
            <NavItem icon={MdOutlineSms} name="Send SMS" />
          </Text>
          <Text as="span" onClick={() => setSelectedContent("SMSBulk")}>
            <NavItem icon={BiMessageSquareDetail} name="Send Bulk" />
          </Text>
          <Text as="span" onClick={() => setSelectedContent("SMSBatch")}>
            <NavItem icon={TbMessageShare} name="Send Batch" />
          </Text>
          <Text as="span" onClick={() => setSelectedContent("History")}>
            <NavItem icon={TiMessages} name="SMS History" />
          </Text>
          <Text as="span" onClick={() => setSelectedContent("CheckBalance")}>
            <NavItem icon={MdOutlineAccountBalanceWallet} name="View Balance" />
          </Text>
        </>
      )}
      {sideBarSize && sideBarSize === "small" && (
        <>
          <Text as="span" onClick={() => setSelectedContent("SendSMS")}>
            <NavItem icon={MdOutlineSms} name="" />
          </Text>
          <Text as="span" onClick={() => setSelectedContent("SMSBulk")}>
            <NavItem icon={BiMessageSquareDetail} name="" />
          </Text>
          <Text as="span" onClick={() => setSelectedContent("SMSBatch")}>
            <NavItem icon={TbMessageShare} name="" />
          </Text>
          <Text as="span" onClick={() => setSelectedContent("History")}>
            <NavItem icon={TiMessages} name="" />
          </Text>
          <Text as="span" onClick={() => setSelectedContent("CheckBalance")}>
            <NavItem icon={MdOutlineAccountBalanceWallet} name="" />
          </Text>
        </>
      )}
      <User />
    </Box>
  );
}
