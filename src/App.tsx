import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { cliente } from "./lib/Apollo";
import { Router } from "./Router";

function App() {
  return (
    <ApolloProvider client={cliente}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
