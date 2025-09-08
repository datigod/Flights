import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import RouteIntelligenceSidebar from './components/RouteIntelligenceSidebar';
import MethodologyExplainer from './components/MethodologyExplainer';
import Icon from '../../components/AppIcon';


const ReliabilitySearchEngine = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSearchQuery, setCurrentSearchQuery] = useState(null);
  const [showRouteIntelligence, setShowRouteIntelligence] = useState(false);
  const [routeIntelligenceData, setRouteIntelligenceData] = useState(null);

  // Mock airline data
  const mockAirlines = [
    {
      id: 1,
      name: 'Iberia',
      code: 'IB',
      reliabilityScore: 92,
      onTimePercentage: 89,
      avgDelay: 12,
      sampleSize: 156,
      trend: 'up',
      seasonalNote: 'Rendimiento excelente durante temporada alta de verano'
    },
    {
      id: 2,
      name: 'Lufthansa',
      code: 'LH',
      reliabilityScore: 88,
      onTimePercentage: 85,
      avgDelay: 18,
      sampleSize: 203,
      trend: 'stable',
      seasonalNote: 'Consistente a lo largo del año con ligeras mejoras en primavera'
    },
    {
      id: 3,
      name: 'Air France',
      code: 'AF',
      reliabilityScore: 84,
      onTimePercentage: 81,
      avgDelay: 22,
      sampleSize: 134,
      trend: 'up',
      seasonalNote: 'Mejoras significativas en los últimos 6 meses'
    },
    {
      id: 4,
      name: 'KLM',
      code: 'KL',
      reliabilityScore: 82,
      onTimePercentage: 79,
      avgDelay: 25,
      sampleSize: 98,
      trend: 'down',
      seasonalNote: 'Impacto por obras en aeropuerto hub durante Q2'
    },
    {
      id: 5,
      name: 'British Airways',
      code: 'BA',
      reliabilityScore: 79,
      onTimePercentage: 76,
      avgDelay: 28,
      sampleSize: 167,
      trend: 'stable',
      seasonalNote: 'Rendimiento estable con variaciones menores por temporada'
    }
  ];

  // Mock route intelligence data
  const mockRouteIntelligence = {
    historicalTrends: [
      {
        period: 'Últimos 3 meses',
        change: 5,
        description: 'Mejora general en puntualidad debido a condiciones meteorológicas favorables'
      },
      {
        period: 'Últimos 6 meses',
        change: -2,
        description: 'Ligera disminución por obras de infraestructura en aeropuertos'
      },
      {
        period: 'Último año',
        change: 8,
        description: 'Tendencia positiva sostenida con implementación de nuevas tecnologías'
      }
    ],
    impactFactors: [
      { name: 'Condiciones meteorológicas', impact: 'medium' },
      { name: 'Congestión del espacio aéreo', impact: 'high' },
      { name: 'Obras aeroportuarias', impact: 'low' },
      { name: 'Eventos estacionales', impact: 'medium' }
    ],
    seasonalPatterns: [
      {
        season: 'Primavera (Mar-May)',
        reliability: 87,
        description: 'Condiciones óptimas con menor tráfico y buen clima',
        flightCount: 1240,
        avgDelay: 15
      },
      {
        season: 'Verano (Jun-Ago)',
        reliability: 82,
        description: 'Mayor tráfico pero condiciones meteorológicas estables',
        flightCount: 1890,
        avgDelay: 22
      },
      {
        season: 'Otoño (Sep-Nov)',
        reliability: 85,
        description: 'Tráfico moderado con ocasionales disrupciones climáticas',
        flightCount: 1456,
        avgDelay: 18
      },
      {
        season: 'Invierno (Dec-Feb)',
        reliability: 79,
        description: 'Condiciones más desafiantes por clima y menor visibilidad',
        flightCount: 1123,
        avgDelay: 28
      }
    ],
    seasonalRecommendation: 'Para máxima confiabilidad, considera volar en primavera. Evita los meses de diciembre y enero si la puntualidad es crítica.',
    forecast: [
      {
        timeframe: 'Próximos 30 días',
        predictedReliability: 86,
        confidence: 'high',
        factors: 'Condiciones meteorológicas favorables y tráfico normal esperado'
      },
      {
        timeframe: 'Próximos 90 días',
        predictedReliability: 83,
        confidence: 'medium',
        factors: 'Entrada en temporada alta con posible aumento de tráfico'
      },
      {
        timeframe: 'Próximos 6 meses',
        predictedReliability: 81,
        confidence: 'medium',
        factors: 'Variaciones estacionales y posibles disrupciones por obras planificadas'
      }
    ],
    trendAlert: 'Se espera una ligera disminución en la confiabilidad durante los próximos 3 meses debido al aumento del tráfico estacional.'
  };

  const handleSearch = async (searchData) => {
    setIsLoading(true);
    setCurrentSearchQuery(searchData);
    
    // Simulate API call
    setTimeout(() => {
      // Filter and sort airlines based on search criteria
      let filteredAirlines = [...mockAirlines];
      
      if (searchData?.minReliability) {
        filteredAirlines = filteredAirlines?.filter(
          airline => airline?.reliabilityScore >= parseInt(searchData?.minReliability)
        );
      }
      
      // Sort by reliability score
      filteredAirlines?.sort((a, b) => b?.reliabilityScore - a?.reliabilityScore);
      
      setSearchResults(filteredAirlines);
      setRouteIntelligenceData(mockRouteIntelligence);
      setIsLoading(false);
    }, 1500);
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