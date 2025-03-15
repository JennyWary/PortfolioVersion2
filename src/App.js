import './App.css';
import ParallaxComponent from "./components/ParallaxComponent";
import Timeline from "./components/Zeitstrahl";
import SmallParallax from "./components/SmallParallax";
import ProjektItem from "./components/ProjektItem";

function App() {
  return (
      <div>
        <ParallaxComponent />
      {/*    <Timeline />*/}
      {/*<SmallParallax />*/}
      <ProjektItem />
      </div>

  );
}

export default App;
