import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/pages/HomePage'
import SectorPage from "./components/pages/SectorPage"
import Footer from './components/layouts/Footer'
import './App.css'

function App() {

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sector" element={<SectorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
