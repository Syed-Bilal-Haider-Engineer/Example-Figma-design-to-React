import { useState } from 'react';

import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar'
import Home from './components/Home';
import CompaniesLogoList from './components/CompaniesLogoList';
import Introducing from './components/Introducing';
import EveryThigYouNeed from './components/EveryThigYouNeed';
import Enhance from './components/Enhance';
import HowUseful from './components/HowUseful';
import StandardFeatures from './components/StandardFeatures';
import CrossStore from './components/CrossStore';
import ManShoppingDress from './components/ManShoppingDress';
import Usingnvidia from './components/Usingnvidia';
import FooterDressComponent from './components/FooterDressComponent';
import Footer from './components/Footer';
import { ColorContectProvider } from './muiDarkModeStore'
import ThreeDclothing from './components/ThreeDclothing';
import Begin from './components/Begin'



function App() {
  return (
    <div style={{ position: "relative" }}>
      <ColorContectProvider  >
        <CssBaseline />
        <Navbar />
        <Home />
        <Begin/>
        <CompaniesLogoList />
        <Introducing />
        <EveryThigYouNeed />
        <Enhance />
        <HowUseful />
        <ThreeDclothing />
        <StandardFeatures />
        <CrossStore />
        <ManShoppingDress />
        <Usingnvidia />
        <FooterDressComponent />
        <Footer />
      </ColorContectProvider>
    </div>

  );
}

export default App;
