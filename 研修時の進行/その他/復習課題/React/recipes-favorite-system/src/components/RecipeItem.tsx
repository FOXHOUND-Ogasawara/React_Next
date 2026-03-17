// src/components/RecipeItem.tsx

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { Recipe } from "../types";
// import { Button } from '@mui/material';

interface RecipeItemProps {
  recipe: Recipe;
  // addToFavorites: (recipe: Recipe) => void;
}

const RecipeItem = () => {
  // TODO: タスク1・3で props を使うように修正
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
        image={"https://cdn.dummyjson.com/recipe-images/1.webp"}
        alt={"sample recipe"}
        sx={{
          height: 160,
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6">
          サンプルレシピ
        </Typography>
        <Typography variant="body2" color="text.secondary">
          カテゴリ: イタリアン
        </Typography>
        <Typography variant="body2" color="text.secondary">
          難易度: Easy
        </Typography>
      </CardContent>
      {/* TODO: タスク3で「お気に入りに追加」ボタンを実装 */}
      {/* <Button onClick={() => addToFavorites(recipe)}>お気に入りに追加</Button> */}
    </Card>
  );
};

export default RecipeItem;
