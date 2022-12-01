import { useParams } from "react-router-dom";

function YksikToode() {
    const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
    const urlParameetrid = useParams();
    const leitudToode = tooted[urlParameetrid.jrknumber];

    return ( 
        <div>
            <img src={leitudToode.pilt} width="200px" alt="" />
            <div>{leitudToode.nimi}</div>
            <div>{leitudToode.hind}€</div>
        </div>
    );
}

export default YksikToode;