import { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productsFromFile from '../../data/products.json';
import Button from "react-bootstrap/Button";
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function EditProduct() {
    const { id } = useParams();
    const productFound = productsFromFile.find(element => element.id === Number(id));
    const index = productsFromFile.indexOf(productFound);
    const idRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    const activeRef = useRef();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [idUnique, setIdUnique] = useState(true);

    const changeProduct = () => {
        const updatedProduct = {
            "id": Number(idRef.current.value),
            "name": nameRef.current.value,
            "price": Number(priceRef.current.value),
            "image": imageRef.current.value,
            "category": categoryRef.current.value,
            "description": descriptionRef.current.value,
            "active": activeRef.current.checked
        }

        toast.success(t("changed_product"), {
            "position": "bottom-right",
            "theme": "dark"
        });

        productsFromFile[index] = updatedProduct;
        navigate("/admin/maintain-products");
    }

    const controlIDUnique = () => {
        if(id === idRef.current.value) {
            setIdUnique(true);
            return;
        }

        const result = productsFromFile.find(element => element.id === Number(idRef.current.value));
        
        if(result === undefined) {
            setIdUnique(true);
        }
        else {
            setIdUnique(false);
        }
    }

    return ( 
        <div>
            {productFound !== undefined && <div>
                {idUnique === false && <div>Sisestatud ID on mõne teise tootega sama!</div>}
                <label>{t("product_id")}</label><br />
                <input ref={idRef} defaultValue={productFound.id} onChange={controlIDUnique} type="number" />
                <br /><br />
                <label>{t("product_name")}</label><br />
                <input ref={nameRef} defaultValue={productFound.name} type="text" />
                <br /><br />
                <label>{t("product_price")}</label><br />
                <input ref={priceRef} defaultValue={productFound.price} type="number" />
                <br /><br />
                <label>{t("product_image")}</label><br />
                <input ref={imageRef} defaultValue={productFound.image} type="text" />
                <br /><br />
                <label>{t("product_category")}</label><br />
                <input ref={categoryRef} defaultValue={productFound.category} type="text" />
                <br /><br />
                <label>{t("product_description")}</label><br />
                <input ref={descriptionRef} defaultValue={productFound.description} type="text" />
                <br /><br />
                <label>{t("product_active")}</label><br />
                <input ref={activeRef} defaultChecked={productFound.active} type="checkbox" />
                <br /><br />
                <Button disabled={idUnique === false} onClick={changeProduct}>{t("change_product")}</Button>
            </div>}
            {productFound === undefined && <div>
                {t("product_not_found")}
            </div>}
        </div>
    );
}

export default EditProduct;