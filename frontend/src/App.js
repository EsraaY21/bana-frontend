import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// REDUX TOOLKIT ----
import { fetchAsyncProducts } from './features/productSlice';
import { useDispatch } from 'react-redux';
// SCREENS ----
import Services from './screens/Services';
import About from './screens/About';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Contact from './screens/Contact';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import Shop from './screens/Shop';
import Error from './screens/Error';
// COMPONENTS ----
import Layout from './components/Layout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
        // element={<Layout search={'search'} setSearch={'setSearch'} />}
      >
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:urlSearchKey" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="services" element={<Services />} />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
