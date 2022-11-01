import { useRef, useState } from "react";

function LisaToode() {
    const [sonum, muudaSonum] = useState("Lisa uus toode");

    //alati kui teen refi, panen ta kuhugi input sisse
    //ja alati kui teen inputi, panen Reactis talle ref sisse
    const nimiRef = useRef();

    //function lisaUusToode() on sama asi, mis alumine const
    const lisaUusToode = () => {
        if(nimiRef.current.value === "") {
            muudaSonum("Toodet lisades peab nime sisestama");
        }
        else {
            muudaSonum("Lisasid uue toote " + nimiRef.current.value);
        }
    }

    return ( 
        <div>
            <label>Toote nimi</label><br />
            <input ref={nimiRef} type="text" /><br />
            <button onClick={lisaUusToode}>Vajuta</button>
            <div>{sonum}</div>
        </div>
     );
}

export default LisaToode;