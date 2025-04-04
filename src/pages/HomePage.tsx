import Header from "../components/Header.tsx";
import Intro from "../components/Intro.tsx";
import Cases from "../components/Cases.tsx";
import Courses from "../components/Courses.tsx";
import Reviews from "../components/Reviews.tsx";
import Consultation from "../components/Consultation.tsx";
import AboutMe from "../components/AboutMe.tsx";
import Lections from "../components/Lections.tsx";
import Footer from "../components/Footer.tsx";

export default function HomePage() {
  return (
    <>
      <Header />
      <Intro />
      {/* <Cases /> */}
      <Courses />
      <Consultation />
      <Lections />
      <AboutMe />
      <Reviews />
      <Footer />
    </>
  );
}
