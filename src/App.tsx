import { Text, Container } from "@chakra-ui/react";
import NavHeader from "./Components/Navigation/NavHeader";

function App() {
  return (
    <Container>
      <NavHeader />;
      <Text noOfLines={[1, 2, 3]}>
        The quick brown fox jumps over the lazy dog is an English-language
        pangram—a sentence that contains all of the letters of the English
        alphabet. Owing to its existence, Chakra was created.
      </Text>
    </Container>
  );
}
export default App;
