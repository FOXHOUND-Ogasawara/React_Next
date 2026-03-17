// src/components/FavoriteItem.tsx

import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import type { Recipe } from "../types";

interface FavoriteItemProps {
  item: Recipe;
  removeFromFavorites: (recipeId: number) => void;
}

const FavoriteItem = ({ item, removeFromFavorites }: FavoriteItemProps) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          // TODO: タスク3で item.id を渡すように修正
          onClick={() => removeFromFavorites(0)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        // TODO: タスク3で item の値を使うように修正
        primary={"サンプルレシピ"}
        secondary={`料理ジャンル: Italian`}
      />
    </ListItem>
  );
};

export default FavoriteItem;
