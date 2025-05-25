import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resurge from "./components/waitlist2";
import Onboard from "./pages/upload";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Resurge />} />
        <Route path="/upload" element={<Onboard />} />
      </Routes>
    </Router>
  );
}

export default App;
