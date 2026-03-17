// src/App.tsx
import { Container, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Favorites from "./components/Favorites";
import Home from "./pages/Home";
import type { Recipe } from "./types";

const App = () => {
  const [favoriteItems, setFavoriteItems] = useState<Recipe[]>([]);

  const addToFavorites = (recipe: Recipe) => {
    setFavoriteItems([...favoriteItems, recipe]);
  };

  const removeFromFavorites = (recipeId: number) => {
    setFavoriteItems(favoriteItems.filter((item) => item.id !== recipeId));
  };

  return (
    <Router>
      <CssBaseline />
      <Favorites
        favoriteItems={favoriteItems}
        removeFromFavorites={removeFromFavorites}
      />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home addToFavorites={addToFavorites} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
