import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import Route from "./Route";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer 60f7a5c45251286d9d5433963db78f040c4c51d8`,
  },
  cache: new InMemoryCache(),
});

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Route />
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
