import { useState } from "react";

//kirjutad ffc ja tuleb function ja export
function Avaleht() {
    let [kogus, muudaKogus] = useState(5); //useState võimaldab muuta HTMLi

    function v2henda() {
        // kogus = kogus - 1;
        muudaKogus(kogus - 1)
        console.log(kogus);
    }

    function suurenda() {
        // kogus = kogus + 1;
        muudaKogus(kogus + 1)
        console.log(kogus);
    }

    return (
        <div>
            <button onClick={v2henda}>-</button>
            <div>{kogus}</div>
            <button onClick={suurenda}>+</button>
        </div>
      );
}

export default Avaleht;