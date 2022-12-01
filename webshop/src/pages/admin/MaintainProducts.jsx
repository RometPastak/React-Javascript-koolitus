import { useRef, useState } from 'react';
import productsFromFile from '../../data/products.json';
import Button from "react-bootstrap/Button";
import { useTranslation } from 'react-i18next';
import '../../css/MaintainProducts.css';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function MaintainProducts() {
    const [products, changeProducts] = useState(productsFromFile);
    const { t } = useTranslation();
    const searchedProduct = useRef();

    const deleteProduct = (id) => {
        productsFromFile.splice(id, 1);
        changeProducts(productsFromFile.slice());
    }

    const searchFromProducts = () => {
        const result = productsFromFile.filter(element => element.name.includes(searchedProduct.current.value));
        changeProducts(result);
    }

    return ( 
        <div>
            <input ref={searchedProduct} onChange={searchFromProducts} type="text" />
            <div>{products.length}tk</div>
            {products.map((element, index) => 
                <div className="maintain_product" key={index}>
                    <img src={element.image} alt ="" />
                    <div>{element.id}</div>
                    <div>{element.name}</div>
                    <div>{element.price}€</div>
                    <div>{element.image}</div>
                    <div>{element.category}</div>
                    <div>{element.description}</div>
                    <div>{element.active}</div>
                    <Button className="btn_sort" onClick={() => deleteProduct(index)}>{t('delete')}</Button>
                    <Link to={"/admin/edit-product/" + element.id}>
                        <Button className="btn_sort">Muuda</Button>
                    </Link>
                </div>
            )}
            <ToastContainer />
        </div>
    );
}

export default MaintainProducts;