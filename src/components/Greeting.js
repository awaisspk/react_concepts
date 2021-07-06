import React from "react";

function Greeting(props) {
  function UserGreeting() {
    return <h2>Welcome back!</h2>;
  }
  function GuestGreeting() {
    return <h2>Please Sign up</h2>;
  }
  let isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

export default Greeting;
