import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  const [filter, setFilter] = useState<"projects" | "skills">("projects");

  return (
    <>
      <Header />
      <main className="main">
        <section className="">
          <ul className="max-w-screen-xsm mx-6 xsm:mx-auto mt-8 mb-10 bg-text-color-lighten dark:bg-dark-container-color p-1 rounded-xl flex justify-between gap-x-2">
            <button
              className={`filters_button ${
                filter === "projects" ? "filter_button_active" : ""
              }`}
              onClick={() => setFilter("projects")}
            >
              Projects
            </button>
            <button
              className={`filters_button ${
                filter === "skills" ? "filter_button_active" : ""
              }`}
              onClick={() => setFilter("skills")}
            >
              Skills
            </button>
          </ul>
          <div className="max-w-screen-lg mx-6 lg:mx-auto">
            {(filter === "projects" && <Projects />) ||
              (filter === "skills" && <Skills />)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
