import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App"

import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"

const client = new ApolloClient({
  uri: "http:///localhost:5000/graphql"
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
)
