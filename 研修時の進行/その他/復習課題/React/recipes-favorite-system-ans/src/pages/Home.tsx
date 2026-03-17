// src/pages/Home.tsx

import {
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList";
import type { Recipe } from "../types";

interface HomeProps {
  addToFavorites: (recipe: Recipe) => void;
}

const Home: React.FC<HomeProps> = ({ addToFavorites }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
        setLoading(false);
      });
    fetch("https://dummyjson.com/recipes/tags")
      .then((response) => response.json())
      .then((data) => {
        setTags(data);
      });
  }, []);

  const filteredRecipes =
    selectedTag === "all"
      ? recipes
      : recipes.filter((recipe) => recipe.tags.includes(selectedTag));

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        レシピ一覧
      </Typography>
      <FormControl sx={{ minWidth: 240, marginBottom: 2 }}>
        <InputLabel id="tag-select-label">タグで絞り込み</InputLabel>
        <Select
          labelId="tag-select-label"
          value={selectedTag}
          label="タグで絞り込み"
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <MenuItem value="all">すべて</MenuItem>
          {tags.map((tag) => (
            <MenuItem key={tag} value={tag}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <RecipeList recipes={filteredRecipes} addToFavorites={addToFavorites} />
    </div>
  );
};

export default Home;
