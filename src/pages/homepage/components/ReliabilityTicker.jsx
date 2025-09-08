import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ReliabilityTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reliabilityAlerts = [
    {
      id: 1,
      type: 'warning',
      route: 'MAD → BCN',
      airline: 'Iberia',
      message: 'Retrasos promedio de 15 min debido a tráfico aéreo',
      reliability: 78,
      trend: 'down'
    },
    {
      id: 2,
      type: 'success',
      route: 'BCN → CDG',
      airline: 'Vueling',
      message: 'Excelente puntualidad - 95% a tiempo esta semana',
      reliability: 95,
      trend: 'up'
    },
    {
      id: 3,
      type: 'info',
      route: 'MAD → LHR',
      airline: 'British Airways',
      message: 'Condiciones meteorológicas favorables',
      reliability: 88,
      trend: 'stable'
    },
    {
      id: 4,
      type: 'warning',
      route: 'BCN → FCO',
      airline: 'Ryanair',
      message: 'Posibles retrasos por mantenimiento de pista',
      reliability: 72,
      trend: 'down'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % reliabilityAlerts?.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [reliabilityAlerts?.length]);

  const getAlertIcon = (type) => {
    switch (type) {
      case 'success': return 'CheckCircle';
      case 'warning': return 'AlertTriangle';
      case 'info': return 'Info';
      default: return 'AlertCircle';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'success': return 'text-green-600 bg-green-50 border-green-200';
      case 'warning': return 'text-amber-600 bg-amber-50 border-amber-200';
      case 'info': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-red-600 bg-red-50 border-red-200';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up': return 'text-green-500';
      case 'down': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const currentAlert = reliabilityAlerts?.[currentIndex];

  return (
    <section className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Live Indicator */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">EN VIVO</span>
          </div>

          {/* Alert Content */}
          <div className="flex-1 mx-4 overflow-hidden">
            <div className={`flex items-center space-x-4 p-3 rounded-lg border transition-all duration-500 ${getAlertColor(currentAlert?.type)}`}>
              <Icon name={getAlertIcon(currentAlert?.type)} size={20} />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-sm">
                    {currentAlert?.route}
                  </span>
                  <span className="text-xs bg-white/60 px-2 py-1 rounded">
                    {currentAlert?.airline}
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium">
                      {currentAlert?.reliability}%
                    </span>
                    <Icon 
                      name={getTrendIcon(currentAlert?.trend)} 
                      size={14} 
                      className={getTrendColor(currentAlert?.trend)}
                    />
                  </div>
                </div>
                <p className="text-sm truncate mt-1">
                  {currentAlert?.message}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center space-x-1 flex-shrink-0">
            {reliabilityAlerts?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-4' :'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReliabilityTicker;