import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AirlineResultCard = ({ airline, rank, onViewDetails, onSetAlert }) => {
  const getRankBadgeColor = (rank) => {
    switch (rank) {
      case 1: return 'bg-success text-success-foreground';
      case 2: return 'bg-secondary text-secondary-foreground';
      case 3: return 'bg-accent text-accent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getReliabilityColor = (score) => {
    if (score >= 90) return 'text-success';
    if (score >= 80) return 'text-secondary';
    if (score >= 70) return 'text-accent';
    return 'text-error';
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
      case 'up': return 'text-success';
      case 'down': return 'text-error';
      default: return 'text-muted-foreground';
    }
  };

  const getConfidenceLevel = (sampleSize) => {
    if (sampleSize >= 100) return { level: 'Alta', color: 'text-success' };
    if (sampleSize >= 50) return { level: 'Media', color: 'text-accent' };
    return { level: 'Baja', color: 'text-error' };
  };

  const confidence = getConfidenceLevel(airline?.sampleSize);

  return (
    <div className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow duration-200 data-elevation">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getRankBadgeColor(rank)}`}>
            {rank}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{airline?.name}</h3>
            <p className="text-sm text-muted-foreground">{airline?.code}</p>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-2xl font-bold ${getReliabilityColor(airline?.reliabilityScore)}`}>
            {airline?.reliabilityScore}%
          </div>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Icon 
              name={getTrendIcon(airline?.trend)} 
              size={14} 
              className={getTrendColor(airline?.trend)}
            />
            <span>Tendencia</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="text-center">
          <div className="text-lg font-semibold text-foreground">{airline?.onTimePercentage}%</div>
          <div className="text-xs text-muted-foreground">Puntualidad</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-foreground">{airline?.avgDelay}min</div>
          <div className="text-xs text-muted-foreground">Retraso Promedio</div>
        </div>
        <div className="text-center">
          <div className={`text-lg font-semibold ${confidence?.color}`}>{confidence?.level}</div>
          <div className="text-xs text-muted-foreground">Confianza</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-foreground">{airline?.sampleSize}</div>
          <div className="text-xs text-muted-foreground">Vuelos</div>
        </div>
      </div>
      {airline?.seasonalNote && (
        <div className="bg-muted rounded-lg p-3 mb-4">
          <div className="flex items-start space-x-2">
            <Icon name="Info" size={16} className="text-secondary mt-0.5" />
            <div>
              <p className="text-sm font-medium text-foreground">Nota Estacional</p>
              <p className="text-sm text-muted-foreground">{airline?.seasonalNote}</p>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-2">
        <Button
          variant="outline"
          size="sm"
          fullWidth
          iconName="BarChart3"
          iconPosition="left"
          onClick={() => onViewDetails(airline)}
        >
          Ver Análisis
        </Button>
        <Button
          variant="ghost"
          size="sm"
          fullWidth
          iconName="Bell"
          iconPosition="left"
          onClick={() => onSetAlert(airline)}
        >
          Crear Alerta
        </Button>
      </div>
    </div>
  );
};

export default AirlineResultCard;