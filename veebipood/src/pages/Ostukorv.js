import { useState } from "react";

function Ostukorv() {
    const [ostukorv, uuendaOstukorvi] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);

    const kustutaToode = (jrknumber) => {
        ostukorv.splice(jrknumber, 1);
        uuendaOstukorvi(ostukorv.slice());
        localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
    }

    const lisaToode = (klikitudToode) => {
        ostukorv.push(klikitudToode);
        uuendaOstukorvi(ostukorv.slice());
        localStorage.setItem("ostukorv", JSON.stringify(ostukorv));
    }

    const tyhjendaOstukorv = () => {
        uuendaOstukorvi([]);
        localStorage.setItem("ostukorv", JSON.stringify([]));
    }
    
    return ( 
        <div>
            <button onClick={tyhjendaOstukorv}>Tühjenda</button>
            <div>Kokku on {ostukorv.length} toodet ostukorvis</div>
            {ostukorv.map((toode, index) => 
            <div key={index}>
                {toode}
                <button onClick={() => kustutaToode(index)}>Kustuta</button>
                <button onClick={() => lisaToode(toode)}>Lisa</button>
            </div>)
            }
        </div>
     );
}

export default Ostukorv;