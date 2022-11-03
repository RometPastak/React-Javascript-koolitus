import { useState } from "react";

function Meist() {
    const [n2itaEposti, muudaEposti] = useState(false);

    return ( 
        <div>
            <div>Meie e-post: 
                {n2itaEposti === true && <span>{ localStorage.getItem("epost") || "E-posti pole veel lisatud" }</span> }
                { n2itaEposti === false && <button onClick={() => muudaEposti(true)}>Näita e-posti</button> }
            </div>
            <div>Meie telefon: { localStorage.getItem("telefon") || "Telefoni pole veel lisatud" }</div>
        </div>
    );
}

export default Meist;