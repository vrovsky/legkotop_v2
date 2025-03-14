import { useState } from "react";
import Header from "./components/Header.jsx";
import Intro from "./components/Intro.jsx";
import Cases from "./components/Cases.jsx";
import Courses from "./components/Courses.jsx";
import Reviews from "./components/Reviews.jsx";
import Consultation from "./components/Consultation.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

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
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
