import { useRef, useState } from "react";

function LisaTegelane() {
    const [message, setMessage] = useState("Tühi");
    const nimiRef = useRef();

    function kontroll() {
        if(nimiRef.current.value === "") {
            setMessage("Tühja nimega ei saa sisestada");
        }
        else {
            setMessage("Tegelane lisatud");
        }
    }

    return (
        <div>
            <div>{message}</div>
            <label>Tegelase nimi</label>
            <br />
            <input ref={nimiRef} type="text" />
            <button onClick={kontroll}>Lisa uus</button>
        </div>
    );
}

export default LisaTegelane;