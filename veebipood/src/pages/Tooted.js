import { Link } from 'react-router-dom';
import { useState } from 'react';

function Tooted() {
    const [tooted, muudaTooted] = useState(JSON.parse(localStorage.getItem("tooted")) || []);
    const tootedLS = (JSON.parse(localStorage.getItem("tooted")) || [])
        .filter(element => element.aktiivne === true);
    
    const lisaOstukorvi = (toode) => {
        const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv")) || [];
        ostukorvLS.push(toode);
        localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
    }

    const sorteeriAZ = () => {
        tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
        muudaTooted(tooted.slice());
    }
    
    const sorteeriZA = () => {
        tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
        muudaTooted(tooted.slice());
    }
    
    const sorteeriKasvavalt = () => {
        tooted.sort((a,b) => a.hind - b.hind);
        muudaTooted(tooted.slice()); 
    }

    const sorteeriKahanevalt = () => {
        tooted.sort((a,b) => b.hind - a.hind);
        muudaTooted(tooted.slice()); 
    }

    const sorteeriUuedEes = () => {
        tooted.sort((a,b) => b.lisamiseAeg.localeCompare(a.lisamiseAeg));
        muudaTooted(tooted.slice()); 
    }

    const sorteeriVanemadEes = () => {
        tooted.sort((a,b) => a.lisamiseAeg.localeCompare(b.lisamiseAeg));
        muudaTooted(tooted.slice()); 
    }

    const sorteeriNimiKasvavalt = () => {
        tooted.sort((a,b) => a.nimi.length - b.nimi.length);
        muudaTooted(tooted.slice()); 
    }

    const sorteeriNimiKahanevalt = () => {
        tooted.sort((a,b) => b.nimi.length - a.nimi.length);
        muudaTooted(tooted.slice()); 
    }

    const filterTaheJargi = (taht) => {
        const tulemus = tootedLS.filter(element => element.nimi.startsWith(taht));
        muudaTooted(tulemus);
    }

    const eesnimeT2hed = [...new Set(tootedLS.map(element => element.nimi.charAt(0)))];

    return ( 
        <div>
            {/* <button onClick={() => filterTaheJargi("A")}>A</button>
            <button onClick={() => filterTaheJargi("S")}>S</button>
            <button onClick={() => filterTaheJargi("L")}>L</button>
            <button onClick={() => filterTaheJargi("P")}>P</button> */}
            {eesnimeT2hed.map((element, index) =>
                <button key={index} onClick={() => filterTaheJargi(element)}>
                    {element}
                </button>
            )}
            <br /><br />
            <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
            <button onClick={sorteeriZA}>Sorteeri Z-A</button>
            <button onClick={sorteeriKasvavalt}>Sorteeri hind kasvavalt</button>
            <button onClick={sorteeriKahanevalt}>Sorteeri hind kahanevalt</button>
            <button onClick={sorteeriUuedEes}>Sorteeri uued ees</button>
            <button onClick={sorteeriVanemadEes}>Sorteeri vanemad ees</button>
            <button onClick={sorteeriNimiKasvavalt}>Sorteeri lühemad nimed ees</button>
            <button onClick={sorteeriNimiKahanevalt}>Sorteeri pikemad nimed ees</button>
            <br /><br />
            {tooted.filter(element => element.aktiivne === true).map((element, index) => 
            <div key={index}>
                <Link to={"/toode/" + index}>
                    <img src={element.pilt} width="200px" alt="" />
                    <div>{element.nimi}</div>
                    <div>{element.hind}€</div>
                    <div>{element.aktiivne}</div>
                </Link>
                <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
            </div>)}
        </div>
    );
}

export default Tooted;