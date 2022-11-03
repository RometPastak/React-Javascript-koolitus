import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Arvutid from './pages/Arvutid';
import Avaleht from './pages/Avaleht';
import LisaArvuti from './pages/LisaArvuti';

function App() {
  return (
    <div>
      <Link to="/"><button>Avalehele</button></Link>
      <Link to="/all"><button>Vaata arvuteid</button></Link>
      <Link to="/add"><button>Lisa arvuti</button></Link>
      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="all" element={ <Arvutid /> } />
        <Route path="add" element={ <LisaArvuti /> } />
      </Routes>
    </div>
  );
}

export default App;
