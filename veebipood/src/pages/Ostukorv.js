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

    const arvutaKogusumma = () => {
        let summa = 0;
        ostukorv.forEach(element => summa = summa + element.hind);
        return summa;
    }
    
    return ( 
        <div>
            { ostukorv.length > 0 && <button onClick={tyhjendaOstukorv}>Tühjenda</button>}
            {ostukorv.length >= 2 && <div>Kokku on {ostukorv.length} toodet ostukorvis</div>}
            {ostukorv.length === 1 && <div>Kokku on {ostukorv.length} toode ostukorvis</div>}
            {ostukorv.length === 0 && <div>Ostukorv on tühi</div>}
            {ostukorv.map((toode, index) => 
            <div key={index}>
                <img src={toode.pilt} width="200px" alt="" />
                <div>{toode.nimi}</div>
                <div>{toode.hind}€</div>
                <div>{toode.aktiivne}</div>
                <button onClick={() => kustutaToode(index)}>Kustuta</button>
                <button onClick={() => lisaToode(toode)}>Lisa</button>
            </div>)
            }
            <br />
            <div>Kogusumma: {arvutaKogusumma()}€</div>
        </div>
     );
}

export default Ostukorv;