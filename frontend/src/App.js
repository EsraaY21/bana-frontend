import { Routes, Route } from 'react-router-dom';
import Services from './screens/Services';
import About from './screens/About';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Contact from './screens/Contact';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import Shop from './screens/Shop';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="services" element={<Services />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
