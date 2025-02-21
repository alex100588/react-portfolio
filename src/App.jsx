import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Education from "./components/services/Education";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
    </div>
  );
};

export default App;
