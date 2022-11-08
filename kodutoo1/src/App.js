import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import { useRef, useState } from 'react';

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("");
  const nimiRef = useRef();
  const paroolRef = useRef();

  function logiSisse() {
    if(paroolRef.current.value === "123") {
      muudaSonum(nimiRef.current.value + ", oled sisselogitud");
      muudaSisselogitud("jah");
    }
    else {
      muudaSonum("Vale parool");
    }
    
  }

  function logiValja() {
    muudaSisselogitud("ei");
    muudaSonum("");
  }

  return (
    <div>
      <div>{sonum}</div>
      { sisselogitud === "ei" && 
        <div>
          <label>Kasutajanimi</label>
          <br />
          <input ref={nimiRef} type="text" />
          <br /><br />
          <label>Parool</label>
          <br />
          <input ref={paroolRef} type="password" />
          <br /><br />
        </div>
      }

      { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button> }
      { sisselogitud === "jah" && <button onClick={logiValja}>Logi välja</button> }
      <br /><br />
      <Link to="/">
        <button>Avaleht</button>
      </Link>
      <Link to="/kontakt">
        <button>Kontakt</button>
      </Link>
      <Link to="/meist">
        <button>Meist</button>
      </Link>
      <Link to="/seaded">
        <button>Seaded</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht /> } />
        <Route path="kontakt" element={ <Kontakt /> } />
        <Route path="meist" element={ <Meist /> } />
        <Route path="seaded" element={ <Seaded /> } />
      </Routes>
    </div>
  );
}

export default App;
