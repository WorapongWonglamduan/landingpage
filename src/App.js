import "./App.css";
import Header from "./layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Services";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Footer from "./layout/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Service />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
