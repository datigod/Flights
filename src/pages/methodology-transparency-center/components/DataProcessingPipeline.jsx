import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const DataProcessingPipeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineSteps = [
    {
      id: 'collection',
      title: 'Data Collection',
      icon: 'Database',
      description: 'Raw flight data ingestion from multiple sources',
      details: `Our data collection system operates 24/7, gathering flight information from:

• Aviation authority feeds (FAA, EASA, DGAC)
• Airline operational systems via APIs
• Airport ground truth systems
• Weather service integrations
• ATC delay reporting systems

Data is collected in real-time with 5-minute update intervals for operational data and hourly updates for weather information.`,
      metrics: [
        { label: 'Data Points/Day', value: '2.8M' },
        { label: 'Sources', value: '450+' },
        { label: 'Update Frequency', value: '5min' },
        { label: 'Coverage', value: '99.7%' }
      ]
    },
    {
      id: 'validation',
      title: 'Data Validation',
      icon: 'CheckCircle',
      description: 'Quality assurance and anomaly detection',
      details: `Every data point undergoes rigorous validation:

• Timestamp consistency checks
• Cross-reference validation between sources
• Outlier detection and flagging
• Missing data interpolation
• Duplicate record elimination
• Format standardization

Suspicious data points are flagged for manual review, ensuring only high-quality information enters our analysis pipeline.`,
      metrics: [
        { label: 'Validation Rules', value: '47' },
        { label: 'Accuracy Rate', value: '99.2%' },
        { label: 'Processing Time', value: '<30s' },
        { label: 'Error Detection', value: '0.3%' }
      ]
    },
    {
      id: 'normalization',
      title: 'Data Normalization',
      icon: 'Settings',
      description: 'Standardization and timezone conversion',
      details: `Raw data is normalized for consistent analysis:

• UTC timezone conversion for all timestamps
• IATA/ICAO code standardization
• Aircraft type classification
• Route distance calculations
• Seasonal period assignments
• Holiday and special event flagging

This ensures all data points are comparable regardless of source or geographic location.`,
      metrics: [
        { label: 'Time Zones', value: '24' },
        { label: 'Airport Codes', value: '4,500+' },
        { label: 'Aircraft Types', value: '280' },
        { label: 'Route Variants', value: '12K+' }
      ]
    },
    {
      id: 'enrichment',
      title: 'Data Enrichment',
      icon: 'Plus',
      description: 'Adding contextual information and metadata',
      details: `Each flight record is enriched with additional context:

• Weather conditions at departure/arrival
• Airport congestion levels
• Historical performance baselines
• Seasonal adjustment factors
• Holiday and event impacts
• Aircraft age and maintenance history

This enrichment provides the foundation for accurate hostility weighting and performance analysis.`,
      metrics: [
        { label: 'Weather Points', value: '1,200' },
        { label: 'Congestion Metrics', value: '450' },
        { label: 'Historical Depth', value: '5 years' },
        { label: 'Context Factors', value: '25+' }
      ]
    },
    {
      id: 'analysis',
      title: 'Statistical Analysis',
      icon: 'BarChart3',
      description: 'OTP15 calculation and hostility weighting',
      details: `The core analysis engine processes enriched data:

• OTP15 score calculation (15-minute tolerance)
• Hostility weight determination
• Baseline performance comparison
• Confidence interval calculation
• Trend analysis and forecasting
• Comparative ranking generation

Advanced statistical methods ensure accurate and reliable performance metrics.`,
      metrics: [
        { label: 'Calculations/Hour', value: '50K' },
        { label: 'Statistical Models', value: '12' },
        { label: 'Confidence Level', value: '95%' },
        { label: 'Update Latency', value: '15min' }
      ]
    },
    {
      id: 'output',
      title: 'Results Output',
      icon: 'Send',
      description: 'API delivery and user interface updates',
      details: `Processed results are delivered through multiple channels:

• Real-time API endpoints for live data
• Batch exports for historical analysis
• Dashboard updates for visual monitoring
• Alert system for significant changes
• Mobile app synchronization
• Third-party integrations

All outputs maintain data integrity and include appropriate metadata for context.`,
      metrics: [
        { label: 'API Calls/Day', value: '125K' },
        { label: 'Response Time', value: '<200ms' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'Data Freshness', value: '15min' }
      ]
    }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-8 mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
          <Icon name="GitBranch" size={24} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Data Processing Pipeline</h2>
          <p className="text-muted-foreground">From raw flight data to reliability metrics</p>
        </div>
      </div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {pipelineSteps?.map((step, index) => (
            <React.Fragment key={step?.id}>
              <button
                onClick={() => setActiveStep(index)}
                className={`flex flex-col items-center space-y-2 p-3 rounded-lg transition-all ${
                  activeStep === index
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activeStep === index ? 'bg-primary-foreground/20' : 'bg-muted'
                }`}>
                  <Icon name={step?.icon} size={20} />
                </div>
                <span className="text-xs font-medium text-center">{step?.title}</span>
              </button>
              {index < pipelineSteps?.length - 1 && (
                <div className="flex-1 h-0.5 bg-border mx-2"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-muted rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name={pipelineSteps?.[activeStep]?.icon} size={24} color="var(--color-primary)" />
              <div>
                <h3 className="text-xl font-semibold text-foreground">{pipelineSteps?.[activeStep]?.title}</h3>
                <p className="text-muted-foreground">{pipelineSteps?.[activeStep]?.description}</p>
              </div>
            </div>
            <div className="text-sm text-foreground whitespace-pre-line">
              {pipelineSteps?.[activeStep]?.details}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Key Metrics</h3>
          <div className="space-y-4">
            {pipelineSteps?.[activeStep]?.metrics?.map((metric, index) => (
              <div key={index} className="bg-muted rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">{metric?.value}</div>
                <div className="text-sm text-muted-foreground">{metric?.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProcessingPipeline;