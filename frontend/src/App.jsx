import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Highlights from "./components/Highlights"; 
import HeroSection from "./components/Hero";
import Gallery from "./components/Gallery";
import Courses from "./components/Courses";
import Oportunidade from "./components/Oportunidade";
import Footer from './components/Footer';
import Cadastro from "./pages/Cadastro";
import Sobre from "./pages/Sobrenos";
import MapaFeira from "./pages/Mapa";
import Confirmacao from "./pages/Confirmacao";


function App() {
  return (
    <>
      <Header />
      <main className="main-content">
      
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Highlights />
            <Gallery />
            <Courses />
            
            <Oportunidade />
          </>
        } />

        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/mapa" element={<MapaFeira />} />
        <Route path="/confirmacao" element={<Confirmacao />} />
      </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
