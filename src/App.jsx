import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Education from "./components/services/Education";
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Portfolio />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
