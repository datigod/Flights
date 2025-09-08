import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AccuracyTracking = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');

  const accuracyData = [
    { month: 'Mar 2024', predicted: 94.2, actual: 93.8, difference: 0.4 },
    { month: 'Apr 2024', predicted: 91.5, actual: 92.1, difference: -0.6 },
    { month: 'May 2024', predicted: 89.3, actual: 88.9, difference: 0.4 },
    { month: 'Jun 2024', predicted: 87.8, actual: 87.2, difference: 0.6 },
    { month: 'Jul 2024', predicted: 85.4, actual: 86.1, difference: -0.7 },
    { month: 'Aug 2024', predicted: 88.9, actual: 89.4, difference: -0.5 },
    { month: 'Sep 2024', predicted: 92.1, actual: 91.8, difference: 0.3 }
  ];

  const routeAccuracy = [
    { route: 'MAD-BCN', predictions: 1247, accuracy: 96.2, avgError: 0.8 },
    { route: 'BCN-PMI', predictions: 892, accuracy: 94.8, avgError: 1.2 },
    { route: 'MAD-LPA', predictions: 634, accuracy: 93.1, avgError: 1.8 },
    { route: 'MAD-SVQ', predictions: 445, accuracy: 95.7, avgError: 0.9 },
    { route: 'BCN-VLC', predictions: 378, accuracy: 94.3, avgError: 1.4 }
  ];

  const monthlyReports = [
    {
      month: 'September 2024',
      date: '2024-09-01',
      accuracy: '94.2%',
      predictions: '12,847',
      avgError: '1.2%',
      downloadUrl: '#'
    },
    {
      month: 'August 2024',
      date: '2024-08-01',
      accuracy: '93.8%',
      predictions: '13,921',
      avgError: '1.4%',
      downloadUrl: '#'
    },
    {
      month: 'July 2024',
      date: '2024-07-01',
      accuracy: '92.9%',
      predictions: '15,234',
      avgError: '1.6%',
      downloadUrl: '#'
    }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
            <Icon name="Target" size={24} color="white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Real-Time Accuracy Tracking</h2>
            <p className="text-muted-foreground">Validation of prediction performance vs actual results</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={selectedPeriod === '3months' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedPeriod('3months')}
          >
            3M
          </Button>
          <Button
            variant={selectedPeriod === '6months' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedPeriod('6months')}
          >
            6M
          </Button>
          <Button
            variant={selectedPeriod === '1year' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedPeriod('1year')}
          >
            1Y
          </Button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <div className="bg-success/10 border border-success/20 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-2">
            <Icon name="TrendingUp" size={20} color="var(--color-success)" />
            <span className="text-sm font-medium text-success">Overall Accuracy</span>
          </div>
          <div className="text-3xl font-bold text-success">94.2%</div>
          <div className="text-sm text-muted-foreground">Last 6 months average</div>
        </div>

        <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-2">
            <Icon name="BarChart3" size={20} color="var(--color-secondary)" />
            <span className="text-sm font-medium text-secondary">Total Predictions</span>
          </div>
          <div className="text-3xl font-bold text-secondary">78,451</div>
          <div className="text-sm text-muted-foreground">Validated predictions</div>
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-2">
            <Icon name="Zap" size={20} color="var(--color-accent)" />
            <span className="text-sm font-medium text-accent">Average Error</span>
          </div>
          <div className="text-3xl font-bold text-accent">1.2%</div>
          <div className="text-sm text-muted-foreground">Mean absolute error</div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Prediction vs Actual Performance</h3>
          <div className="h-64 bg-muted rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={accuracyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis 
                  dataKey="month" 
                  stroke="var(--color-muted-foreground)"
                  fontSize={12}
                />
                <YAxis 
                  stroke="var(--color-muted-foreground)"
                  fontSize={12}
                  domain={['dataMin - 2', 'dataMax + 2']}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--color-card)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="var(--color-primary)" 
                  strokeWidth={2}
                  name="Predicted"
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="var(--color-success)" 
                  strokeWidth={2}
                  name="Actual"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Route-Specific Accuracy</h3>
          <div className="space-y-3">
            {routeAccuracy?.map((route, index) => (
              <div key={index} className="bg-muted rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{route?.route}</span>
                  <span className="text-sm font-bold text-success">{route?.accuracy}%</span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{route?.predictions} predictions</span>
                  <span>±{route?.avgError}% avg error</span>
                </div>
                <div className="mt-2 bg-background rounded-full h-2">
                  <div 
                    className="bg-success h-2 rounded-full transition-all duration-300"
                    style={{ width: `${route?.accuracy}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Monthly Accuracy Reports</h3>
          <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
            Download All
          </Button>
        </div>
        
        <div className="bg-muted rounded-lg overflow-hidden">
          <div className="grid grid-cols-5 gap-4 p-4 border-b border-border font-medium text-sm text-muted-foreground">
            <div>Report Period</div>
            <div>Accuracy Rate</div>
            <div>Total Predictions</div>
            <div>Average Error</div>
            <div>Actions</div>
          </div>
          
          {monthlyReports?.map((report, index) => (
            <div key={index} className="grid grid-cols-5 gap-4 p-4 border-b border-border last:border-b-0 hover:bg-card transition-colors">
              <div className="font-medium text-foreground">{report?.month}</div>
              <div className="text-success font-semibold">{report?.accuracy}</div>
              <div className="text-foreground">{report?.predictions}</div>
              <div className="text-accent">{report?.avgError}</div>
              <div>
                <Button variant="ghost" size="sm" iconName="Download" iconPosition="left">
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="var(--color-primary)" className="mt-0.5" />
          <div className="text-sm text-foreground">
            <strong>Validation Methodology:</strong> Predictions are validated against actual flight performance data 24-48 hours after scheduled departure. Accuracy is measured as the percentage of predictions within ±2% of actual OTP15 performance.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccuracyTracking;