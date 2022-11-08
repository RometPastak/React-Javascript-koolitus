import { useState } from 'react';

function Meist() {
    const [kontakt, n2itaKontakt] = useState("");

    return ( 
        <div>
            <div>See on info meist leht</div>
            <div>Meie töötajad:</div>
            <br />
            <div>Meelis Tuulik</div>
            <div>Uudiste reporter</div>
            <button onClick={() => n2itaKontakt("+372 51 51 54 22")}>Võta ühendust</button>
            <br /><br />
            <div>Kaspar Saal</div>
            <div>Saatejuht</div>
            <button onClick={() => n2itaKontakt("+372 52 55 74 24")}>Võta ühendust</button>
            <br /><br />
            <div>Teele Tamm</div>
            <div>Kujundaja</div>
            <button onClick={() => n2itaKontakt("+372 57 21 47 56")}>Võta ühendust</button>
            <br /><br />
            <div>Grete Vill</div>
            <div>Turundaja</div>
            <button onClick={() => n2itaKontakt("+372 54 11 44 72")}>Võta ühendust</button>
            <br /><br />
            { kontakt !== "" && <div>Tema kontakt: {kontakt}</div> }
        </div>
    );
}

export default Meist;