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
          onClick={() => removeFromFavorites(item.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={item.name}
        secondary={item.tags.join(", ")}
      />
    </ListItem>
  );
};

export default FavoriteItem;
