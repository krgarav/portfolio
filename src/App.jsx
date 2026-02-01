import Auth from "./Pages/Authentication/Auth";
import { Routes, Route,Navigate } from "react-router-dom";
import Portfolio from "./Pages/Portfolio/Portfolio";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/portfolio" element={<Portfolio />} />
     <Route path="*" element={<Navigate to="/portfolio" />} />
    </Routes>
  );
}

export default App;
