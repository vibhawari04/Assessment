// import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import ProductSection from "./Components/ProductSection/ProductSection";
import Footer from "./Components/Footer/Footer";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App overflow-x-hidden overflow-y-scroll ">
      <Header />
      <HeroSection />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
