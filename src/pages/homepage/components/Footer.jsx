import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: 'Plataforma',
      links: [
        { name: 'Motor de Búsqueda', path: '/reliability-search-engine' },
        { name: 'Análisis de Rutas', path: '/interactive-route-analytics' },
        { name: 'Metodología', path: '/methodology-transparency-center' },
        { name: 'API Documentación', path: '#' }
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Centro de Ayuda', path: '#' },
        { name: 'Guías de Usuario', path: '#' },
        { name: 'Blog de Aviación', path: '#' },
        { name: 'Actualizaciones', path: '#' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nosotros', path: '#' },
        { name: 'Contacto', path: '#' },
        { name: 'Carreras', path: '#' },
        { name: 'Prensa', path: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Términos de Uso', path: '#' },
        { name: 'Política de Privacidad', path: '#' },
        { name: 'Cookies', path: '#' },
        { name: 'GDPR', path: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#' },
    { name: 'GitHub', icon: 'Github', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' }
  ];

  const certifications = [
    { name: 'IATA Certified', icon: 'Award' },
    { name: 'ISO 27001', icon: 'Shield' },
    { name: 'GDPR Compliant', icon: 'Lock' },
    { name: 'SOC 2 Type II', icon: 'CheckCircle' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/homepage" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Plane" size={24} color="white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">
                  AirlineReliability
                </span>
                <span className="text-sm font-medium text-blue-400 leading-tight">
                  Pro
                </span>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              La plataforma líder en análisis de confiabilidad de aerolíneas. Transformamos datos complejos de aviación en insights accionables para viajeros inteligentes.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-blue-400" />
                <span className="text-sm text-gray-300">info@airlinereliability.pro</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-blue-400" />
                <span className="text-sm text-gray-300">+1 800 555 1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-blue-400" />
                <span className="text-sm text-gray-300">New York, Estados Unidos</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections?.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">{section?.title}</h3>
              <ul className="space-y-3">
                {section?.links?.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link?.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-3">
              Mantente Informado
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Recibe alertas de confiabilidad y análisis de tendencias directamente en tu email.
            </p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                <Icon name="Send" size={16} />
                <span>Suscribir</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} AirlineReliability Pro. Todos los derechos reservados.
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-6">
              {certifications?.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs text-gray-400">
                  <Icon name={cert?.icon} size={14} className="text-green-400" />
                  <span>{cert?.name}</span>
                </div>
              ))}
            </div>

            {/* Data Update Status */}
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Datos actualizados hace 12 min</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;