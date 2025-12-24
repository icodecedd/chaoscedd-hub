import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CyberdeckHUD from "./pages/CyberdeckHUD";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CyberdeckHUD />} />
      </Routes>
    </Router>
  );
}

export default App;
