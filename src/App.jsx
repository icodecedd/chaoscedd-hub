import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CyberdeckHUD from "./pages/CyberdeckHUD";
import Unauthorized from "./pages/Unauthorized";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CyberdeckHUD />} />
        <Route path="/401" element={<Unauthorized />} />
        <Route path="*" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
}

export default App;
