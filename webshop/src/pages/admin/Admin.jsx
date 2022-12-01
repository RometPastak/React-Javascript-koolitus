import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Admin() {
    return ( 
        <div>
            <Link to="/admin/add-product">
                <Button className="btn_sort">Lisa toode</Button>
            </Link>
            <Link to="/admin/maintain-products">
                <Button className="btn_sort">Halda tooteid</Button>
            </Link>
            <Link to="/admin/maintain-shops">
                <Button className="btn_sort">Halda poode</Button>
            </Link>
        </div>
    );
}

export default Admin;