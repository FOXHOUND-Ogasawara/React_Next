// src/pages/Home.tsx

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import RecipeList from "../components/RecipeList";
// import { Recipe } from '../types';

// interface HomeProps {
//   addToFavorites: (recipe: Recipe) => void;
// }

const Home = () => {
  // TODO: レシピデータの取得とstate管理（タスク1）
  // TODO: タグ（カテゴリー）データの取得とstate管理（タスク2）
  // TODO: 選択されたタグでのフィルタリング処理（タスク2）
  // TODO: ローディング状態の管理（タスク4）

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        レシピ一覧
      </Typography>
      {/* TODO: タグ（カテゴリー）用のプルダウンメニュー（タスク2） */}
      <FormControl sx={{ minWidth: 240, marginBottom: 2 }}>
        <InputLabel id="tag-select-label">タグで絞り込み</InputLabel>
        <Select
          labelId="tag-select-label"
          value={"all"}
          label="タグで絞り込み"
          // onChange={}
        >
          <MenuItem value="all">すべて</MenuItem>
          <MenuItem value={"Pizza"}>Pizza</MenuItem>
          <MenuItem value={"Dessert"}>Dessert</MenuItem>
          <MenuItem value={"Salad"}>Salad</MenuItem>
        </Select>
      </FormControl>
      {/* TODO: レシピリストの表示（タスク1） */}
      <RecipeList />
    </div>
  );
};

export default Home;
