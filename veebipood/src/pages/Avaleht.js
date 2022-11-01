import { useState } from "react";

//kirjutad ffc ja tuleb function ja export
function Avaleht() {
    //let kogus = 5;
    const [kogus, muudaKogus] = useState(5); //useState võimaldab muuta HTMLi
    const [sonum, muudaSonum] = useState("");
    const [laigitud, muudaLaigitud] = useState(false);

    function nulli() {
        muudaKogus(0);
        muudaSonum("Kogus nullitud");
    }

    function v2henda() {
        // kogus = kogus - 1;
        muudaKogus(kogus - 1)
        muudaSonum("Kogus vähendatud");
    }

    function suurenda() {
        // kogus = kogus + 1;
        muudaKogus(kogus + 1)
        muudaSonum("Kogus suurendatud");
    }

    function laigi() {
        if(laigitud === true) {
            muudaLaigitud(false);
        }
        else {
            muudaLaigitud(true);
        }
    }

    //Kui on compile vead, siis nad tulevad sinna, kus on npm käimas
    // ning lehele ka - localhostis läheb taust mustaks ja on kirjas mis on katki

    //Kui mul on run-time vead, siis leht on valge ja need vead
    // leian: hiirega parem klõps -> inspect -> console

    return (
        <div>
            {/* <button hidden={kogus === 0} onClick={nulli}>Nulli</button> */}
            { kogus > 0 && <button onClick={nulli}>Nulli</button>}
            <br />
            <button disabled={kogus === 0} onClick={v2henda}>-</button>
            <div>{kogus}</div>
            <button onClick={suurenda}>+</button>
            <div>{sonum}</div>
            {/* onClick={() => muudaLaigitud(!laigitud)} */}
            { laigitud === true && <img onClick={() => muudaLaigitud(false)} src="/liked.svg" alt="" /> }
            { laigitud === false && <img onClick={laigi} src="/not_liked.svg" alt="" /> }
        </div>
      );
}

export default Avaleht;