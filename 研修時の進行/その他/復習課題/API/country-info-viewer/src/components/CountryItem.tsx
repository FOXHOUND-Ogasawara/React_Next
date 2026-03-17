// src/components/CountryItem.tsx

import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Country } from '../types';

interface CountryItemProps {
  country: Country;
}

const CountryItem: React.FC<CountryItemProps> = ({ country }) => {
  // TODO: 国データをカード形式で表示する（国旗、国名、地域、人口）
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        image="https://flagcdn.com/w320/jp.png" // ダミー画像
        alt="flag"
        sx={{ height: 160, objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6">国名</Typography>
        <Typography variant="body2">地域: Asia</Typography>
        <Typography variant="body2">人口: 100000000</Typography>
      </CardContent>
    </Card>
  );
};

export default CountryItem;

