import React from "react"
import { Route, Switch } from "react-router-dom"
import logo from "./images/logo.png"
import "./App.css"

import Launches from "./components/Launches"
import Launch from "./components/Launch"

const App = () => (
  <div className="App container">
    <img
      src={logo}
      alt="SpaceX"
      style={{ width: "500px", display: "block", margin: "1rem auto" }}
    />
    <Switch>
      <Route exact path="/" component={Launches} />
      <Route exact path="/launch/:flight_number" component={Launch} />
    </Switch>
  </div>
)

export default App
