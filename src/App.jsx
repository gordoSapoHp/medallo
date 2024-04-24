import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/Cart";
import CartPage from "./pages/CartPage";
import TicketsPage from "./pages/TicketsPage";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WhatsAppItem from "./components/WhatsAppItem";
import LineUp from "./pages/LineUp";
import { Helmet } from "react-helmet";

function App() {
  return (
    <CartProvider>
      <Router>
        <Helmet>
          <title>
            Boletas Core Medellín Tomorrowland - CORE TOMORROWLAND MEDELLIN
          </title>
        </Helmet>
        <div className="relative h-[100vh]">
          <Header/>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/cart-page" element={<CartPage />} />
            <Route path="/lineup" element={<LineUp />} />
          </Routes>
          <WhatsAppItem />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
