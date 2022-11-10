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
            const tootedLS = JSON.parse(localStorage.getItem("tooted")) || [];
            tootedLS.push(nimiRef.current.value);
            localStorage.setItem("tooted", JSON.stringify(tootedLS));

            // let tooted = localStorage.getItem("tooted");
            // tooted = JSON.parse(tooted) || [];
            // tooted.push(nimiRef.current.value);
            // tooted = JSON.stringify(tooted);
            // localStorage.setItem("tooted", tooted);
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