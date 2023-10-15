import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Work from "./components/Work";
import Lens from "./components/Lens";
import Contact from "./components/Contact";
import Footer from "./Footer";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

function App() {

  const options = {
    background: {
        color: {
            value: "#111",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 3,
            },
            repulse: {
                distance: 150,
                duration: 0.1,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 0.5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.3,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <Navbar></Navbar>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/lens" element={<Lens />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Particles className="tsparticles" options={options}init={particlesInit} loaded={particlesLoaded} />
      <Footer></Footer>
    </>
  );
}

export default App;
