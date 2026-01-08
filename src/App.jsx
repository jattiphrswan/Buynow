import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

// Simple ScrollToTop component to reset scroll on route change
const ScrollToTopWrapper = () => {
  return <ScrollToTop />;
};

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTopWrapper />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
