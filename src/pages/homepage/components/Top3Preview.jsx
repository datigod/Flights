import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../components/ui/Button';
import api from '../../../utils/api';

const Top3Preview = () => {
  const [routes, setRoutes] = React.useState([]);
  const [selectedRoute, setSelectedRoute] = React.useState(0);

  React.useEffect(() => {
    const fetchTopRoutes = async () => {
      try {
        const { data } = await api.get('/flights/top-routes');
        setRoutes(data?.routes || []);
      } catch (error) {
        console.error('Error fetching top routes:', error);
      }
    };

    fetchTopRoutes();
  }, []);

  const getReliabilityColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 80) return 'text-amber-600 bg-amber-50';
    return 'text-red-600 bg-red-50';
  };

  const getReliabilityBorderColor = (score) => {
    if (score >= 90) return 'border-green-200';
    if (score >= 80) return 'border-amber-200';
    return 'border-red-200';
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Más Confiable': return 'bg-green-100 text-green-800 border-green-200';
      case 'Confiable': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Buena Opción': return 'bg-amber-100 text-amber-800 border-amber-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const currentRoute = routes?.[selectedRoute];
  if (!routes?.length) {
    return (
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">Cargando rutas...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Top 3 Aerolíneas por Confiabilidad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descubre qué aerolíneas ofrecen la mejor puntualidad en las rutas más populares de Estados Unidos
          </p>

          {/* Route Selector */}
          <div className="flex justify-center space-x-4 mb-8">
            {routes?.map((route, index) => (
              <button
                key={index}
                onClick={() => setSelectedRoute(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedRoute === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {route?.route}
              </button>
            ))}
          </div>
        </div>

        {/* Airlines Ranking */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {currentRoute?.airlines?.map((airline, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl ${
                airline?.rank === 1 
                  ? 'border-green-200 shadow-lg transform hover:-translate-y-2' 
                  : 'border-gray-200 hover:border-blue-200'
              }`}
            >
              {/* Rank Badge */}
              <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                airline?.rank === 1 ? 'bg-green-500' : 
                airline?.rank === 2 ? 'bg-blue-500' : 'bg-amber-500'
              }`}>
                {airline?.rank}
              </div>

              {/* Airline Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <img 
                    src={airline?.logo} 
                    alt={`${airline?.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{airline?.name}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getBadgeColor(airline?.badge)}`}>
                    {airline?.badge}
                  </span>
                </div>
              </div>

              {/* Reliability Score */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full text-2xl font-bold border-4 ${getReliabilityColor(airline?.reliability)} ${getReliabilityBorderColor(airline?.reliability)}`}>
                  {airline?.reliability}
                </div>
                <p className="text-sm text-gray-600 mt-2">Puntuación de Confiabilidad</p>
              </div>

              {/* Stats */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Puntualidad:</span>
                  <span className="font-semibold text-gray-900">{airline?.onTimePercentage}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Retraso promedio:</span>
                  <span className="font-semibold text-gray-900">{airline?.avgDelay}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Confianza:</span>
                  <span className="font-semibold text-gray-900">{airline?.confidence}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Vuelos analizados:</span>
                  <span className="font-semibold text-gray-900">{airline?.flightCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/reliability-search-engine">
            <Button 
              variant="default" 
              size="lg" 
              iconName="Search" 
              iconPosition="right"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Buscar Tu Ruta
            </Button>
          </Link>
          <p className="text-sm text-gray-500 mt-3">
            Resultados actualizados cada 15 minutos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Top3Preview;