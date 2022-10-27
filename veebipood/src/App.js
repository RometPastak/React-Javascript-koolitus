import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img className="main-pilt" src="https://mollerauto.ee/media/wysiwyg/MicrosoftTeams-image_18__2.png" alt="" />
      </Link>
      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>
      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
      </Routes>
    </div>
  );
}

export default App;