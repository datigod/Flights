import React from 'react';
import Icon from '../../../components/AppIcon';
import AirlineResultCard from './AirlineResultCard';

const SearchResults = ({ results, searchQuery, onViewDetails, onSetAlert, onShowRouteIntelligence }) => {
  if (!results || results?.length === 0) {
    return (
      <div className="bg-card rounded-xl border border-border p-8 text-center">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Search" size={24} className="text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Sin Resultados</h3>
        <p className="text-muted-foreground">
          No se encontraron aerolíneas para los criterios de búsqueda especificados.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Search Summary */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              Resultados de Búsqueda
            </h2>
            <p className="text-muted-foreground">
              {searchQuery?.origin} → {searchQuery?.destination} • {new Date(searchQuery.date)?.toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-right">
              <div className="text-sm font-medium text-foreground">{results?.length} aerolíneas</div>
              <div className="text-xs text-muted-foreground">encontradas</div>
            </div>
            <button
              onClick={onShowRouteIntelligence}
              className="p-2 rounded-lg border border-border hover:bg-muted transition-colors"
              title="Ver inteligencia de ruta"
            >
              <Icon name="BarChart3" size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-lg font-semibold text-success">
              {Math.max(...results?.map(r => r?.reliabilityScore))}%
            </div>
            <div className="text-xs text-muted-foreground">Mejor Confiabilidad</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-lg font-semibold text-foreground">
              {Math.round(results?.reduce((acc, r) => acc + r?.reliabilityScore, 0) / results?.length)}%
            </div>
            <div className="text-xs text-muted-foreground">Promedio Ruta</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-lg font-semibold text-foreground">
              {Math.min(...results?.map(r => r?.avgDelay))}min
            </div>
            <div className="text-xs text-muted-foreground">Menor Retraso</div>
          </div>
          <div className="text-center p-3 bg-muted rounded-lg">
            <div className="text-lg font-semibold text-foreground">
              {results?.reduce((acc, r) => acc + r?.sampleSize, 0)}
            </div>
            <div className="text-xs text-muted-foreground">Total Vuelos</div>
          </div>
        </div>
      </div>
      {/* Top 3 Airlines */}
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Icon name="Trophy" size={16} color="white" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Top 3 Aerolíneas Más Confiables</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {results?.slice(0, 3)?.map((airline, index) => (
            <AirlineResultCard
              key={airline?.id}
              airline={airline}
              rank={index + 1}
              onViewDetails={onViewDetails}
              onSetAlert={onSetAlert}
            />
          ))}
        </div>
      </div>
      {/* Additional Airlines */}
      {results?.length > 3 && (
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <Icon name="Plane" size={16} color="white" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Otras Opciones</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {results?.slice(3)?.map((airline, index) => (
              <AirlineResultCard
                key={airline?.id}
                airline={airline}
                rank={index + 4}
                onViewDetails={onViewDetails}
                onSetAlert={onSetAlert}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;