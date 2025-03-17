import React from "react";

import Header from "../components/Header.jsx";
import Intro from "../components/Intro.jsx";
import Cases from "../components/Cases.jsx";
import Courses from "../components/Courses.jsx";
import Reviews from "../components/Reviews.jsx";
import Consultation from "../components/Consultation.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage() {
  return (
    <>
      <Header />
      <Intro />
      {/* <Cases /> */}
      <Courses />
      <Consultation />
      <AboutMe />
      <Reviews />
      <Footer />
    </>
  );
}
