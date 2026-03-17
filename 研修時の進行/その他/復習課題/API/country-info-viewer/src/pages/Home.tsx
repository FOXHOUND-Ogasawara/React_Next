// src/pages/Home.tsx

import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import CountryList from '../components/CountryList';
import CountryFilter from '../components/CountryFilter';
import { Country } from '../types';

const Home: React.FC = () => {
  // TODO: 国データのstate管理を実装する（タスク1）
  // const [countries, setCountries] = useState<Country[]>([]);

  // TODO: 地域選択state（タスク2）

  // TODO: 検索文字state（タスク3）

  // TODO: APIから国データを取得する（タスク1）
	// 取得先: https://restcountries.com/v3.1/all?fields=name,region,population,flags,capital,languages,currencies
  // fetch()
  //   .then(res => res.json())
  //   .then((data: Country[]) => setCountries(data))
  //   .catch(err => console.error('取得に失敗しました', err));


  return (
    <div>
      <Typography variant="h4" gutterBottom>
        国情報ビューア
      </Typography>

      {/* TODO: 取得した国データをCountryListに渡す */}
    
    </div>
  );
};

export default Home;
