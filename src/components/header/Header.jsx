import './Header.css';
import { useContext } from 'react';
import WindowContext from '../../context/WindowContext';
import HeaderDesktop from './HeaderDesktop';

function Header() {
  const { windowIsWide } = useContext(WindowContext);
  return (
    <div className="container">
      <nav>{windowIsWide ? <HeaderDesktop /> : <h1>mobile device</h1>}</nav>
    </div>
  );
}

export default Header;
