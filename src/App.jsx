import { About } from "./components/about/About";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Skills } from "./components/skils/Skills";

import { useAos } from "./hooks/useAos";

function App() {
  useAos(1500);
  return (
    <>
      <Header />
      <main data-aos="fade-up">
        <Home />
        <About />
        <Portfolio />
        <Skills />
      </main>
    </>
  );
}

export default App;
