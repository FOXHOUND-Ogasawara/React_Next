// src/components/CountryItem.tsx

import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Country } from '../types';

interface CountryItemProps {
  country: Country;
}

const CountryItem: React.FC<CountryItemProps> = ({ country }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
      component={Link}
      to={`/countries/${encodeURIComponent(country.name.common)}`}
    >
      <CardMedia
        component="img"
        image={country.flags.png}
        alt={country.flags.alt}
        sx={{ height: 160, objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6">{country.name.common}</Typography>
        <Typography variant="body2">地域: {country.region}</Typography>
        <Typography variant="body2">人口: {country.population.toLocaleString()}</Typography>
      </CardContent>
    </Card>
  );
};

export default CountryItem;

