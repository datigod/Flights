import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/homepage', label: 'Home', icon: 'Home' },
    { path: '/reliability-search-engine', label: 'Search Engine', icon: 'Search' },
    { path: '/interactive-route-analytics', label: 'Route Analytics', icon: 'BarChart3' },
    { path: '/methodology-transparency-center', label: 'Methodology', icon: 'FileText' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border backdrop-blur-sm">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          {/* Logo */}
          <Link to="/homepage" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Plane" size={24} color="white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">
                AirlineReliability
              </span>
              <span className="text-xs font-medium text-primary leading-tight">
                Pro
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.label}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="sm" iconName="Bell" iconPosition="left">
              Alerts
            </Button>
            <Button variant="outline" size="sm" iconName="Settings" iconPosition="left">
              Settings
            </Button>
            <Button variant="default" size="sm" iconName="Crown" iconPosition="left">
              Upgrade
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={toggleMobileMenu}
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={20} />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.label}</span>
                </Link>
              ))}
              
              {/* Mobile Actions */}
              <div className="pt-4 mt-4 border-t border-border space-y-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  fullWidth 
                  iconName="Bell" 
                  iconPosition="left"
                  className="justify-start"
                >
                  Alerts
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  fullWidth 
                  iconName="Settings" 
                  iconPosition="left"
                  className="justify-start"
                >
                  Settings
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  fullWidth 
                  iconName="Crown" 
                  iconPosition="left"
                  className="justify-start"
                >
                  Upgrade to Pro
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;