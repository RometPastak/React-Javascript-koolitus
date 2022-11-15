import { useRef, useState } from 'react';
import poedFailist from '../poed.json';

function Poed() {
    const [poed, uuendaPoed] = useState(poedFailist);
    const nimiRef = useRef();
    const aegRef = useRef();

    const sorteeriAZ = () => {
        poed.sort((a,b) => a.nimi.localeCompare(b.nimi));
        uuendaPoed(poed.slice());
    }

    const sorteeriZA = () => {
        poed.sort((a,b) => b.nimi.localeCompare(a.nimi));
        uuendaPoed(poed.slice());
    }

    const sorteeriTahtedeArvuJargi = () => {
        poed.sort((a,b) => a.nimi.length - b.nimi.length);
        uuendaPoed(poed.slice());
    }

    const filtreeriLopuJargi = () => {
        const tulemus = poed.filter(pood => pood.nimi.endsWith("mäe"));
        uuendaPoed(tulemus);
    }

    const filtreeriTaheJargi = () => {
        const tulemus = poed.filter(pood => pood.nimi.includes("i"));
        uuendaPoed(tulemus);
    }

    const orginaalseksTagasi = () => {
        uuendaPoed([
            {"nimi": "Lasnamäe", "aeg": "9-22"},
            {"nimi": "Kesklinn", "aeg": "10-19"},
            {"nimi": "Mustamäe", "aeg": "8-18"},
            {"nimi": "Õismäe", "aeg": "9-19"},
            {"nimi": "Kristiine", "aeg": "9-23"},
            {"nimi": "Põhja-Tallinn", "aeg": "4-15"},
            {"nimi": "Kakumäe", "aeg": "7-22"}
        ]);
    }

    const muudaIgat = () => {
        const tulemus = poed.map(element => {return {"nimi": "--" + element.nimi, "aeg": element.aeg}});
        uuendaPoed(tulemus);
    }

    const kustutaPood = (jrknumber) => {
        //mitmendat ja mitu tk kustutan
        poed.splice(jrknumber, 1);
        uuendaPoed(poed.slice());
    }

    const lisaPood = () => {
        poed.push({"nimi": nimiRef.current.value, "aeg": aegRef.current.value});
        uuendaPoed(poed.slice());
    }

    return ( 
        <div>
            <label>Uue poe nimi</label>
            <br />
            <input ref={nimiRef} type="text" />
            <br />
            <label>Uue poe lahtiolekuaeg</label>
            <br />
            <input ref={aegRef} type="text" />
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
                    {pood.nimi} - {pood.aeg}
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