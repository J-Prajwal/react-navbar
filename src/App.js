import Logo from './components/Logo'
// import LogoStyle from './components/Logo';
import Links from './components/Links'
import Button from './components/Button'
import './App.css';

function App() {
  let nameOfLogo = 'LOGOBAKERY';
  return (
    <div className="App">
      <nav className='navbar'>
        <Logo name = {nameOfLogo} />
        <Links />
        <Button />
      </nav>
    </div>
  );
}

export default App;
