import { RouterProvider, Route } from './components/Router';
import { CartProvider } from './context/CartProvider';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Checkout } from './pages/Checkout';
import './App.css';

function App() {
  return (
    <RouterProvider>
      <CartProvider>
        <Layout>
          {/* Multi-Page Custom Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Layout>
      </CartProvider>
    </RouterProvider>
  );
}

export default App;
