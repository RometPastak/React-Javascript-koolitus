import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
        "webshop": "Webshop",
        "admin": "Admin view",
        "shops": "Shops",
        "cart": "Cart",
        "contact": "Contact",
        "add_cart": "Add to cart",
        "sort_az": "Sort A-Z",
        "sort_za": "Sort Z-A",
        "sort_asc": "Sort Price Ascending Order",
        "sort_desc": "Sort Price Descending Order",
        "total_products": "Total products",
        "empty_cart": "Clear cart",
        "products_in_cart": "Products in cart",
        "cart_is_empty": "Cart is empty",
        "delete": "Delete",
        "cart_total_price": "Total price",
        "added_to_cart": "Product added to cart!",
        "added_new_product": "New product added!",
        "product_id": "ID",
        "product_name": "Name",
        "product_price": "Price",
        "product_image": "Image",
        "product_category": "Category",
        "product_active": "Active",
        "product_description": "Description",
        "add_new_product": "Add product",
        "change_product": "Change product",
        "changed_product": "Product successfully changed!",
        "product_not_found": "Product not found!"
    }
  },
  ee: {
    translation: {
        "webshop": "Veebipood",
        "admin": "Admini vaade",
        "shops": "Poed",
        "cart": "Ostukorv",
        "contact": "Kontakt",
        "add_cart": "Lisa ostukorvi",
        "sort_az": "Sorteeri A-Z",
        "sort_za": "Sorteeri Z-A",
        "sort_asc": "Sorteeri Hind Kasvavas Järjekorras",
        "sort_desc": "Sorteeri Hind Kahanevas Järjekorras",
        "total_products": "Kokku tooteid",
        "empty_cart": "Tühjenda ostukorv",
        "products_in_cart": "Tooteid ostukorvis",
        "cart_is_empty": "Ostukorv on tühi",
        "delete": "Kustuta",
        "cart_total_price": "Kogusumma",
        "added_to_cart": "Toode lisatud ostukorvi!",
        "added_new_product": "Uus toode lisatud!",
        "product_id": "ID",
        "product_name": "Nimi",
        "product_price": "Hind",
        "product_image": "Pilt",
        "product_category": "Kategooria",
        "product_active": "Aktiivsus",
        "product_description": "Kirjeldus",
        "add_new_product": "Lisa toode",
        "change_product": "Muuda toodet",
        "changed_product": "Toode edukalt muudetud!",
        "product_not_found": "Toodet ei leitud!"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;