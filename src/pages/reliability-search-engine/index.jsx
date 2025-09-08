import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import RouteIntelligenceSidebar from './components/RouteIntelligenceSidebar';
import MethodologyExplainer from './components/MethodologyExplainer';
import Icon from '../../components/AppIcon';
import api from '../../utils/api';


const ReliabilitySearchEngine = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSearchQuery, setCurrentSearchQuery] = useState(null);
  const [showRouteIntelligence, setShowRouteIntelligence] = useState(false);
  const [routeIntelligenceData, setRouteIntelligenceData] = useState(null);

  const handleSearch = async (searchData) => {
    setIsLoading(true);
    setCurrentSearchQuery(searchData);
    try {
      const { data } = await api.get('/flights', { params: searchData });
      setSearchResults(data.airlines);
      setRouteIntelligenceData(data.routeInfo);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewDetails = (airline) => {
    console.log('Ver detalles de:', airline?.name);
    // Navigate to detailed analytics page
  };

  const handleSetAlert = (airline) => {
    console.log('Crear alerta para:', airline?.name);
    // Show alert creation modal
  };

  const handleShowRouteIntelligence = () => {
    setShowRouteIntelligence(true);
  };

  const handleToggleRouteIntelligence = () => {
    setShowRouteIntelligence(!showRouteIntelligence);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <div className="w-full px-4 lg:px-6 py-8">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center aviation-pulse">
                <Icon name="Search" size={32} color="white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Buscador de Confiabilidad
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Descubre las aerolíneas más confiables para tu ruta con análisis de datos en tiempo real 
              y predicciones basadas en rendimiento histórico
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-card rounded-lg border border-border p-4">
                <div className="text-2xl font-bold text-primary">500K+</div>
                <div className="text-sm text-muted-foreground">Vuelos Analizados</div>
              </div>
              <div className="bg-card rounded-lg border border-border p-4">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Aerolíneas</div>
              </div>
              <div className="bg-card rounded-lg border border-border p-4">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Precisión</div>
              </div>
              <div className="bg-card rounded-lg border border-border p-4">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Actualización</div>
              </div>
            </div>
          </div>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto mb-8">
            <SearchForm onSearch={handleSearch} isLoading={isLoading} />
          </div>

          {/* Search Results */}
          {searchResults && (
            <div className="max-w-6xl mx-auto mb-8">
              <SearchResults
                results={searchResults}
                searchQuery={currentSearchQuery}
                onViewDetails={handleViewDetails}
                onSetAlert={handleSetAlert}
                onShowRouteIntelligence={handleShowRouteIntelligence}
              />
            </div>
          )}

          {/* Methodology Explainer */}
          <div className="max-w-4xl mx-auto mb-8">
            <MethodologyExplainer />
          </div>

          {/* Features Section */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Características Avanzadas
              </h2>
              <p className="text-lg text-muted-foreground">
                Herramientas profesionales para tomar decisiones informadas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl border border-border p-6 data-elevation">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Análisis en Tiempo Real
                </h3>
                <p className="text-muted-foreground">
                  Datos actualizados cada hora con información de vuelos en vivo y 
                  predicciones basadas en condiciones actuales.
                </p>
              </div>

              <div className="bg-card rounded-xl border border-border p-6 data-elevation">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Tendencias Predictivas
                </h3>
                <p className="text-muted-foreground">
                  Algoritmos de machine learning que predicen el rendimiento futuro 
                  basado en patrones históricos y factores externos.
                </p>
              </div>

              <div className="bg-card rounded-xl border border-border p-6 data-elevation">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Bell" size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Alertas Inteligentes
                </h3>
                <p className="text-muted-foreground">
                  Notificaciones personalizadas sobre cambios en la confiabilidad 
                  de tus rutas favoritas y recomendaciones proactivas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Route Intelligence Sidebar */}
      <RouteIntelligenceSidebar
        routeData={routeIntelligenceData}
        isVisible={showRouteIntelligence}
        onToggle={handleToggleRouteIntelligence}
      />

      {/* Overlay for mobile sidebar */}
      {showRouteIntelligence && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setShowRouteIntelligence(false)}
        />
      )}
    </div>
  );
};

export default ReliabilitySearchEngine;