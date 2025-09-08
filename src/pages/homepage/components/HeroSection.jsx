import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import api from '../../../utils/api';

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    origin: '',
    destination: '',
    date: ''
  });
  const [popularRoutes, setPopularRoutes] = useState([]);

  useEffect(() => {
    const fetchPopularRoutes = async () => {
      try {
        const { data } = await api.get('/routes/popular');
        setPopularRoutes(data?.routes || []);
      } catch (error) {
        console.error('Error fetching popular routes:', error);
      }
    };

    fetchPopularRoutes();
  }, []);

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleQuickSearch = (route) => {
    setSearchData({
      origin: route?.from,
      destination: route?.to,
      date: new Date()?.toISOString()?.split('T')?.[0]
    });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-12">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Vuela con Confianza
            <span className="block text-blue-300">Basada en Datos</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transformamos datos complejos de aviación en insights accionables para que tomes las mejores decisiones de vuelo
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-blue-200">
            <div className="flex items-center space-x-2">
              <Icon name="BarChart3" size={20} />
              <span className="text-sm font-medium">50,000+ vuelos analizados diariamente</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} />
              <span className="text-sm font-medium">Datos en tiempo real</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} />
              <span className="text-sm font-medium">95% precisión en predicciones</span>
            </div>
          </div>
        </div>

        {/* Search Interface */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Busca la Confiabilidad de tu Vuelo
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="relative">
                <Input
                  label="Origen"
                  type="text"
                  placeholder="JFK, New York"
                  value={searchData?.origin}
                  onChange={(e) => handleInputChange('origin', e?.target?.value)}
                  className="bg-white/90 text-gray-900"
                />
                <Icon name="MapPin" size={18} className="absolute right-3 top-9 text-gray-500" />
              </div>
              
              <div className="relative">
                <Input
                  label="Destino"
                  type="text"
                  placeholder="LAX, Los Angeles"
                  value={searchData?.destination}
                  onChange={(e) => handleInputChange('destination', e?.target?.value)}
                  className="bg-white/90 text-gray-900"
                />
                <Icon name="MapPin" size={18} className="absolute right-3 top-9 text-gray-500" />
              </div>
              
              <div className="relative">
                <Input
                  label="Fecha"
                  type="date"
                  value={searchData?.date}
                  onChange={(e) => handleInputChange('date', e?.target?.value)}
                  className="bg-white/90 text-gray-900"
                />
              </div>
            </div>

            <div className="text-center mb-6">
              <Link to="/reliability-search-engine">
                <Button 
                  variant="default" 
                  size="lg" 
                  iconName="Search" 
                  iconPosition="left"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
                >
                  Analizar Confiabilidad
                </Button>
              </Link>
            </div>

            {/* Quick Search Routes */}
            <div className="border-t border-white/20 pt-6">
              <p className="text-sm text-blue-200 mb-3 text-center">Rutas populares:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {popularRoutes?.map((route, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickSearch(route)}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-blue-100 transition-all duration-200 border border-white/20 hover:border-white/40"
                  >
                    {route?.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;