import {
  Box,
  Stack,
  Text,
  useControllableState,
  Image,
} from "@chakra-ui/react";
import JSDevelopers from "./Languages/jsDeveloper";
import PHPDevelopers from "./Languages/phpDevelper";
import PythonDevelopers from "./Languages/pythonDeveloper";

function Developers() {
  const [value, setValue] = useControllableState({
    defaultValue: "Javascript",
  });
  return (
    <Box bg="gray.800" w="100%" textAlign="center" alignItems="center">
      <Text
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        color="orange.400"
        pt={{ base: "24%", md: "8%" }}
        pb={{ base: "8%", md: "1%" }}
      >
        Documentation
      </Text>
      <Text color="white">Use the language of your choice</Text>
      <Stack
        direction="row"
        pt="5%"
        pb="5%"
        justify="center"
        alignItems="center"
        textAlign="center"
        color="orange.400"
        spacing="8"
      >
        <Stack direction="column" alignItems="center">
          <Image
            cursor="pointer"
            onClick={() => setValue("Javascript")}
            boxSize="26px"
            objectFit="cover"
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
            alt="icon"
          />
          <Text cursor="pointer" onClick={() => setValue("Javascript")}>
            Javascript
          </Text>
        </Stack>
        <Stack direction="column" alignItems="center">
          <Image
            cursor="pointer"
            onClick={() => setValue("PHP")}
            boxSize="26px"
            objectFit="cover"
            src="https://cdn-icons-png.flaticon.com/512/919/919830.png"
            alt="icon"
          />
          <Text cursor="pointer" onClick={() => setValue("PHP")}>
            PHP
          </Text>
        </Stack>
        <Stack direction="column" alignItems="center">
          <Image
            cursor="pointer"
            onClick={() => setValue("Python")}
            boxSize="26px"
            objectFit="cover"
            src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/python-icon.png"
            alt="icon"
          />
          <Text cursor="pointer" onClick={() => setValue("Python")}>
            Python
          </Text>
        </Stack>
      </Stack>
      <Box
        justifyContent="center"
        alignItems="center"
        pb={{ base: "8%", md: "1%" }}
        w="100%"
      >
        {value === "Javascript" ? (
          <Box alignItems="center" textAlign="center">
            <JSDevelopers />
          </Box>
        ) : (
          <> </>
        )}
        {value === "PHP" ? (
          <Box alignItems="center" textAlign="center">
            <PHPDevelopers />
          </Box>
        ) : (
          <> </>
        )}
        {value === "Python" ? (
          <Box alignItems="center" textAlign="center">
            <PythonDevelopers />
          </Box>
        ) : (
          <> </>
        )}
      </Box>
    </Box>
  );
}
export default Developers;
