import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavbarComponent from './components/nav/NavbarComponent';
import LeftIndices from './components/side/LeftIndices';
import RightLinks from './components/side/RightLinks';
import MainComponent from './components/home/MainComponent';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <LeftIndices />
      <RightLinks />
      <NavbarComponent />
      <MainComponent />
    </>
  );
};

export default App;
