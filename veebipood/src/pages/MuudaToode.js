import { useParams } from 'react-router-dom';
import { useNavigate, useRef } from 'react';

function MuudaToode() {
    const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
    const urlParameetrid = useParams();
    const muudetavToode = tooted[urlParameetrid.index];

    const nimiRef = useRef();
    const navigate = useNavigate();

    const muudaToodet = () => {
        tooted[urlParameetrid.index] = nimiRef.current.value;
        localStorage.setItem("tooted", JSON.stringify(tooted));
        navigate("/halda");
    }

    return ( 
        <div>
            <div>{urlParameetrid.index}</div>
            {muudetavToode !== undefined && 
                <div>
                    {muudetavToode}<br />
                    <label>Toote nimi</label><br />
                    <input defaultValue={muudetavToode} ref={nimiRef} type="text" /><br />
                    <button onClick={muudaToodet}>Muuda</button>
                </div>
            }
            {muudetavToode === undefined && <div>Toodet ei leitud!</div>}
        </div>
    );
}

export default MuudaToode;