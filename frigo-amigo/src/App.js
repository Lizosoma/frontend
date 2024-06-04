import './App.css';
import './assets/styles/global.css';
import lines from './assets/Pictures/main-lines.svg';

import MainNavs from './Components/MainNavs';
import Recipes from './Components/Recepies/Recipes';
import Footer from './Components/Footer/Footer';

import React, { useRef } from 'react';
import UserProvider from './Services/user-context';
import MainContainer from './Components/main-block/main-container';
import DownloadContainer from './Components/download/download-container';
import PremiumContainer from './Components/premium/premium-container';

function App() {
  const mainRef = useRef(null);
  const downloadAppRef = useRef(null);
  const recipesRef = useRef(null);
  const premiumRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <UserProvider>
      <div className="container">
        <img src={lines} alt="lines" className="lines" />
        {/* <MainNavs
          refs={{
            mainRef,
            downloadAppRef,
            recipesRef,
            premiumRef,
            footerRef,
          }}
        /> */}
        <MainContainer ref={mainRef} />
        <DownloadContainer ref={downloadAppRef} />
        <Recipes ref={recipesRef} />
        <PremiumContainer ref={premiumRef} />
        <Footer ref={footerRef} />
      </div>
    </UserProvider>
  );
}

export default App;
