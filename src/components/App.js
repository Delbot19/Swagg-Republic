import '../styles/App.css';

import Banner from './Banner';
import BestSellers from './BestSellers';
import HowItWork from './HowItWork';
import Presentation from './Presentation';
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {<Banner menuOpen={menuOpen} toggleMenu={toggleMenu} />}
      {!menuOpen && <Presentation />}
      {!menuOpen && <BestSellers />}
      <HowItWork />
    </div>
  );
}

export default App;
