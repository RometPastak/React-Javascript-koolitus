import { Link } from 'react-router-dom';

function Tooted() {
    const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
    
    const lisaOstukorvi = (toode) => {
        const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv")) || [];
        ostukorvLS.push(toode);
        localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
    }

    return ( 
        <div>
            {tooted.map((element, index) => 
            <div key={index}>
                <Link to={"/toode/" + index}>
                    {element}
                </Link>
                <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
            </div>)}
        </div>
    );
}

export default Tooted;