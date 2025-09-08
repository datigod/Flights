import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const BaselineCalculations = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const calculationSteps = [
    {
      step: 1,
      title: 'Historical Data Collection',
      description: 'Gather 12 months of flight performance data for each route',
      details: 'We collect comprehensive flight data including scheduled vs actual departure/arrival times, weather conditions, and operational factors for a rolling 12-month period.'
    },
    {
      step: 2,
      title: 'Route Segmentation',
      description: 'Categorize routes by distance, traffic density, and complexity',
      details: 'Routes are classified into categories: Short-haul (<1,500km), Medium-haul (1,500-4,000km), and Long-haul (>4,000km) with additional complexity factors.'
    },
    {
      step: 3,
      title: 'Seasonal Adjustment',
      description: 'Apply seasonal weighting factors based on historical patterns',
      details: 'Winter months receive higher difficulty weights due to weather impacts, while summer adjustments account for increased traffic and thunderstorm patterns.'
    },
    {
      step: 4,
      title: 'Baseline Establishment',
      description: 'Calculate route-specific performance baselines',
      details: 'Each route gets a baseline OTP15 score representing expected performance under normal conditions, accounting for inherent route characteristics.'
    }
  ];

  const formulaExamples = [
    {
      name: 'Basic OTP15 Score',
      formula: 'OTP15 = (On-time arrivals ≤ 15min) / Total flights × 100',
      example: 'Example: 847 on-time / 900 total = 94.1%'
    },
    {
      name: 'Hostility-Adjusted Score',
      formula: 'Adjusted OTP15 = Basic OTP15 × (1 + Hostility Factor)',
      example: 'Example: 94.1% × (1 + 0.15) = 108.2%'
    },
    {
      name: 'Confidence Interval',
      formula: 'CI = Score ± (1.96 × √(p(1-p)/n))',
      example: 'Example: 94.1% ± 2.1% (95% confidence)'
    }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-8 mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
          <Icon name="Calculator" size={24} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Baseline Calculations</h2>
          <p className="text-muted-foreground">How we establish route performance baselines</p>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex space-x-1 bg-muted rounded-lg p-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'overview' ?'bg-card text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('formulas')}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'formulas'
                ? 'bg-card text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
            }`}
          >
            Formulas
          </button>
        </div>
      </div>
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {calculationSteps?.map((step) => (
            <div key={step?.step} className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step?.step}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">{step?.title}</h3>
                <p className="text-muted-foreground mb-3">{step?.description}</p>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm text-foreground">{step?.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === 'formulas' && (
        <div className="space-y-6">
          {formulaExamples?.map((formula, index) => (
            <div key={index} className="border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">{formula?.name}</h3>
              <div className="bg-muted rounded-lg p-4 mb-4">
                <code className="text-sm font-mono text-foreground">{formula?.formula}</code>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Calculator" size={16} color="var(--color-accent)" />
                <span className="text-sm text-muted-foreground">{formula?.example}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BaselineCalculations;