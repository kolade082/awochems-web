import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/pages/HomePage'
import './App.css'

function App() {

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App
