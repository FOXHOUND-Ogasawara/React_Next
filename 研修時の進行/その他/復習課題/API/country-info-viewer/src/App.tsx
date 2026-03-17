// src/App.tsx

import { Container, CssBaseline } from '@mui/material';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container sx={{ marginTop: 4 }}>
        <Home />
      </Container>
    </>
  );
};

export default App;