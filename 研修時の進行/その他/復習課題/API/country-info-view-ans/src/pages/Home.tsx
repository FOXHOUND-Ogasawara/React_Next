// src/pages/Home.tsx

import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import CountryList from '../components/CountryList';
import CountryFilter from '../components/CountryFilter';
import { Country } from '../types';

const Home: React.FC = () => {
    const [countries, setCountries] = useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchText, setSearchText] = useState<string>('');
  const [sortOption, setSortOption] = useState<string>('name-asc');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,region,population,flags,capital,languages,currencies')
      .then(res => res.json())
      .then((data: Country[]) => setCountries(data))
      .catch(err => console.error('取得に失敗しました', err));
  }, []);

  const filteredCountries = countries.filter(country =>
    selectedRegion === 'all' ? true : country.region === selectedRegion
  ).filter(country =>
    country.name.common.toLowerCase().includes(searchText.toLowerCase())
  );

  const sortedCountries = [...filteredCountries].sort((a, b) => {
    if (sortOption === 'name-asc') {
      return a.name.common.localeCompare(b.name.common);
    } else if (sortOption === 'population-desc') {
      return b.population - a.population;
    }
    return 0;
  });

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        国情報ビューア
      </Typography>
      <CountryFilter
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
        searchText={searchText}
        setSearchText={setSearchText}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <Typography variant="h6" gutterBottom>
        表示件数: {sortedCountries.length}件
      </Typography>
      <CountryList countries={sortedCountries} />
    
    </div>
  );
};

export default Home;
