import { motion } from "framer-motion";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <motion.div
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </motion.div>
      <motion.div
        className="card"
        whileHover={{ scale: 2 }}
        whileTap={{ scale: 0.95 }}
      >
        <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      </motion.div>
      <p className="read-the-docs">My Portfolio</p>
      <Header />
      <section>
        <h2>My Projects</h2>
        <Project
          title="Project 1"
          description="Description of Project 1"
          link="https://example.com/project1"
        />
        <Project title="Project 2" description="Description of Project 2" />
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
