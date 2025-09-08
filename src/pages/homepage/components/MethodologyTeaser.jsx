import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MethodologyTeaser = () => {
  const methodologySteps = [
    {
      id: 1,
      icon: 'Database',
      title: 'Recopilación de Datos',
      description: 'Analizamos más de 50,000 vuelos diarios de múltiples fuentes oficiales',
      metrics: ['AENA', 'Eurocontrol', 'IATA', 'Aerolíneas']
    },
    {
      id: 2,
      icon: 'BarChart3',
      title: 'Análisis OTP15',
      description: 'Calculamos la puntualidad usando el estándar internacional OTP15',
      metrics: ['≤15 min = A tiempo', 'Baseline histórico', 'Factores climáticos']
    },
    {
      id: 3,
      icon: 'Target',
      title: 'Puntuación de Confiabilidad',
      description: 'Generamos scores de 0-100 basados en múltiples variables',
      metrics: ['Puntualidad', 'Consistencia', 'Tendencias']
    },
    {
      id: 4,
      icon: 'Shield',
      title: 'Validación Continua',
      description: 'Verificamos la precisión de nuestras predicciones constantemente',
      metrics: ['95% precisión', 'Actualización 15min', 'Auditoría mensual']
    }
  ];

  const trustIndicators = [
    { label: 'Fuentes de datos verificadas', value: '12+', icon: 'CheckCircle' },
    { label: 'Precisión en predicciones', value: '95%', icon: 'Target' },
    { label: 'Actualizaciones diarias', value: '96', icon: 'RefreshCw' },
    { label: 'Rutas monitoreadas', value: '500+', icon: 'MapPin' }
  ];

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Metodología Transparente y Confiable
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descubre cómo transformamos datos complejos de aviación en insights accionables que puedes confiar
          </p>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trustIndicators?.map((indicator, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="flex items-center justify-center mb-2">
                  <Icon name={indicator?.icon} size={24} className="text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{indicator?.value}</div>
                <div className="text-sm text-gray-600">{indicator?.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {methodologySteps?.map((step, index) => (
            <div key={step?.id} className="relative">
              {/* Connection Line */}
              {index < methodologySteps?.length - 1 && (
                <div className="hidden xl:block absolute top-12 left-full w-8 h-0.5 bg-blue-200 z-0"></div>
              )}
              
              <div className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 data-elevation">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step?.id}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={step?.icon} size={24} className="text-blue-600" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step?.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {step?.description}
                </p>

                {/* Metrics */}
                <div className="space-y-2">
                  {step?.metrics?.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-xs text-gray-500">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Visualization Preview */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Visualización de Datos en Tiempo Real
            </h3>
            <p className="text-gray-600">
              Ejemplo de cómo presentamos los datos de confiabilidad
            </p>
          </div>

          {/* Mock Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Reliability Trend */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Icon name="TrendingUp" size={20} className="text-green-500 mr-2" />
                Tendencia de Confiabilidad - Iberia MAD→BCN
              </h4>
              <div className="h-32 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-end justify-between p-4">
                {[85, 88, 92, 89, 94, 91, 96]?.map((value, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="bg-green-500 rounded-t w-4 mb-2"
                      style={{ height: `${(value / 100) * 80}px` }}
                    ></div>
                    <span className="text-xs text-gray-600">{value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Icon name="BarChart3" size={20} className="text-blue-500 mr-2" />
                Métricas de Rendimiento
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Puntualidad (OTP15)</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">89%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Consistencia</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-5/6 h-full bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Confianza del Modelo</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-purple-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/methodology-transparency-center">
            <Button 
              variant="outline" 
              size="lg" 
              iconName="FileText" 
              iconPosition="right"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold mr-4"
            >
              Ver Metodología Completa
            </Button>
          </Link>
          <Link to="/interactive-route-analytics">
            <Button 
              variant="default" 
              size="lg" 
              iconName="BarChart3" 
              iconPosition="right"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Explorar Analytics
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MethodologyTeaser;