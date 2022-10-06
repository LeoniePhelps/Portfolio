import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
