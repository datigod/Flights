import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DataSourcesSection = () => {
  const [expandedSource, setExpandedSource] = useState(null);

  const dataSources = [
    {
      id: 'aviation-authorities',
      name: 'Aviation Authorities',
      description: 'Official flight data from national aviation regulatory bodies',
      coverage: '95% of global flights',
      updateFrequency: 'Real-time',
      partners: ['FAA (United States)', 'EASA (European Union)', 'DGAC (Spain)', 'CAA (United Kingdom)'],
      dataTypes: ['Departure times', 'Arrival times', 'Flight status', 'Cancellations']
    },
    {
      id: 'airline-apis',
      name: 'Airline APIs',
      description: 'Direct integration with airline operational systems',
      coverage: '78% of major carriers',
      updateFrequency: '5-minute intervals',
      partners: ['Iberia', 'Vueling', 'Air Europa', 'Ryanair', 'Lufthansa Group'],
      dataTypes: ['Schedule changes', 'Gate information', 'Aircraft assignments', 'Crew updates']
    },
    {
      id: 'airport-systems',
      name: 'Airport Systems',
      description: 'Ground truth data from airport operational databases',
      coverage: '450+ airports worldwide',
      updateFrequency: 'Real-time',
      partners: ['AENA (Spain)', 'Heathrow', 'Charles de Gaulle', 'Frankfurt'],
      dataTypes: ['Actual departure/arrival', 'Gate assignments', 'Weather conditions', 'Ground delays']
    },
    {
      id: 'weather-services',
      name: 'Weather Services',
      description: 'Meteorological data for route hostility calculations',
      coverage: 'Global coverage',
      updateFrequency: 'Hourly updates',
      partners: ['AEMET', 'ECMWF', 'NOAA', 'Met Office'],
      dataTypes: ['Wind patterns', 'Visibility', 'Precipitation', 'Temperature']
    }
  ];

  const toggleExpanded = (sourceId) => {
    setExpandedSource(expandedSource === sourceId ? null : sourceId);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-8 mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
          <Icon name="Database" size={24} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Data Sources & Partnerships</h2>
          <p className="text-muted-foreground">Comprehensive data collection from trusted aviation partners</p>
        </div>
      </div>
      <div className="space-y-4">
        {dataSources?.map((source) => (
          <div key={source?.id} className="border border-border rounded-lg overflow-hidden">
            <div 
              className="p-6 cursor-pointer hover:bg-muted transition-colors"
              onClick={() => toggleExpanded(source?.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Server" size={20} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{source?.name}</h3>
                    <p className="text-muted-foreground">{source?.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm font-medium text-foreground">{source?.coverage}</div>
                    <div className="text-xs text-muted-foreground">{source?.updateFrequency}</div>
                  </div>
                  <Icon 
                    name="ChevronDown" 
                    size={20} 
                    className={`transform transition-transform ${expandedSource === source?.id ? 'rotate-180' : ''}`}
                  />
                </div>
              </div>
            </div>

            {expandedSource === source?.id && (
              <div className="px-6 pb-6 border-t border-border bg-muted/30">
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Partners</h4>
                    <div className="space-y-2">
                      {source?.partners?.map((partner, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="Check" size={16} color="var(--color-success)" />
                          <span className="text-sm text-foreground">{partner}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Data Types</h4>
                    <div className="space-y-2">
                      {source?.dataTypes?.map((type, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="Database" size={16} color="var(--color-secondary)" />
                          <span className="text-sm text-foreground">{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataSourcesSection;