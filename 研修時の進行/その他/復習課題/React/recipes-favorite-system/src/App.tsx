// src/App.tsx
import { Container, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Favorites from "./components/Favorites";
import Home from "./pages/Home";
import type { Recipe } from "./types";

const App = () => {
  const [favoriteItems, setFavoriteItems] = useState<Recipe[]>([]);

  // TODO: タスク3で実装
  // const addToFavorites = (recipe: Recipe) => {
  //   setFavoriteItems([...favoriteItems, recipe]);
  // };

  const removeFromFavorites = (recipeId: number) => {
    // TODO: タスク3で実装
    setFavoriteItems([...favoriteItems]);
  };

  return (
    <Router>
      <CssBaseline />
      {/* TODO: タスク3でaddToFavoritesを渡すように修正 */}
      <Favorites
        favoriteItems={favoriteItems}
        removeFromFavorites={removeFromFavorites}
      />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          {/* TODO: タスク1〜3で props を渡すように修正 */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
