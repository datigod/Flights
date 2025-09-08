import React from 'react';
import Icon from '../../../components/AppIcon';

const SocialProof = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos Mendoza',
      role: 'Director de Viajes Corporativos',
      company: 'Banco Santander',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: `AirlineReliability Pro ha transformado cómo gestionamos los viajes de nuestros ejecutivos. La precisión de sus predicciones nos ha ahorrado miles de euros en retrasos y conexiones perdidas.`,
      rating: 5,
      route: 'MAD → LHR'
    },
    {
      id: 2,
      name: 'María García',
      role: 'Consultora Senior',
      company: 'McKinsey & Company',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      content: `Como consultora que viaja constantemente, necesito llegar a tiempo a mis reuniones. Esta plataforma me da la confianza de elegir la aerolínea más confiable para cada ruta.`,
      rating: 5,
      route: 'BCN → CDG'
    },
    {
      id: 3,
      name: 'Alejandro Ruiz',
      role: 'Agente de Viajes',
      company: 'Halcón Viajes',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: `Mis clientes valoran la puntualidad por encima del precio. Con AirlineReliability Pro puedo ofrecer recomendaciones basadas en datos reales, no solo en tarifas.`,
      rating: 5,
      route: 'MAD → BCN'
    }
  ];

  const stats = [
    {
      value: '50,000+',
      label: 'Vuelos analizados diariamente',
      icon: 'Plane'
    },
    {
      value: '95%',
      label: 'Precisión en predicciones',
      icon: 'Target'
    },
    {
      value: '500+',
      label: 'Rutas monitoreadas',
      icon: 'MapPin'
    },
    {
      value: '12+',
      label: 'Fuentes de datos oficiales',
      icon: 'Database'
    }
  ];

  const partners = [
    { name: 'AENA', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center' },
    { name: 'IATA', logo: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=120&h=60&fit=crop&crop=center' },
    { name: 'Eurocontrol', logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=120&h=60&fit=crop&crop=center' },
    { name: 'ICAO', logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=60&fit=crop&crop=center' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Confianza Respaldada por Datos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Miles de profesionales confían en nuestros análisis para tomar decisiones de viaje informadas
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat?.icon} size={28} className="text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 confidence-counter">
                  {stat?.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Lo que dicen nuestros usuarios
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) => (
              <div key={testimonial?.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial?.rating)}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial?.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <img 
                      src={testimonial?.avatar} 
                      alt={testimonial?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{testimonial?.name}</div>
                    <div className="text-sm text-gray-600">{testimonial?.role}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial?.company}</div>
                  </div>
                  <div className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">
                    {testimonial?.route}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-lg font-semibold text-gray-900 text-center mb-8">
            Fuentes de datos oficiales y partners
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners?.map((partner, index) => (
              <div key={index} className="flex items-center justify-center h-12 w-24 grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={partner?.logo} 
                  alt={`${partner?.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={16} className="text-green-500" />
            <span>Datos verificados</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Lock" size={16} className="text-blue-500" />
            <span>Conexión segura</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="RefreshCw" size={16} className="text-purple-500" />
            <span>Actualización continua</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Award" size={16} className="text-amber-500" />
            <span>Certificado IATA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;