import React from "react"
import logo from "./images/logo.png"
import "./App.css"

import Launches from "./components/Launches"

const App = () => (
  <div className="App container">
    <img
      src={logo}
      alt="SpaceX"
      style={{ width: "500px", display: "block", margin: "1rem auto" }}
    />
    <Launches />
  </div>
)

export default App
