import React from "react"
import Router from "./router/Router";
import GlobalState from "./GlobalState/GlobalState"


const  App = () => {

  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App
