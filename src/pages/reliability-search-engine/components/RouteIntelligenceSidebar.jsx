import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RouteIntelligenceSidebar = ({ routeData, isVisible, onToggle }) => {
  const [activeTab, setActiveTab] = useState('trends');

  const tabs = [
    { id: 'trends', label: 'Tendencias', icon: 'TrendingUp' },
    { id: 'seasonal', label: 'Estacional', icon: 'Calendar' },
    { id: 'forecast', label: 'Pronóstico', icon: 'Zap' }
  ];

  if (!routeData) return null;

  return (
    <div className={`fixed right-0 top-16 h-full bg-card border-l border-border shadow-lg transform transition-transform duration-300 z-40 ${
      isVisible ? 'translate-x-0' : 'translate-x-full'
    } w-80 lg:w-96`}>
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">Inteligencia de Ruta</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
        >
          <Icon name="X" size={20} />
        </Button>
      </div>
      <div className="flex border-b border-border">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium transition-colors ${
              activeTab === tab?.id
                ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
      <div className="p-4 overflow-y-auto h-full">
        {activeTab === 'trends' && (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-foreground mb-3">Tendencias Históricas</h4>
              <div className="space-y-3">
                {routeData?.historicalTrends?.map((trend, index) => (
                  <div key={index} className="bg-muted rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{trend?.period}</span>
                      <div className={`flex items-center space-x-1 ${
                        trend?.change > 0 ? 'text-success' : trend?.change < 0 ? 'text-error' : 'text-muted-foreground'
                      }`}>
                        <Icon 
                          name={trend?.change > 0 ? 'TrendingUp' : trend?.change < 0 ? 'TrendingDown' : 'Minus'} 
                          size={14} 
                        />
                        <span className="text-sm font-medium">{Math.abs(trend?.change)}%</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{trend?.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-3">Factores de Impacto</h4>
              <div className="space-y-2">
                {routeData?.impactFactors?.map((factor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      factor?.impact === 'high' ? 'bg-error' : 
                      factor?.impact === 'medium' ? 'bg-accent' : 'bg-success'
                    }`} />
                    <span className="text-sm text-foreground">{factor?.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'seasonal' && (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-foreground mb-3">Patrones Estacionales</h4>
              <div className="space-y-3">
                {routeData?.seasonalPatterns?.map((pattern, index) => (
                  <div key={index} className="bg-muted rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{pattern?.season}</span>
                      <span className={`text-sm font-medium ${getReliabilityColor(pattern?.reliability)}`}>
                        {pattern?.reliability}%
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{pattern?.description}</p>
                    <div className="mt-2 flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>Vuelos: {pattern?.flightCount}</span>
                      <span>Retraso: {pattern?.avgDelay}min</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
              <div className="flex items-start space-x-2">
                <Icon name="Lightbulb" size={16} className="text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-primary">Recomendación</p>
                  <p className="text-sm text-foreground">{routeData?.seasonalRecommendation}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'forecast' && (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-foreground mb-3">Pronóstico de Confiabilidad</h4>
              <div className="space-y-3">
                {routeData?.forecast?.map((forecast, index) => (
                  <div key={index} className="bg-muted rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{forecast?.timeframe}</span>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-medium ${getReliabilityColor(forecast?.predictedReliability)}`}>
                          {forecast?.predictedReliability}%
                        </span>
                        <div className={`w-2 h-2 rounded-full ${
                          forecast?.confidence === 'high' ? 'bg-success' : 
                          forecast?.confidence === 'medium' ? 'bg-accent' : 'bg-error'
                        }`} />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{forecast?.factors}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent/5 rounded-lg p-3 border border-accent/20">
              <div className="flex items-start space-x-2">
                <Icon name="AlertTriangle" size={16} className="text-accent mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-accent">Alerta de Tendencia</p>
                  <p className="text-sm text-foreground">{routeData?.trendAlert}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  function getReliabilityColor(score) {
    if (score >= 90) return 'text-success';
    if (score >= 80) return 'text-secondary';
    if (score >= 70) return 'text-accent';
    return 'text-error';
  }
};

export default RouteIntelligenceSidebar;