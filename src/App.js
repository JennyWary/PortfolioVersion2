// import './App.css';
import ParallaxComponent from "./components/Start/ParallaxComponent";
import Timeline from "./components/Zeitstrahl/Zeitstrahl";
import SmallParallax from "./components/Parallax/SmallParallax";
import Projekt from "./components/Projekt/Projekt";
import Tech from "./components/Tech/Tech";
import Footer from "./components/Footer/Footer";
import Social from "./components/Social/Social";
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
