import React from 'react';
import Header from '../../components/ui/Header';
import ExecutiveSummary from './components/ExecutiveSummary';
import DataSourcesSection from './components/DataSourcesSection';
import BaselineCalculations from './components/BaselineCalculations';
import HostilityWeighting from './components/HostilityWeighting';
import InteractiveCalculator from './components/InteractiveCalculator';
import DataProcessingPipeline from './components/DataProcessingPipeline';
import AccuracyTracking from './components/AccuracyTracking';
import TechnicalDocumentation from './components/TechnicalDocumentation';
import Icon from '../../components/AppIcon';

const MethodologyTransparencyCenter = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigationSections = [
    { id: 'executive-summary', label: 'Executive Summary', icon: 'FileText' },
    { id: 'data-sources', label: 'Data Sources', icon: 'Database' },
    { id: 'baseline-calculations', label: 'Baseline Calculations', icon: 'Calculator' },
    { id: 'hostility-weighting', label: 'Hostility Weighting', icon: 'Zap' },
    { id: 'interactive-calculator', label: 'Interactive Calculator', icon: 'Calculator' },
    { id: 'data-pipeline', label: 'Data Pipeline', icon: 'GitBranch' },
    { id: 'accuracy-tracking', label: 'Accuracy Tracking', icon: 'Target' },
    { id: 'technical-docs', label: 'Technical Documentation', icon: 'Code' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name="Shield" size={32} color="white" />
                </div>
                <div className="text-left">
                  <h1 className="text-4xl font-bold text-foreground">Methodology Transparency Center</h1>
                  <p className="text-xl text-muted-foreground">Complete transparency in aviation reliability scoring</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover how we transform raw flight data into actionable reliability insights through our comprehensive OTP15 methodology. 
                Every calculation, data source, and statistical approach is documented here for complete transparency.
              </p>

              {/* Quick Navigation */}
              <div className="bg-card rounded-xl border border-border p-6 max-w-4xl mx-auto">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Navigation</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {navigationSections?.map((section) => (
                    <button
                      key={section?.id}
                      onClick={() => scrollToSection(section?.id)}
                      className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left"
                    >
                      <Icon name={section?.icon} size={16} color="var(--color-primary)" />
                      <span className="text-sm font-medium text-foreground">{section?.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div id="executive-summary">
            <ExecutiveSummary />
          </div>

          <div id="data-sources">
            <DataSourcesSection />
          </div>

          <div id="baseline-calculations">
            <BaselineCalculations />
          </div>

          <div id="hostility-weighting">
            <HostilityWeighting />
          </div>

          <div id="interactive-calculator">
            <InteractiveCalculator />
          </div>

          <div id="data-pipeline">
            <DataProcessingPipeline />
          </div>

          <div id="accuracy-tracking">
            <AccuracyTracking />
          </div>

          <div id="technical-docs">
            <TechnicalDocumentation />
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience Data-Driven Aviation?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Now that you understand our methodology, experience the power of transparent airline reliability scoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors flex items-center justify-center space-x-2">
                  <Icon name="Search" size={20} />
                  <span>Try Reliability Search</span>
                </button>
                <button className="border border-primary-foreground/20 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors flex items-center justify-center space-x-2">
                  <Icon name="BarChart3" size={20} />
                  <span>Explore Route Analytics</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Plane" size={20} color="white" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-foreground">AirlineReliability</span>
                    <span className="text-sm font-medium text-primary ml-1">Pro</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Transforming aviation data into actionable reliability insights through transparent, data-driven analysis.
                </p>
                <div className="flex space-x-4">
                  <Icon name="Twitter" size={20} color="var(--color-muted-foreground)" className="hover:text-primary cursor-pointer" />
                  <Icon name="Linkedin" size={20} color="var(--color-muted-foreground)" className="hover:text-primary cursor-pointer" />
                  <Icon name="Github" size={20} color="var(--color-muted-foreground)" className="hover:text-primary cursor-pointer" />
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Platform</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="hover:text-foreground cursor-pointer">Search Engine</div>
                  <div className="hover:text-foreground cursor-pointer">Route Analytics</div>
                  <div className="hover:text-foreground cursor-pointer">API Access</div>
                  <div className="hover:text-foreground cursor-pointer">Mobile App</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4">Resources</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="hover:text-foreground cursor-pointer">Documentation</div>
                  <div className="hover:text-foreground cursor-pointer">API Guide</div>
                  <div className="hover:text-foreground cursor-pointer">Accuracy Reports</div>
                  <div className="hover:text-foreground cursor-pointer">Support</div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
              <div className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} AirlineReliability Pro. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-muted-foreground mt-4 sm:mt-0">
                <span className="hover:text-foreground cursor-pointer">Privacy Policy</span>
                <span className="hover:text-foreground cursor-pointer">Terms of Service</span>
                <span className="hover:text-foreground cursor-pointer">Cookie Policy</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default MethodologyTransparencyCenter;