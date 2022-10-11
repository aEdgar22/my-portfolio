import { About } from "./components/about/About";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Portfolio } from "./components/portfolio/Portfolio";
import { useAos } from "./hooks/useAos";

function App() {
  useAos(1500)
  return (
    <>
      <Header />
      <main data-aos="fade-up">
        <Home />
        <About />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
