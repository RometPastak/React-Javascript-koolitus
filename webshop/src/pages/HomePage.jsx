import productsFromFile from "../data/products.json";
import Button from "react-bootstrap/Button";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

function HomePage() {
    const [products, changeProducts] = useState(productsFromFile) || [];
    const { t } = useTranslation();

    const addToCart = (productClicked) => {
        const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
        const index = cartLS.findIndex(element => element.product.id === productClicked.id);

        if(index >= 0) {
            cartLS[index].quantity = cartLS[index].quantity + 1;
        }
        else {
            cartLS.push({"product": productClicked, "quantity": 1})
        }

        localStorage.setItem("cart", JSON.stringify(cartLS));
        toast.success(t("added_to_cart"), {
            "position": "bottom-right",
            "theme": "dark"
        });
    }

    const sortAZ = () => {
        products.sort((a,b) => a.name.localeCompare(b.name));
        changeProducts(products.slice());
    }

    const sortZA = () => {
        products.sort((a,b) => b.name.localeCompare(a.name));
        changeProducts(products.slice());
    }

    const sortPriceAsc = () => {
        products.sort((a,b) => a.price - b.price);
        changeProducts(products.slice());
    }

    const sortPriceDesc = () => {
        products.sort((a,b) => b.price - a.price);
        changeProducts(products.slice());
    }

    const filterByCategory = (kategooria) => {
        const result = productsFromFile.filter(element => element.category === kategooria);
        changeProducts(result);
    }

    const categorys = [...new Set(productsFromFile.map(element => element.category))];

    return ( 
        <div>
            <Button className="btn_sort" onClick={sortAZ}>{t('sort_az')}</Button>
            <Button className="btn_sort" onClick={sortZA}>{t('sort_za')}</Button>
            <Button className="btn_sort" onClick={sortPriceAsc}>{t('sort_asc')}</Button>
            <Button className="btn_sort" onClick={sortPriceDesc}>{t('sort_desc')}</Button>
            <br />
            {categorys.map((element, index) =>
                <Button className="btn_sort" key={index} onClick={() => filterByCategory(element)}>
                    {element}
                </Button>
            )}
            <div>{t('total_products')}: {products.length}</div>
            {products.map((element, index) => 
                <div key={index}>
                    <Link to={"/product/" + element.id}>
                        <img src={element.image} width="200px" alt={element.name} />
                    </Link>
                    <div>{element.name}</div>
                    <div>{element.price}€</div>
                    <Button onClick={() => addToCart(element)}>
                        {t('add_cart')}
                    </Button>
                    <br /><br />
                </div>
            )}
            <ToastContainer />
        </div>
    );
}

export default HomePage;