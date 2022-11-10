import { useParams } from "react-router-dom";

function YksikToode() {
    const tooted = JSON.parse(localStorage.getItem("tooted")) || [];
    const urlParameetrid = useParams();
    const leitudToode = tooted[urlParameetrid.jrknumber];

    return ( 
        <div>
            <div>{tooted}</div>
            <div>{urlParameetrid.jrknumber}</div>
            <div>{leitudToode}</div>
        </div>
    );
}

export default YksikToode;