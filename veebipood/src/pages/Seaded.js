import { useState } from "react";

function Seaded() {
    const [keel, uuendaKeel] = useState("est");

    return ( 
        <div>
            <button onClick={() => uuendaKeel("est")}>EE</button>
            <button onClick={() => uuendaKeel("eng")}>EN</button>
            <button onClick={() => uuendaKeel("rus")}>RU</button>
            { keel === "est" && <div>Vaatad eesti keelset saiti</div> }
            { keel === "eng" && <div>Vaatad inglise keelset saiti</div> }
            { keel === "rus" && <div>Vaatad vene keelset saiti</div> }
        </div>
     );
}

export default Seaded;