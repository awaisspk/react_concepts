import React, { useState } from "react";
import Greeting from "./Greeting.js";
import { LogginBtn, LoggedOutBtn } from "./LogginBtns.js";

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLoginClick() {
    setIsLoggedIn(true);
  }
  function handleLogOutClick() {
    setIsLoggedIn(false);
  }
  let button;
  if (isLoggedIn) {
    button = <LoggedOutBtn onClick={handleLogOutClick} />;
  } else {
    button = <LogginBtn onClick={handleLoginClick} />;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default Login;
