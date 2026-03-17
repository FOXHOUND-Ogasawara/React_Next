// src/pages/CountryDetail.tsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, CircularProgress, Button, Card, CardMedia, CardContent } from '@mui/material';
import { Country } from '../types';

const CountryDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (name) {
      setLoading(true);
      setError(null);
      fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=true&fields=name,region,population,flags,capital,languages,currencies`)
        .then(res => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then((data: Country[]) => {
          if (data.length > 0) {
            setCountry(data[0]);
          } else {
            setError('国が見つかりませんでした。');
          }
        })
        .catch(err => {
          console.error('詳細情報の取得に失敗しました', err);
          setError('詳細情報の取得に失敗しました。');
        })
        .finally(() => setLoading(false));
    }
  }, [name]);

  const handleGoBack = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
        <Button variant="contained" onClick={handleGoBack} sx={{ mt: 2 }}>
          一覧に戻る
        </Button>
      </Box>
    );
  }

  if (!country) {
    return (
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">
          国情報がありません。
        </Typography>
        <Button variant="contained" onClick={handleGoBack} sx={{ mt: 2 }}>
          一覧に戻る
        </Button>
      </Box>
    );
  }

  const languageList = country.languages
    ? Object.values(country.languages).join(', ')
    : '-';
  const currencyList = country.currencies
    ? Object.values(country.currencies).map(c => c.name).join(', ')
    : '-';

  return (
    <Box sx={{ mt: 4 }}>
      <Button variant="contained" onClick={handleGoBack} sx={{ mb: 4 }}>
        一覧に戻る
      </Button>
      <Card>
        <CardMedia
          component="img"
          image={country.flags.png}
          alt={country.flags.alt}
          sx={{ height: 240, objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>{country.name.common}</Typography>
          <Typography variant="body1">**地域**: {country.region}</Typography>
          <Typography variant="body1">**首都**: {country.capital ? country.capital.join(', ') : '-'}</Typography>
          <Typography variant="body1">**人口**: {country.population.toLocaleString()}</Typography>
          <Typography variant="body1">**言語**: {languageList}</Typography>
          <Typography variant="body1">**通貨**: {currencyList}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CountryDetail;
