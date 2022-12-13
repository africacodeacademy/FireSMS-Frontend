import { Flex, HStack, Icon, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoIosSearch } from "react-icons/io";

type FormValues = {
  search: string;
};

function Search() {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSearch = handleSubmit(async (search, e) => {
    e?.preventDefault();
  });
  return (
    <Flex
      justifyContent="flex-start"
      display={{ base: "none", md: "contents" }}
    >
      <HStack
        bg="white"
        shadow="3px"
        borderWidth="1px"
        borderColor="gray.300"
        w="380px"
        height="36px"
        ml="50px"
        borderRadius="4px"
        p="4"
      >
        <form onSubmit={onSearch}>
          <HStack>
            <Icon
              as={IoIosSearch}
              color="gray.500"
              w="19.88px"
              mr="-1"
              h="19.88px"
              type="submit"
            />
            <Input
              type="text"
              h="24px"
              color="#1A202C"
              ml="-3px"
              w="320px"
              borderWidth="0px"
              id="search"
              placeholder="Search"
              {...register("search")}
            />
          </HStack>
        </form>
      </HStack>
    </Flex>
  );
}
export default Search;
