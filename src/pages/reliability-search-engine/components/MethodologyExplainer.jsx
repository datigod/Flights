import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MethodologyExplainer = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const methodologyItems = [
    {
      id: 'otp15',
      title: 'Cálculo OTP15',
      icon: 'Clock',
      description: 'Porcentaje de vuelos que llegan dentro de 15 minutos de la hora programada',
      details: `Nuestro sistema calcula la puntualidad basándose en el estándar internacional OTP15 (On-Time Performance 15 minutos).\n\nEsto significa que un vuelo se considera puntual si llega dentro de los 15 minutos posteriores a su hora programada de llegada.\n\nEste estándar es utilizado por la mayoría de autoridades de aviación mundial y proporciona una medida realista de la confiabilidad operacional.`
    },
    {
      id: 'baseline',
      title: 'Comparación de Línea Base',
      icon: 'BarChart3',
      description: 'Comparación con el rendimiento histórico promedio de la ruta',
      details: `Cada puntuación de confiabilidad se compara con la línea base histórica de la ruta específica.\n\nEsto permite identificar aerolíneas que superan consistentemente el rendimiento promedio de la ruta.\n\nLa línea base se calcula usando datos de los últimos 12 meses, ajustada por estacionalidad y factores externos conocidos.`
    },
    {
      id: 'hostility',
      title: 'Ponderación de Hostilidad',
      icon: 'CloudSnow',
      description: 'Ajuste por condiciones operacionales adversas (clima, tráfico aéreo)',
      details: `Nuestro algoritmo ajusta las puntuaciones considerando factores de "hostilidad" de la ruta:\n\n• Condiciones meteorológicas históricas\n• Congestión del espacio aéreo\n• Complejidad operacional del aeropuerto\n• Factores estacionales conocidos\n\nEsto proporciona una evaluación más justa del rendimiento real de cada aerolínea.`
    },
    {
      id: 'confidence',
      title: 'Indicadores de Confianza',
      icon: 'Shield',
      description: 'Nivel de confianza basado en el tamaño de la muestra de datos',
      details: `Los indicadores de confianza reflejan la robustez estadística de nuestras puntuaciones:\n\n• Alta Confianza: 100+ vuelos en el período\n• Confianza Media: 50-99 vuelos\n• Baja Confianza: Menos de 50 vuelos\n\nMuestras más grandes proporcionan predicciones más confiables del rendimiento futuro.`
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
          <Icon name="FileText" size={20} color="white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">Metodología de Puntuación</h3>
          <p className="text-sm text-muted-foreground">Cómo calculamos la confiabilidad de las aerolíneas</p>
        </div>
      </div>
      <div className="space-y-3">
        {methodologyItems?.map((item) => (
          <div key={item?.id} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection(item?.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-muted transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={item?.icon} size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{item?.title}</h4>
                  <p className="text-sm text-muted-foreground">{item?.description}</p>
                </div>
              </div>
              <Icon 
                name="ChevronDown" 
                size={20} 
                className={`text-muted-foreground transition-transform duration-200 expand-icon ${
                  expandedSection === item?.id ? 'rotated' : ''
                }`}
              />
            </button>
            
            <div className={`methodology-unfold ${
              expandedSection === item?.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-4 pb-4">
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm text-foreground whitespace-pre-line">
                    {item?.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
          <div className="text-sm text-muted-foreground">
            ¿Quieres saber más sobre nuestra metodología?
          </div>
          <Button
            variant="outline"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
            className="magnetic-cta"
          >
            Ver Documentación Completa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MethodologyExplainer;