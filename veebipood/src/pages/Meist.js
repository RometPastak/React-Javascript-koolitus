import { useState } from "react";

function Meist() {
    const [n2itaEposti, muudaEposti] = useState(false);
    const [telefon, uuendaTelefon] = useState(localStorage.getItem("telefon") || "Telefoni pole veel lisatud");

    const lisaSuunakood = () => {
        uuendaTelefon("+372 " + telefon);
    }

    return ( 
        <div>
            <div>Meie e-post: 
                { n2itaEposti === true && <span>{ localStorage.getItem("epost") || "E-posti pole veel lisatud" }</span> }
                { n2itaEposti === false && <button onClick={() => muudaEposti(true)}>Näita e-posti</button> }
            </div>
            <div>
                Meie telefon: { telefon }
                { telefon.startsWith("+372") === false && <button onClick={lisaSuunakood}>Lisa suunakood ette</button> }
            </div>
        </div>
    );
}

export default Meist;