import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import ConsultationPage from "./pages/ConsultationPage.tsx";
import ParentsCorrectionCoursePage from "./pages/ParentsCorrectionCoursePage.tsx";
import ParrentsSittingCoursePage from "./pages/ParrentsSittingCoursePage.tsx";
import ParrentsHandlingCoursePage from "./pages/ParrentsHandlingCoursePage.tsx";
import SpecialistsCoursePage from "./pages/SpecialistsCoursePage.tsx";

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
