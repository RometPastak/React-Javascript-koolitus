import { useState } from "react";

function Kontakt() {
    const [aadress, setAadress] = useState("Tallinn");
    const [telefon, setTelefon] = useState("5512345");
    const [epost, setEpost] = useState("blaa@bla.com");
    const [ingliseKeelne, setInglise] = useState("ei");

    const ingliseks = () => {
        setAadress("London");
        setTelefon("123456");
        setEpost("london@london.com");
        setInglise("jah");
    }

    return ( 
        <div>
            <div>{aadress}</div>
            <div>{telefon}</div>
            <div>{epost}</div>
            <button onClick={ingliseks}>Muuda inglise keelseks</button>
            { ingliseKeelne === "jah" && <div>Leht on inglise keelne</div> }
        </div>
    );
}

export default Kontakt;