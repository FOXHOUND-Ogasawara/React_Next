// src/components/RecipeList.tsx

import { Grid } from "@mui/material";
import type { Recipe } from "../types";
import RecipeItem from "./RecipeItem";

interface RecipeListProps {
  recipes: Recipe[];
  // addToFavorites: (recipe: Recipe) => void;
}

const RecipeList = () => {
  // TODO: タスク1で props を受け取って、レシピの数だけカードを表示するように修正
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RecipeItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RecipeItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RecipeItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <RecipeItem />
      </Grid>
    </Grid>
  );
};

export default RecipeList;
