import Button from "react-bootstrap/Button";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
import '../css/Cart.css';

function Cart() {
    const [cart, changeCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const { t } = useTranslation();

    const removeFromCart = (index) => {
        cart.splice(index, 1);
        changeCart(cart.slice());
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    const emptyCart = () => {
        changeCart([]);
        localStorage.setItem("cart", JSON.stringify([]));
    }

    const calculateCartSum = () => {
        let total_price = 0;
        cart.forEach(element => total_price = total_price + element.product.price * element.quantity);
        return total_price.toFixed(2);
    }

    const decreaseQuantity = (index) => {
        cart[index].quantity = cart[index].quantity - 1;

        if(cart[index].quantity <= 0) {
            removeFromCart(index);
        }

        changeCart(cart.slice());
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    const increaseQuantity = (index) => {
        cart[index].quantity = cart[index].quantity + 1;
        changeCart(cart.slice());
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Kui ostukorv on tühi, siis kuva nuppe ja muid asju ei näita ja teade, et on tühi

    return ( 
        <div>
            <div className="cart-top">
                {cart.length > 0 && <Button onClick={emptyCart}>{t('empty_cart')}</Button>}
                {cart.length >= 1 && <div>{t('products_in_cart')}: {cart.length}</div>}
                {cart.length === 0 && <div>{t('cart_is_empty')}</div>}
            </div>
            <div>
                {cart.map((element, index) => 
                <div className="product" key={index}>
                    <img className="image" src={element.product.image} alt="" />
                    <div className="name">{element.product.name}</div>
                    <div className="price">{element.product.price}€</div>
                    <Button className="button" onClick={() => decreaseQuantity(index)}>-</Button>
                    <div className="quantity">{element.quantity}tk</div>
                    <Button className="button" onClick={() => increaseQuantity(index)}>+</Button>
                    <div className="sum">{element.product.price * element.quantity}€</div>
                    <Button className="button" onClick={() => removeFromCart(index)}>{t('delete')}</Button>
                    <br /><br />
                </div>
                )}
            </div>
            <br />
            <div className="cart-bottom">
                <div>{t('cart_total_price')}: {calculateCartSum()}€</div>
            </div>
        </div>
    );
}

export default Cart;