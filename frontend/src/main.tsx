import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false
  }),
  uri: "http://localhost:4000",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
          <App /></ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);