import React from 'react';
import Icon from '../../../components/AppIcon';

const ExecutiveSummary = () => {
  return (
    <div className="bg-card rounded-xl border border-border p-8 mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
          <Icon name="FileText" size={24} color="white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Executive Summary</h2>
          <p className="text-muted-foreground">Understanding our reliability scoring system</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">OTP15 Methodology</h3>
          <p className="text-muted-foreground mb-4">
            Our On-Time Performance 15-minute (OTP15) scoring system evaluates airline reliability using a comprehensive approach that considers arrival punctuality, route difficulty, and seasonal variations.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm text-foreground">15-minute arrival window tolerance</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm text-foreground">Route hostility weighting factors</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm text-foreground">Baseline performance comparisons</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Key Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <div className="text-2xl font-bold text-primary">94.2%</div>
              <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <div className="text-2xl font-bold text-secondary">15min</div>
              <div className="text-sm text-muted-foreground">Tolerance Window</div>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <div className="text-2xl font-bold text-accent">2.8M</div>
              <div className="text-sm text-muted-foreground">Monthly Flights</div>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <div className="text-2xl font-bold text-success">99.7%</div>
              <div className="text-sm text-muted-foreground">Data Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;