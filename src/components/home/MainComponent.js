import React from 'react';
import IntroComponent from './IntroComponent';
import AboutComponent from '../about/AboutComponent';
import ProjectComponent from '../project/ProjectComponent';
import ContactComponent from '../contact/ContactComponent';
import CopyRight from './CopyRight';

const MainComponent = () => {
  return (
    <>
      <IntroComponent />
      <AboutComponent />
      <ProjectComponent />
      <ContactComponent />
      <CopyRight />
    </>
  );
};

export default MainComponent;
