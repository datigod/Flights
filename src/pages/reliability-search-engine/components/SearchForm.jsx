import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import api from '../../../utils/api';

const SearchForm = ({ onSearch, isLoading }) => {
  const [searchData, setSearchData] = useState({
    origin: '',
    destination: '',
    date: '',
    timePreference: '',
    minReliability: ''
  });

  const [airportOptions, setAirportOptions] = useState([]);

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const { data } = await api.get('/airports');
        const formatted = data?.map(airport => ({
          value: airport?.code,
          label: `${airport?.name} (${airport?.code}) - ${airport?.city}`
        }));
        setAirportOptions(formatted || []);
      } catch (error) {
        console.error('Error fetching airports:', error);
      }
    };

    fetchAirports();
  }, []);

  const timePreferenceOptions = [
    { value: '', label: 'Cualquier hora' },
    { value: 'morning', label: 'Mañana (06:00 - 12:00)' },
    { value: 'afternoon', label: 'Tarde (12:00 - 18:00)' },
    { value: 'evening', label: 'Noche (18:00 - 24:00)' }
  ];

  const reliabilityOptions = [
    { value: '', label: 'Sin mínimo' },
    { value: '70', label: '70% o superior' },
    { value: '80', label: '80% o superior' },
    { value: '90', label: '90% o superior' }
  ];

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (searchData?.origin && searchData?.destination && searchData?.date) {
      onSearch(searchData);
    }
  };

  const isFormValid = searchData?.origin && searchData?.destination && searchData?.date;

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <Icon name="Search" size={20} color="white" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">Buscador de Confiabilidad</h2>
          <p className="text-sm text-muted-foreground">Encuentra las aerolíneas más confiables para tu ruta</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Aeropuerto de Origen"
            placeholder="Selecciona origen"
            options={airportOptions}
            value={searchData?.origin}
            onChange={(value) => handleInputChange('origin', value)}
            searchable
            required
          />
          
          <Select
            label="Aeropuerto de Destino"
            placeholder="Selecciona destino"
            options={airportOptions}
            value={searchData?.destination}
            onChange={(value) => handleInputChange('destination', value)}
            searchable
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label="Fecha de Vuelo"
            type="date"
            value={searchData?.date}
            onChange={(e) => handleInputChange('date', e?.target?.value)}
            min={new Date()?.toISOString()?.split('T')?.[0]}
            required
          />
          
          <Select
            label="Preferencia de Horario"
            placeholder="Cualquier hora"
            options={timePreferenceOptions}
            value={searchData?.timePreference}
            onChange={(value) => handleInputChange('timePreference', value)}
          />
          
          <Select
            label="Confiabilidad Mínima"
            placeholder="Sin mínimo"
            options={reliabilityOptions}
            value={searchData?.minReliability}
            onChange={(value) => handleInputChange('minReliability', value)}
          />
        </div>

        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            variant="default"
            size="lg"
            loading={isLoading}
            disabled={!isFormValid}
            iconName="Search"
            iconPosition="left"
          >
            Buscar Aerolíneas
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;