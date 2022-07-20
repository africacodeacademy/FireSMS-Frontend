import { Text, Container } from "@chakra-ui/react";
import NavHeader from "./Components/Navigation/NavHeader";

function App() {
  return (
    <Container>
      <NavHeader />
      <Text noOfLines={[1, 2, 3]}>Firesms</Text>
    </Container>
  );
}
export default App;
