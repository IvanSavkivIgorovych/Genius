import "./normalize.css";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
