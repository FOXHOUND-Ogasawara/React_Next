// src/App.tsx

import { Container, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail'; // 後で作成します

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/:name" element={<CountryDetail />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;