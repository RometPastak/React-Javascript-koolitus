import { useState } from 'react';

function Kontakt() {
    const [Lounakeskus, setLounakeskus] = useState(false);
    const [Ulemiste, setUlemiste] = useState(false);
    const [Pohjakeskus, setPohjakeskus] = useState(false);

    return ( 
        <div>
            <div>See on kontakti leht</div>
            <div>Võta meiega ühendust</div>
            <br />
            <div onClick={() => setLounakeskus(!Lounakeskus)}>Lõunakeskus</div>
            { Lounakeskus && <div>+372 51 52 44 12</div> }
            <div>Tartu</div>
            <br />
            <div onClick={() => setUlemiste(!Ulemiste)}>Ülemiste keskus</div>
            { Ulemiste && <div>+372 55 57 21 38</div> }
            <div>Tallinn</div>
            <br />
            <div onClick={() => setPohjakeskus(!Pohjakeskus)}>Põhjakeskus</div>
            { Pohjakeskus && <div>+372 52 49 33 81</div> }
            <div>Rakvere</div>
        </div>
    );
}

export default Kontakt;