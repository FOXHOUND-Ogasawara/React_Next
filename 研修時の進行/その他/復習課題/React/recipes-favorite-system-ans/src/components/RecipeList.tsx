// src/components/RecipeList.tsx

import Grid from "@mui/material/GridLegacy";
import type { Recipe } from "../types";
import RecipeItem from "./RecipeItem";

interface RecipeListProps {
  recipes: Recipe[];
  addToFavorites: (recipe: Recipe) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, addToFavorites }) => {
  return (
    <Grid container spacing={2}>
      {recipes.map((recipe) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.id}>
          <RecipeItem recipe={recipe} addToFavorites={addToFavorites} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;
