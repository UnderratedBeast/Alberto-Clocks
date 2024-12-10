import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Components/Contact/Contact";
import Support from "./Components/Support/Support";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Technology from "./Components/Technology/Technology";
import Products from "./Components/Products/Products";
import Checkout from "./Components/checkout/Checkout"; // Import the Checkout component
import Wishlist from "./Components/wishlist/Wishlist"; // Import the Wishlist component
import Home from "./Components/Home/Home";

import { CartProvider } from "./Components/data/CartContext";

function App() {
  return (
    <CartProvider>
      {" "}
      {/* Ensure this wraps the Router */}
      <Router>
        
        <Navigation />
       
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> Ensure this route exists */}
          <Route path="/" element={<Home />} />
          <Route path="/galleries" element={<Gallery />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/cart" element={<Checkout />} />{" "}
          {/* Add the Checkout route */}
          <Route path="/wishlist" element={<Wishlist />} />{" "}
          {/* Add the Wishlist route */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
