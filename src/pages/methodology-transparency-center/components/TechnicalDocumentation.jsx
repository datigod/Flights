import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnicalDocumentation = () => {
  const [activeSection, setActiveSection] = useState('statistical-methods');

  const documentationSections = [
    {
      id: 'statistical-methods',
      title: 'Statistical Methods',
      icon: 'BarChart3',
      content: {
        overview: 'Our reliability scoring employs advanced statistical techniques to ensure accurate and meaningful performance metrics.',
        sections: [
          {
            title: 'Confidence Interval Calculation',
            content: `We use the Wilson Score Interval for binomial proportions to calculate confidence intervals for OTP15 scores:

CI = (p̂ + z²/2n ± z√(p̂(1-p̂)/n + z²/4n²)) / (1 + z²/n)

Where:
• p̂ = observed proportion of on-time flights
• n = sample size (total flights)
• z = critical value (1.96 for 95% confidence)

This method provides more accurate intervals for small sample sizes compared to the normal approximation.`,
            codeExample: `// Wilson Score Interval Implementation
function calculateConfidenceInterval(onTimeFlights, totalFlights, confidence = 0.95) {
  const p = onTimeFlights / totalFlights;
  const z = 1.96; // 95% confidence
  const n = totalFlights;
  
  const center = p + (z * z) / (2 * n);
  const margin = z * Math.sqrt((p * (1 - p) + (z * z) / (4 * n)) / n);
  const denominator = 1 + (z * z) / n;
  
  return {
    lower: (center - margin) / denominator,
    upper: (center + margin) / denominator
  };
}`
          },
          {
            title: 'Sample Size Requirements',
            content: `Minimum sample sizes are enforced to ensure statistical significance:

• Routes with <30 flights: No reliability score published
• Routes with 30-100 flights: Wide confidence intervals displayed
• Routes with >100 flights: Standard confidence intervals
• Routes with >500 flights: High confidence scoring

This approach prevents misleading scores from insufficient data while maintaining transparency about uncertainty.`,
            codeExample: `// Sample Size Validation
function validateSampleSize(flightCount) {
  if (flightCount < 30) {
    return { valid: false, reason: 'Insufficient data' };
  } else if (flightCount < 100) {
    return { valid: true, confidence: 'low', interval: 'wide' };
  } else if (flightCount < 500) {
    return { valid: true, confidence: 'medium', interval: 'standard' };
  } else {
    return { valid: true, confidence: 'high', interval: 'narrow' };
  }
}`
          }
        ]
      }
    },
    {
      id: 'api-responses',
      title: 'API Response Examples',
      icon: 'Code',
      content: {
        overview: 'Complete API response structures for developer integration.',
        sections: [
          {
            title: 'Route Reliability Query',
            content: 'Standard response format for route reliability requests including all metadata and confidence metrics.',
            codeExample: `{
  "query": {
    "origin": "MAD",
    "destination": "BCN",
    "date": "2024-09-15",
    "airlines": ["IB", "VY", "UX"]
  },
  "results": [
    {
      "airline": {
        "iata": "IB",
        "name": "Iberia",
        "logo": "https://cdn.airlinereliability.pro/logos/ib.png"
      },
      "reliability": {
        "otp15_score": 94.2,
        "adjusted_score": 108.7,
        "confidence_interval": {
          "lower": 92.1,
          "upper": 96.3,
          "level": 0.95
        },
        "sample_size": 847,
        "grade": "excellent"
      },
      "hostility_factors": {
        "weather": 0.15,
        "traffic": 0.12,
        "distance": 0.08,
        "operational": 0.10,
        "total": 0.45
      },
      "metadata": {
        "last_updated": "2024-09-08T02:34:38Z",
        "data_period": "2023-09-01 to 2024-09-01",
        "prediction_accuracy": 94.2
      }
    }
  ],
  "route_info": {
    "distance_km": 483,
    "typical_duration": "1h 25m",
    "frequency_per_day": 12,
    "seasonal_pattern": "stable"
  }
}`
          },
          {
            title: 'Batch Analysis Response',
            content: 'Response format for multiple route analysis requests.',
            codeExample: `{
  "batch_id": "batch_20240908_023438",
  "status": "completed",
  "processed_routes": 15,
  "results": [
    {
      "route": "MAD-BCN",
      "top_airlines": [
        {
          "rank": 1,
          "airline": "IB",
          "score": 108.7,
          "confidence": "high"
        },
        {
          "rank": 2,
          "airline": "VY",
          "score": 102.3,
          "confidence": "high"
        }
      ]
    }
  ],
  "summary": {
    "total_predictions": 45,
    "average_confidence": 0.94,
    "processing_time_ms": 1247
  }
}`
          }
        ]
      }
    },
    {
      id: 'data-quality',
      title: 'Data Quality Standards',
      icon: 'Shield',
      content: {
        overview: 'Comprehensive quality assurance measures ensuring data integrity and reliability.',
        sections: [
          {
            title: 'Validation Rules',
            content: `Every data point undergoes 47 validation checks:

Temporal Validation:
• Departure time must be before arrival time
• Flight duration within reasonable bounds for route
• Timestamps must be in valid format and timezone

Logical Validation:
• Aircraft cannot be in two places simultaneously
• Gate assignments must match airport capacity
• Crew assignments must comply with duty time regulations

Cross-Reference Validation:
• Multiple source confirmation for critical data points
• Historical pattern consistency checks
• Weather correlation validation`,
            codeExample: `// Data Validation Pipeline
const validationRules = [
  {
    name: 'temporal_consistency',
    check: (flight) => flight.arrival_time > flight.departure_time,
    severity: 'critical'
  },
  {
    name: 'duration_bounds',
    check: (flight) => {
      const duration = flight.arrival_time - flight.departure_time;
      const expected = getExpectedDuration(flight.route);
      return Math.abs(duration - expected) < expected * 0.5;
    },
    severity: 'warning'
  },
  {
    name: 'aircraft_location',
    check: (flight) => validateAircraftLocation(flight),
    severity: 'critical'
  }
];`
          },
          {
            title: 'Accuracy Monitoring',
            content: `Continuous monitoring of prediction accuracy:

Real-time Tracking:
• Predictions validated against actual performance
• Accuracy metrics updated every 15 minutes
• Automatic alerts for accuracy degradation

Quality Metrics:
• Overall accuracy target: >93%
• Route-specific accuracy tracking
• Seasonal performance analysis
• Error pattern identification`,
            codeExample: `// Accuracy Monitoring System
function monitorAccuracy() {
  const predictions = getPendingValidations();
  const results = [];
  
  predictions.forEach(prediction => {
    const actual = getActualPerformance(prediction.flight_id);
    const accuracy = calculateAccuracy(prediction.score, actual.otp15);
    
    results.push({
      prediction_id: prediction.id,
      predicted_score: prediction.score,
      actual_score: actual.otp15,
      accuracy: accuracy,
      error: Math.abs(prediction.score - actual.otp15)
    });
  });
  
  updateAccuracyMetrics(results);
  checkAccuracyThresholds(results);
}`
          }
        ]
      }
    }
  ];

  const activeContent = documentationSections?.find(section => section?.id === activeSection);

  return (
    <div className="bg-card rounded-xl border border-border p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
          <Icon name="FileText" size={24} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Technical Documentation</h2>
          <p className="text-muted-foreground">Detailed technical specifications and implementation guides</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-foreground mb-4">Documentation Sections</h3>
          <div className="space-y-2">
            {documentationSections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => setActiveSection(section?.id)}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg border transition-all text-left ${
                  activeSection === section?.id
                    ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-muted-foreground text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={section?.icon} size={20} />
                <span className="font-medium">{section?.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          {activeContent && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Icon name={activeContent?.icon} size={24} color="var(--color-primary)" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{activeContent?.title}</h3>
                    <p className="text-muted-foreground">{activeContent?.content?.overview}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
                  Export PDF
                </Button>
              </div>

              <div className="space-y-8">
                {activeContent?.content?.sections?.map((section, index) => (
                  <div key={index} className="border border-border rounded-lg overflow-hidden">
                    <div className="bg-muted p-4 border-b border-border">
                      <h4 className="text-lg font-semibold text-foreground">{section?.title}</h4>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-foreground whitespace-pre-line mb-6">
                        {section?.content}
                      </div>
                      {section?.codeExample && (
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-medium text-muted-foreground">Code Example</span>
                            <Button variant="ghost" size="sm" iconName="Copy" iconPosition="left">
                              Copy
                            </Button>
                          </div>
                          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-slate-100 font-mono">
                              <code>{section?.codeExample}</code>
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnicalDocumentation;