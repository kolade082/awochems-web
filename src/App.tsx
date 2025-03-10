import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import SectorPage from "./pages/SectorPage"
import Footer from './components/layouts/Footer'
import ContactPage from "./pages/ContactPage";
import './App.css'
import Header from "./components/layouts/Header";

function App() {

  return (
    <Router basename="/awochems-web">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sector" element={<SectorPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
