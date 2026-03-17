// src/components/Favorites.tsx

import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import { useState } from "react";
import type { Recipe } from "../types";
// import FavoriteItem from './FavoriteItem';

interface FavoritesProps {
  favoriteItems: Recipe[];
  removeFromFavorites: (recipeId: number) => void;
}

const Favorites = ({ favoriteItems, removeFromFavorites }: FavoritesProps) => {
  // TODO: タスク3で実装（例：お気に入り数を集計するなど）
  const totalFavorites = 0;

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 1300,
        }}
      >
        お気に入り ({favoriteItems.length})
      </Button>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div style={{ width: 320, padding: "16px" }}>
          <IconButton onClick={() => setOpen(false)} sx={{ float: "right" }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" gutterBottom>
            お気に入りレシピ
          </Typography>
          <Divider />
          {favoriteItems.length === 0 ? (
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              お気に入りに登録されたレシピはありません。
            </Typography>
          ) : (
            <>
              <List>
                {/* TODO: FavoriteItem を使って一覧表示する（タスク3） */}
                {/* {favoriteItems.map((item) => (
                  <FavoriteItemkey={item.id}
                    item={item}
                    removeFromFavorites={removeFromFavorites}
                  />
                ))} */}
              </List>
              <Divider />
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                合計レシピ数: {totalFavorites}件
              </Typography>
            </>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default Favorites;
