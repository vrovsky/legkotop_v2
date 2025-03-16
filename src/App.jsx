import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ConsultationPage from "./pages/ConsultationPage.jsx";
import ParentsCorrectionCoursePage from "./pages/ParentsCorrectionCoursePage.jsx";
import ParrentsSittingCoursePage from "./pages/ParrentsSittingCoursePage.jsx";
import ParrentsHandlingCoursePage from "./pages/ParrentsHandlingCoursePage.jsx";
import SpecialistsCoursePage from "./pages/SpecialistsCoursePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route
          path="/correction-course"
          element={<ParentsCorrectionCoursePage />}
        />
        <Route path="/sitting-course" element={<ParrentsSittingCoursePage />} />
        <Route
          path="/handling-course"
          element={<ParrentsHandlingCoursePage />}
        />
        <Route path="/specialists-course" element={<SpecialistsCoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;
