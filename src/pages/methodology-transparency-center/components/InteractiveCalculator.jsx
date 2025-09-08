import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const InteractiveCalculator = () => {
  const [inputs, setInputs] = useState({
    onTimeFlights: 847,
    totalFlights: 900,
    weatherWeight: 0.15,
    trafficWeight: 0.12,
    distanceWeight: 0.08,
    operationalWeight: 0.10
  });

  const [results, setResults] = useState({
    basicOTP15: 0,
    totalHostility: 0,
    adjustedOTP15: 0,
    confidenceInterval: 0,
    reliabilityScore: ''
  });

  const routeOptions = [
    { value: 'mad-bcn', label: 'Madrid - Barcelona' },
    { value: 'mad-lpa', label: 'Madrid - Las Palmas' },
    { value: 'bcn-pmi', label: 'Barcelona - Palma' },
    { value: 'mad-svq', label: 'Madrid - Sevilla' },
    { value: 'bcn-vlc', label: 'Barcelona - Valencia' }
  ];

  const seasonOptions = [
    { value: 'winter', label: 'Winter (Dec-Feb)' },
    { value: 'spring', label: 'Spring (Mar-May)' },
    { value: 'summer', label: 'Summer (Jun-Aug)' },
    { value: 'autumn', label: 'Autumn (Sep-Nov)' }
  ];

  useEffect(() => {
    calculateResults();
  }, [inputs]);

  const calculateResults = () => {
    const basicOTP15 = (inputs?.onTimeFlights / inputs?.totalFlights) * 100;
    const totalHostility = inputs?.weatherWeight + inputs?.trafficWeight + inputs?.distanceWeight + inputs?.operationalWeight;
    const adjustedOTP15 = basicOTP15 * (1 + totalHostility);
    const confidenceInterval = 1.96 * Math.sqrt((basicOTP15/100 * (1 - basicOTP15/100)) / inputs?.totalFlights) * 100;
    
    let reliabilityScore = 'Poor';
    if (adjustedOTP15 >= 95) reliabilityScore = 'Excellent';
    else if (adjustedOTP15 >= 85) reliabilityScore = 'Good';
    else if (adjustedOTP15 >= 75) reliabilityScore = 'Fair';

    setResults({
      basicOTP15: basicOTP15?.toFixed(1),
      totalHostility: (totalHostility * 100)?.toFixed(1),
      adjustedOTP15: adjustedOTP15?.toFixed(1),
      confidenceInterval: confidenceInterval?.toFixed(1),
      reliabilityScore
    });
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const resetCalculator = () => {
    setInputs({
      onTimeFlights: 847,
      totalFlights: 900,
      weatherWeight: 0.15,
      trafficWeight: 0.12,
      distanceWeight: 0.08,
      operationalWeight: 0.10
    });
  };

  return (
    <div className="bg-card rounded-xl border border-border p-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
            <Icon name="Calculator" size={24} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Interactive OTP15 Calculator</h2>
            <p className="text-muted-foreground">Experiment with different variables to understand scoring</p>
          </div>
        </div>
        <Button variant="outline" onClick={resetCalculator} iconName="RotateCcw" iconPosition="left">
          Reset
        </Button>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Input Parameters</h3>
          
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <Select
                label="Route"
                options={routeOptions}
                placeholder="Select route"
                className="mb-0"
              />
              <Select
                label="Season"
                options={seasonOptions}
                placeholder="Select season"
                className="mb-0"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="On-time Flights"
                type="number"
                value={inputs?.onTimeFlights}
                onChange={(e) => handleInputChange('onTimeFlights', e?.target?.value)}
                className="mb-0"
              />
              <Input
                label="Total Flights"
                type="number"
                value={inputs?.totalFlights}
                onChange={(e) => handleInputChange('totalFlights', e?.target?.value)}
                className="mb-0"
              />
            </div>
          </div>

          <h4 className="font-semibold text-foreground mb-4">Hostility Weights</h4>
          <div className="space-y-4">
            <Input
              label="Weather Weight"
              type="number"
              step="0.01"
              min="0"
              max="1"
              value={inputs?.weatherWeight}
              onChange={(e) => handleInputChange('weatherWeight', e?.target?.value)}
              description="0.00 - 0.50 range"
              className="mb-0"
            />
            <Input
              label="Traffic Weight"
              type="number"
              step="0.01"
              min="0"
              max="1"
              value={inputs?.trafficWeight}
              onChange={(e) => handleInputChange('trafficWeight', e?.target?.value)}
              description="0.00 - 0.30 range"
              className="mb-0"
            />
            <Input
              label="Distance Weight"
              type="number"
              step="0.01"
              min="0"
              max="1"
              value={inputs?.distanceWeight}
              onChange={(e) => handleInputChange('distanceWeight', e?.target?.value)}
              description="0.00 - 0.20 range"
              className="mb-0"
            />
            <Input
              label="Operational Weight"
              type="number"
              step="0.01"
              min="0"
              max="1"
              value={inputs?.operationalWeight}
              onChange={(e) => handleInputChange('operationalWeight', e?.target?.value)}
              description="0.00 - 0.35 range"
              className="mb-0"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Calculated Results</h3>
          
          <div className="space-y-4">
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Basic OTP15 Score</span>
                <span className="text-xl font-bold text-primary">{results?.basicOTP15}%</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {inputs?.onTimeFlights} / {inputs?.totalFlights} flights on time
              </div>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Total Hostility</span>
                <span className="text-xl font-bold text-warning">+{results?.totalHostility}%</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Combined difficulty adjustment
              </div>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Adjusted OTP15</span>
                <span className="text-xl font-bold text-secondary">{results?.adjustedOTP15}%</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Hostility-weighted performance
              </div>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Confidence Interval</span>
                <span className="text-xl font-bold text-accent">±{results?.confidenceInterval}%</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                95% confidence level
              </div>
            </div>

            <div className={`rounded-lg p-4 ${
              results?.reliabilityScore === 'Excellent' ? 'bg-success/10 border border-success' :
              results?.reliabilityScore === 'Good' ? 'bg-secondary/10 border border-secondary' :
              results?.reliabilityScore === 'Fair'? 'bg-warning/10 border border-warning' : 'bg-error/10 border border-error'
            }`}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Reliability Grade</span>
                <span className={`text-xl font-bold ${
                  results?.reliabilityScore === 'Excellent' ? 'text-success' :
                  results?.reliabilityScore === 'Good' ? 'text-secondary' :
                  results?.reliabilityScore === 'Fair'? 'text-warning' : 'text-error'
                }`}>
                  {results?.reliabilityScore}
                </span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Based on adjusted performance
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="flex items-start space-x-2">
              <Icon name="Info" size={16} color="var(--color-primary)" className="mt-0.5" />
              <div className="text-sm text-foreground">
                <strong>Formula:</strong> Adjusted OTP15 = Basic OTP15 × (1 + Total Hostility Weight)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCalculator;