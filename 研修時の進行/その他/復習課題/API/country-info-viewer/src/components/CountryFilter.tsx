// src/components/CountryFilter.tsx

import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

interface CountryFilterProps {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  searchText: string;
  setSearchText: (text: string) => void;
}

const CountryFilter: React.FC<CountryFilterProps> = ({
  selectedRegion,
  setSelectedRegion,
  searchText,
  setSearchText,
}) => {
  // TODO: 地域絞り込みと国名検索のフォームを実装する（タスク2・3）
};

export default CountryFilter;
