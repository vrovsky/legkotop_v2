import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Cases from "./components/Cases.jsx";
import Courses from "./components/Courses.jsx";
import Reviews from "./components/Reviews.jsx";
import Consultation from "./components/Consultation.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Footer from "./components/Footer.jsx";
import ConsultationPage from "./pages/ConsultationPage.jsx";

function HomePage() {
  return (
    <>
      <Header />
      <Intro />
      <Cases />
      <Courses />
      <Reviews />
      <Consultation />
      <AboutMe />
      <Footer />
    </>
  );
}
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
