import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ConsultationPage from "./pages/ConsultationPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
