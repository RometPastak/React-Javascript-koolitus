import { useState } from 'react';
import { Link } from 'react-router-dom';

function HaldaTooteid() {
    const [tooted, muudaToode] = useState(JSON.parse(localStorage.getItem("tooted")) || []);

    const kustutaToode = (jrknumber) => {
        tooted.splice(jrknumber, 1);
        muudaToode(tooted.slice());
        localStorage.setItem("tooted", JSON.stringify(tooted));
    }
    
    return ( 
        <div>
            <div>
                {tooted.map((element, index) =>
                <div key={index}>
                    {element.nimi}
                    <button onClick={() => kustutaToode(index)}>Kustuta</button>
                    <Link to ={"/muuda/" + index}>
                        <button>Muuda</button>
                    </Link>
                </div>)}
            </div>
        </div>
    );
}

export default HaldaTooteid;