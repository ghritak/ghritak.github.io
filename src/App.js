import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavbarComponent from './components/nav/NavbarComponent';
import LeftIndices from './components/side/LeftIndices';
import RightLinks from './components/side/RightLinks';
import MainComponent from './components/home/MainComponent';
import { useLocation } from 'react-router-dom';
import Background from './components/ui/Background';


const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(35);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const view = queryParams.get('view');

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Background viewportWidth={viewportWidth}>
      <LeftIndices setViewportWidth={setViewportWidth} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <RightLinks />
      <NavbarComponent view={view} currentIndex={currentIndex} />
      <MainComponent />
    </Background>
  );
};

export default App;
