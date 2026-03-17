// src/components/CountryList.tsx

import React from 'react';
import { Grid } from '@mui/material';
import { Country } from '../types';
import CountryItem from './CountryItem';

interface CountryListProps {
  countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  return (
    <Grid container spacing={2}>
      {countries.map(country => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={country.name.common}>
          <CountryItem country={country} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CountryList;
