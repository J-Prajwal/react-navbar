import Logo from "./components/Logo";
// import LogoStyle from './components/Logo';
import Links from "./components/Links";
import Button from "./components/Button";
import "./App.css";

function App() {
  let nameOfLogo = "LOGOBAKERY";
  let data = ["Services", "Projects", "About"];
  return (
    <div className="App">
      <nav className="navbar">
        <Logo name={nameOfLogo} />
        <div className="links">
          <Links links={data} />
        </div>
        <Button />
      </nav>
    </div>
  );
}

export default App;
