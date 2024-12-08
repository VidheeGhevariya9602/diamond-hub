import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './App';
// import Cart from './components/Cart';
// import Listing from './components/Listing';
// import ProductList from './components/ProductDetails';
// import ProductDetails from './components/ProductList';
import './index.css';
import About from './pages/About';
import Aboutdg from './pages/Aboutdg';
import Carat from './pages/Carat';
import Cart from './pages/Cart';
import Clarity from './pages/Clarity';
import Color from './pages/Color';
import Contect from './pages/Contect';
import Ctac from './pages/Ctac';
import Cvd from './pages/Cvd';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Login from './pages/Login';
import Privacypolicy from './pages/Privacypolicy';
import ProductDetails from './pages/ProductDetails';
import ProductList from './pages/ProductList';
import Rough from './pages/Rough';
import Sellerlogin from './pages/Sellerlogin';
import Shape from './pages/Shape';
import Startselling from './pages/Startselling';
import Cut from './pages/cut';
import Howbuy from './pages/howbuy';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

export default function App() {
  const [formData, setFormData] = useState([]);
  const addFormData = (data) => {
    setFormData([...formData, data]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path='rough' element={<Rough />} />
          <Route path='cvd' element={<Cvd />} />
          <Route path="about" element={<About />} />
          <Route path="aboutdg" element={<Aboutdg />} />
          <Route path="contect" element={<Contect />} />
          <Route path="footer" element={<Footer />} />
          <Route path="howbuy" element={<Howbuy />} />
          <Route path="cut" element={<Cut />} />
          <Route path="clarity" element={<Clarity />} />
          <Route path="color" element={<Color />} />
          <Route path="carat" element={<Carat />} />
          <Route path="shape" element={<Shape />} />
          <Route path="login" element={<Login />} />
          <Route path="ctac" element={<Ctac />} />
          <Route path="startselling" element={<Startselling />} />
          <Route path="sellerlogin" element={<Sellerlogin />} />
          <Route path="Privacypolicy" element={<Privacypolicy />} />
          <Route path="product" element={<ProductDetails data1={formData} />} />
          <Route path='product/:id' element={<ProductList />} />
          <Route path="listing" element={<Listing onSubmit={addFormData} />} />
          <Route path="Cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();