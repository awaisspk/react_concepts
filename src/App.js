import logo from './logo.svg';
// import Calculator from './components/Calculator.js';
/* import Login from "./components/Login.js";
import Mailbox from "./components/Mailbox.js";
import ListItems from "./components/ListItems.js";
import FlavorForm from "./components/Select.js"; */
import WelcomeDialog from './components/WelcomeDialog.js';
import NameForm from './components/NameForm.js';
import EssayForm from './components/EssayForm.js';
import FlavorForm from './components/FlavorForm.js';
import Reservation from './components/Reservation';
import './App.css';

function App() {
  return (
    <div className="App">
      <NameForm />
      <EssayForm />
      <FlavorForm value="hi" />
      <Reservation />
    </div>
  );
}

export default App;
