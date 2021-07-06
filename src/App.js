import logo from "./logo.svg";
import Login from "./components/Login.js";
import Mailbox from "./components/Mailbox.js";
import "./App.css";

function App() {
  const messages = [
    "React",
    "Re: React",
    "Re:Re: React",
    "React",
    "Re: React",
    "Re:Re: React",
  ];
  return (
    <div className="App">
      <Login />
      <Mailbox unreadmessages={messages} />
    </div>
  );
}

export default App;
