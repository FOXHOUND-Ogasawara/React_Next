// src/components/RecipeItem.tsx

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { Recipe } from "../types";

interface RecipeItemProps {
  recipe: Recipe;
  addToFavorites: (recipe: Recipe) => void;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ recipe, addToFavorites }) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image={recipe.image}
        alt={recipe.name}
        sx={{
          height: 160,
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6">
          {recipe.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          カテゴリ: {recipe.tags}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          難易度: {recipe.difficulty}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        color="primary"
        onClick={() => addToFavorites(recipe)}
        sx={{ margin: 1 }}
      >
        お気に入りに追加
      </Button>
    </Card>
  );
};

export default RecipeItem;
