import './App.css';

import { Link, Routes, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import Shops from './pages/Shops';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Admin from './pages/admin/Admin';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainShops from './pages/admin/MaintainShops';

import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  
  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">{t('webshop')}</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t('admin')}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t('shops')}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t('cart')}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t('contact')}</Nav.Link>
          </Nav>
          <img className='lang' src="/estonia.png" alt="Eesti" onClick={() => changeLang("ee")} />
          <img className='lang' src="/united-kingdom.png" alt="United Kingdom" onClick={() => changeLang("en")} />
        </Container>
      </Navbar>

      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shops" element={<Shops />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin" element={<Admin />} />
        <Route path="admin/add-product" element={<AddProduct />} />
        <Route path="admin/edit-product/:id" element={<EditProduct />} />
        <Route path="admin/maintain-products" element={<MaintainProducts />} />
        <Route path="admin/maintain-shops" element={<MaintainShops />} />
      </Routes>
    </div>
  );
}

export default App;
