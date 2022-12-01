import { useRef,  } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function MuudaToode() {
    const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
    const urlParameetrid = useParams();
    const muudetavToode = tooted[urlParameetrid.index];

    const nimiRef = useRef();
    const piltRef = useRef();
    const hindRef = useRef();
    const aktiivsusRef = useRef();
    const navigate = useNavigate();

    const muudaToodet = () => {
        const uusToode = {
            "nimi": nimiRef.current.value,
            "hind": Number(hindRef.current.value),
            "pilt": piltRef.current.value,
            "aktiivne": aktiivsusRef.current.checked,
            "lisamiseAeg": muudetavToode.lisamiseAeg
        }

        tooted[urlParameetrid.index] = uusToode;
        localStorage.setItem("tooted", JSON.stringify(tooted));
        navigate("/halda");
    }

    return ( 
        <div>
            {muudetavToode !== undefined && 
                <div>
                    <img src={muudetavToode.pilt} width="200px" alt="" />
                    <div>{muudetavToode.nimi}</div>
                    <div>{muudetavToode.hind}€</div>
                    <br />
                    <label>Toote nimi</label><br />
                    <input defaultValue={muudetavToode.nimi} ref={nimiRef} type="text" /><br />
                    <label>Toote pilt</label><br />
                    <input defaultValue={muudetavToode.pilt} ref={piltRef} type="text" /><br />
                    <label>Toote hind</label><br />
                    <input defaultValue={muudetavToode.hind} ref={hindRef} type="number" /><br />
                    <label>Toote aktiivsus</label><br />
                    <input defaultChecked={muudetavToode.aktiivne} ref={aktiivsusRef} type="checkbox" /><br />
                    <button onClick={muudaToodet}>Muuda</button>
                </div>
            }
            {muudetavToode === undefined && <div>Toodet ei leitud!</div>}
        </div>
    );
}

export default MuudaToode;