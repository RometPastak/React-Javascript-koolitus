import { useRef, useState } from 'react';
import poedFailist from '../poed.json';

function Poed() {
    const [poed, uuendaPoed] = useState(poedFailist
    );

    const sorteeriAZ = () => {
        poed.sort();
        uuendaPoed(poed.slice());
    }

    const sorteeriZA = () => {
            // poed.sort((a,b) => b.localeCompare(a))
        poed.sort();
        poed.reverse();
        uuendaPoed(poed.slice());
    }

    const sorteeriTahtedeArvuJargi = () => {
        poed.sort((a,b) => a.length - b.length);
        uuendaPoed(poed.slice());
    }

    const filtreeriLopuJargi = () => {
        const tulemus = poed.filter(pood => pood.endsWith("mäe"));
        uuendaPoed(tulemus);
    }

    const filtreeriTaheJargi = () => {
        const tulemus = poed.filter(pood => pood.includes("i"));
        uuendaPoed(tulemus);
    }

    const orginaalseksTagasi = () => {
        uuendaPoed(["Lasnamäe", "Kesklinn", "Mustamäe", "Õismäe",
            "Kristiine", "Põhja-Tallinn", "Kakumäe"]);
    }

    const muudaIgat = () => {
        const tulemus = poed.map(element => "--" + element);
        uuendaPoed(tulemus);
    }

    const kustutaPood = (jrknumber) => {
        //mitmendat ja mitu tk kustutan
        poed.splice(jrknumber, 1);
        uuendaPoed(poed.slice());
    }

    const poodRef = useRef();

    const lisaPood = () => {
        poed.push(poodRef.current.value);
        uuendaPoed(poed.slice());
    }

    return ( 
        <div>
            <label>Uue poe nimi</label>
            <br />
            <input ref={poodRef} type="text" />
            <br />
            <button onClick={lisaPood}>Lisa uus pood</button>
            <br /><br />
            <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
            <button onClick={sorteeriZA}>Sorteeri Z-A</button>
            <button onClick={sorteeriTahtedeArvuJargi}>Sorteeri tähtede arvu järgi</button>
            <button onClick={filtreeriLopuJargi}>Jäta alles kellel lõpus "mäe"</button>
            <button onClick={filtreeriTaheJargi}>Jäta alles kellel "i" täht sees</button>
            <button onClick={orginaalseksTagasi}>Tagasi orginaalseks</button>
            <button onClick={muudaIgat}>Pane igaühele -- ette</button>
            <br /><br />
            {poed.map((pood, index) => 
                <div key={index}>
                    {pood}
                    <button onClick={() => kustutaPood(index)}>Kustuta</button>
                </div>
            )}
            <div>----------------------------</div>
            <div>Lasnamäe</div>
            <div>Kesklinn</div>
            <div>Mustamäe</div>
            <div>Õismäe</div>
            <div>Kristiine</div>
            <div>Põhja-Tallinn</div>
            <div>Kakumäe</div>
            <br /><br />
            {["BMW", "Audi", "Tesla"].map((auto, jrknumber) => <div key={jrknumber}>{auto}</div>)}
        </div> 
    );
}

export default Poed;