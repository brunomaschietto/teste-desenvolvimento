import { useState } from "react";
import { GlobalContext } from "./contexts/GlobalContext";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "./routes/Router";

function App() {
  const [count, setCount] = useState(0);
  const context = {};
  return <GlobalContext.Provider value={context}>
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  </GlobalContext.Provider>;
}

export default App;
