import { useState } from "react";

function Meist() {
    const [message, setMessage] = useState("Vali mõni tegevus");

    return ( 
        <div>
            <div>{message}</div>
            <button onClick={() => setMessage("Selleks saada meile e-kiri jobs@tere.com")}>Kandideeri tööle</button>
            <button onClick={() => setMessage("Meil on 10 töötajat")}>Vaata meie töötajaid</button>
            <button onClick={() => setMessage("Ühenduse võtmiseks minge Kontakt lehele")}>Võta ühendust</button>
        </div>
    );
}

export default Meist;