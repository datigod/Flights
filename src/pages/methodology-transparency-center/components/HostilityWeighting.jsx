import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const HostilityWeighting = () => {
  const [selectedFactor, setSelectedFactor] = useState('weather');

  const hostilityFactors = [
    {
      id: 'weather',
      name: 'Weather Conditions',
      icon: 'Cloud',
      weight: '0.15 - 0.45',
      description: 'Seasonal weather patterns affecting route difficulty',
      details: `Weather hostility considers multiple meteorological factors that impact flight operations:
      
• Wind patterns and jet stream variations
• Seasonal storm frequency and intensity
• Visibility conditions and fog patterns
• Temperature extremes affecting aircraft performance
• Precipitation levels and winter weather events

Routes through challenging weather zones receive higher hostility weights, acknowledging the increased difficulty of maintaining on-time performance.`,
      examples: [
        'Madrid-London (Winter): +0.25 hostility weight',
        'Barcelona-Rome (Summer storms): +0.18 hostility weight',
        'Bilbao-Paris (Fog season): +0.32 hostility weight'
      ]
    },
    {
      id: 'traffic',
      name: 'Air Traffic Density',
      icon: 'Plane',
      weight: '0.08 - 0.28',
      description: 'Congestion levels at origin and destination airports',
      details: `Air traffic density measures the operational complexity of airport pairs:

• Peak hour traffic volumes and slot restrictions
• Airport capacity constraints and runway limitations
• Air traffic control complexity and routing restrictions
• Seasonal traffic variations and holiday impacts
• Hub airport connection complexities

High-density routes face increased delays due to congestion, warranting adjusted performance expectations.`,
      examples: [
        'Madrid-Barcelona (Peak hours): +0.22 hostility weight',
        'Palma-Madrid (Summer): +0.35 hostility weight',
        'Valencia-Bilbao (Low density): +0.05 hostility weight'
      ]
    },
    {
      id: 'distance',
      name: 'Route Distance',
      icon: 'MapPin',
      weight: '0.05 - 0.20',
      description: 'Flight duration impact on delay propagation',
      details: `Route distance affects delay accumulation and recovery opportunities:

• Short routes have limited time for delay recovery
• Long routes face increased exposure to weather systems
• International routes involve additional regulatory complexity
• Connection timing impacts for hub operations
• Fuel planning considerations for extended routes

Distance-based weighting ensures fair comparison across route types.`,
      examples: [
        'Madrid-Seville (Short): +0.12 hostility weight',
        'Madrid-Canary Islands (Long): +0.08 hostility weight',
        'Barcelona-Valencia (Regional): +0.15 hostility weight'
      ]
    },
    {
      id: 'operational',
      name: 'Operational Complexity',
      icon: 'Settings',
      weight: '0.10 - 0.35',
      description: 'Airport infrastructure and operational challenges',
      details: `Operational complexity encompasses infrastructure and procedural factors:

• Airport infrastructure limitations and modernization status
• Ground handling efficiency and resource availability
• Customs and security processing times for international routes
• Airline operational base advantages and crew positioning
• Maintenance facility availability and technical support

Complex operational environments receive higher hostility weights to account for systemic challenges.`,
      examples: [
        'Regional airports: +0.28 hostility weight',
        'Major hub airports: +0.15 hostility weight',
        'International routes: +0.20 hostility weight'
      ]
    }
  ];

  const selectedFactorData = hostilityFactors?.find(factor => factor?.id === selectedFactor);

  return (
    <div className="bg-card rounded-xl border border-border p-8 mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center">
          <Icon name="Zap" size={24} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Hostility Weighting Factors</h2>
          <p className="text-muted-foreground">Understanding route difficulty adjustments</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-foreground mb-4">Factor Categories</h3>
          <div className="space-y-2">
            {hostilityFactors?.map((factor) => (
              <button
                key={factor?.id}
                onClick={() => setSelectedFactor(factor?.id)}
                className={`w-full flex items-center space-x-3 p-4 rounded-lg border transition-all ${
                  selectedFactor === factor?.id
                    ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-muted-foreground text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={factor?.icon} size={20} />
                <div className="text-left">
                  <div className="font-medium">{factor?.name}</div>
                  <div className="text-xs opacity-70">Weight: {factor?.weight}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          {selectedFactorData && (
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name={selectedFactorData?.icon} size={24} color="var(--color-primary)" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{selectedFactorData?.name}</h3>
                  <p className="text-muted-foreground">{selectedFactorData?.description}</p>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-foreground mb-3">Detailed Analysis</h4>
                <div className="text-sm text-foreground whitespace-pre-line">
                  {selectedFactorData?.details}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Example Applications</h4>
                <div className="space-y-3">
                  {selectedFactorData?.examples?.map((example, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <Icon name="ArrowRight" size={16} color="var(--color-accent)" />
                      <span className="text-sm text-foreground">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HostilityWeighting;