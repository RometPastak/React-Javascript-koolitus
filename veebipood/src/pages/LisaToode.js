import { useRef, useState } from "react";

function LisaToode() {
    const [sonum, muudaSonum] = useState("Lisa uus toode");

    //alati kui teen refi, panen ta kuhugi input sisse
    //ja alati kui teen inputi, panen Reactis talle ref sisse
    const nimiRef = useRef();
    const hindRef = useRef();
    const piltRef = useRef();
    const aktiivsusRef = useRef();

    //function lisaUusToode() on sama asi, mis alumine const
    const lisaUusToode = () => {
        if(nimiRef.current.value === "") {
            muudaSonum("Toodet lisades peab nime sisestama");
        }
        else {
            muudaSonum("Lisasid uue toote " + nimiRef.current.value);
            let tootedLS = localStorage.getItem("tooted");
            tootedLS = JSON.parse(tootedLS) || [];
            
            // const tootedLS = JSON.parse(localStorage.getItem("tooted")) || [];

            const uusToode = {
                "nimi": nimiRef.current.value,
                "hind": Number(hindRef.current.value),
                "pilt": piltRef.current.value,
                "aktiivne": aktiivsusRef.current.checked,
                "lisamiseAeg": new Date()
            }

            tootedLS.push(uusToode);
            tootedLS = JSON.stringify(tootedLS);
            localStorage.setItem("tooted", tootedLS);

            // let tooted = localStorage.getItem("tooted");
            // tooted = JSON.parse(tooted) || [];
            // tooted.push(nimiRef.current.value);
            // tooted = JSON.stringify(tooted);
            // localStorage.setItem("tooted", tooted);
        }
    }

    return ( 
        <div>
            <div>{sonum}</div>
            <label>Toote nimi</label><br />
            <input ref={nimiRef} type="text" />
            <br />
            <label>Toote hind</label><br />
            <input ref={hindRef} type="number" />
            <br />
            <label>Toote pilt</label><br />
            <input ref={piltRef} type="text" />
            <br />
            <label>Toote aktiivsus</label><br />
            <input ref={aktiivsusRef} type="checkbox" /><br />
            <button onClick={lisaUusToode}>Vajuta</button>
            <div>{sonum}</div>
        </div>
     );
}

export default LisaToode;