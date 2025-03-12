import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import SectorPage from "./pages/SectorPage"
import Footer from './components/layouts/Footer'
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import './App.css'
import Header from "./components/layouts/Header";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sector" element={<SectorPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
