import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ReliabilityTicker from './components/ReliabilityTicker';
import Top3Preview from './components/Top3Preview';
import MethodologyTeaser from './components/MethodologyTeaser';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>AirlineReliability Pro - Vuela con Confianza Basada en Datos</title>
        <meta name="description" content="Plataforma líder en análisis de confiabilidad de aerolíneas. Transformamos datos complejos de aviación en insights accionables para viajeros inteligentes." />
        <meta name="keywords" content="confiabilidad aerolíneas, puntualidad vuelos, análisis aviación, datos vuelos, España" />
        <meta property="og:title" content="AirlineReliability Pro - Vuela con Confianza Basada en Datos" />
        <meta property="og:description" content="Descubre qué aerolíneas son más confiables con nuestro análisis de más de 50,000 vuelos diarios" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          <ReliabilityTicker />
          <Top3Preview />
          <MethodologyTeaser />
          <SocialProof />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;