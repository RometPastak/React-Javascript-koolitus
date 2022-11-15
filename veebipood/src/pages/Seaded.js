import { useRef, useState } from "react";

function Seaded() {
    const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est");

    // const muudaKeelEE = () => {
    //     uuendaKeel("est");
    //     localStorage.setItem("keel", "est");
    // }

    // const muudaKeelEN = () => {
    //     uuendaKeel("eng");
    //     localStorage.setItem("keel", "eng");
    // }

    // const muudaKeelRU = () => {
    //     uuendaKeel("rus");
    //     localStorage.setItem("keel", "rus");
    // }

    const muudaKeel = (uusKeel) => {
        uuendaKeel(uusKeel);
        localStorage.setItem("keel", uusKeel)
    }

    const epostRef = useRef();
    const phoneRef = useRef();

    const uuendaEposti = () => {
        localStorage.setItem("epost", epostRef.current.value);
    }

    const uuendaTelefoni = () => {
        localStorage.setItem("telefon", phoneRef.current.value);
    }

    return ( 
        <div>
            <label>Meie e-post</label>
            <input defaultValue={localStorage.getItem("epost")} ref={epostRef} type="text" />
            <button onClick={uuendaEposti}>Sisesta</button>
            <br />
            <label>Meie telefon</label>
            <input defaultValue={localStorage.getItem("telefon")} ref={phoneRef} type="text" />
            <button onClick={uuendaTelefoni}>Sisesta</button>
            <br />

            <div>--------------------------------------------</div>
            <button onClick={() => muudaKeel("est")}>EE</button>
            <button onClick={() => muudaKeel("eng")}>EN</button>
            <button onClick={() => muudaKeel("rus")}>RU</button>
            { keel === "est" && <div>Vaatad eesti keelset saiti</div> }
            { keel === "eng" && <div>Vaatad inglise keelset saiti</div> }
            { keel === "rus" && <div>Vaatad vene keelset saiti</div> }
        </div>
     );
}

export default Seaded;