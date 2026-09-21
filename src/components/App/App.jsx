import "./App.css";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Services from "../Services/Services.jsx";
import Menu from "../Menu/Menu.jsx";
import About from "../About/About.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import FAQ from "../FAQ/FAQ.jsx";
import Visit from "../Visit/Visit.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  return (
    <div className="app">
      <a className="app__skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex="-1">
        <Hero />
        <Gallery />
        <Services />
        <Menu />
        <About />
        <Testimonials />
        <FAQ />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
