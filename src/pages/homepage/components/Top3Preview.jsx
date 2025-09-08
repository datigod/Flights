import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../components/ui/Button';

const Top3Preview = () => {
  const sampleResults = [
    {
      route: 'Madrid → Barcelona',
      date: '2025-01-15',
      airlines: [
        {
          rank: 1,
          name: 'Iberia',
          logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=100&h=100&fit=crop&crop=center',
          reliability: 94,
          confidence: 98,
          onTimePercentage: 89,
          avgDelay: '8 min',
          flightCount: 156,
          badge: 'Más Confiable'
        },
        {
          rank: 2,
          name: 'Vueling',
          logo: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=100&h=100&fit=crop&crop=center',
          reliability: 87,
          confidence: 95,
          onTimePercentage: 82,
          avgDelay: '12 min',
          flightCount: 203,
          badge: 'Buena Opción'
        },
        {
          rank: 3,
          name: 'Ryanair',
          logo: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=100&h=100&fit=crop&crop=center',
          reliability: 76,
          confidence: 92,
          onTimePercentage: 74,
          avgDelay: '18 min',
          flightCount: 98,
          badge: 'Económica'
        }
      ]
    },
    {
      route: 'Madrid → Londres',
      date: '2025-01-15',
      airlines: [
        {
          rank: 1,
          name: 'British Airways',
          logo: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=100&h=100&fit=crop&crop=center',
          reliability: 91,
          confidence: 97,
          onTimePercentage: 86,
          avgDelay: '10 min',
          flightCount: 124,
          badge: 'Más Confiable'
        },
        {
          rank: 2,
          name: 'Iberia',
          logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=100&h=100&fit=crop&crop=center',
          reliability: 88,
          confidence: 96,
          onTimePercentage: 83,
          avgDelay: '11 min',
          flightCount: 89,
          badge: 'Confiable'
        },
        {
          rank: 3,
          name: 'easyJet',
          logo: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop&crop=center',
          reliability: 79,
          confidence: 93,
          onTimePercentage: 76,
          avgDelay: '16 min',
          flightCount: 67,
          badge: 'Económica'
        }
      ]
    }
  ];

  const [selectedRoute, setSelectedRoute] = React.useState(0);

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

  const currentRoute = sampleResults?.[selectedRoute];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Top 3 Aerolíneas por Confiabilidad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descubre qué aerolíneas ofrecen la mejor puntualidad en las rutas más populares de España
          </p>

          {/* Route Selector */}
          <div className="flex justify-center space-x-4 mb-8">
            {sampleResults?.map((route, index) => (
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