// src/components/CountryFilter.tsx

import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

interface CountryFilterProps {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
  searchText: string;
  setSearchText: (text: string) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
}

const CountryFilter: React.FC<CountryFilterProps> = ({
  selectedRegion,
  setSelectedRegion,
  searchText,
  setSearchText,
  sortOption,
  setSortOption,
}) => {
  const regions = ['all', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const sortOptions = [
    { value: 'name-asc', label: '国名 (A-Z)' },
    { value: 'population-desc', label: '人口 (多い順)' },
  ];

  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
      <TextField
        label="国名で検索"
        variant="outlined"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        sx={{ minWidth: 200 }}
      />
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="region-select-label">地域</InputLabel>
        <Select
          labelId="region-select-label"
          value={selectedRegion}
          label="地域"
          onChange={e => setSelectedRegion(e.target.value as string)}
        >
          {regions.map(region => (
            <MenuItem key={region} value={region}>
              {region === 'all' ? '全て' : region}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="sort-select-label">並び替え</InputLabel>
        <Select
          labelId="sort-select-label"
          value={sortOption}
          label="並び替え"
          onChange={e => setSortOption(e.target.value as string)}
        >
          {sortOptions.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CountryFilter;
