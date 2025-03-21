// import './App.css';
import ParallaxComponent from "./components/ParallaxComponent";
import Timeline from "./components/Zeitstrahl";
import SmallParallax from "./components/SmallParallax";
import Projekt from "./components/Projekt";
import Tech from "./components/Tech";
import Footer from "./components/Footer";
import Social from "./components/Social";
function App() {
  return (
      <div>
        <ParallaxComponent />
          <Timeline />
          <SmallParallax image="./image/code.jpg" />
          <Projekt />
          <SmallParallax image="./image/laptopcode.jpg" />
          <Tech />
          <Footer />
          <Social />
      </div>

  );
}

export default App;
