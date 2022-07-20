import { Text } from "@chakra-ui/react";
import NavHeader from "./Components/Navigation/NavHeader";

function App() {
  return (
    <div>
      <NavHeader />
      <Text noOfLines={[1, 2, 3]}>Firesms</Text>
    </div>
  );
}
export default App;
