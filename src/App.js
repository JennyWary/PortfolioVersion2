import './App.css';
import ParallaxComponent from "./components/ParallaxComponent";
import Timeline from "./components/Zeitstrahl";
import SmallParallax from "./components/SmallParallax";
import Projekt from "./components/Projekt";

function App() {
  return (
      <div>
        <ParallaxComponent />
          <Timeline />
          <SmallParallax />
         <Projekt />
          <SmallParallax />

      </div>

  );
}

export default App;
