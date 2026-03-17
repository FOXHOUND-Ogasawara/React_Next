# Reactの環境構築と復習

## 環境構築

基本は事前学習時に利用した「Reactではじめるプログラミング基礎コース」を参考に、支給されたPCの環境を整える

[https://sls.ideal-growth.jp/46/lesson/829/learning](https://sls.ideal-growth.jp/46/lesson/829/learning)

VSCodeにてReactが実行できる環境を構築してください。

## 復習

以下のお題にチャレンジしてください。

プロジェクトを作成する際は、Cドライブ内に専用のフォルダを作成し、その配下に作成するようにしてください。

### お題1

1. プロジェクト作成
    1. プロジェクト名は「sample-project」
    2. `react-router-dom, @mui/material, @mui/icons-material, @emotion/react, @emotion/styled` をインストールする
2. App.tsxのコピー
    
    ```tsx
    import MenuIcon from '@mui/icons-material/Menu';
    import {
      AppBar,
      Box,
      Button,
      CssBaseline,
      Drawer,
      IconButton,
      List,
      ListItem,
      ListItemButton,
      ListItemText,
      MenuItem,
      Table,
      TableCell,
      TableHead,
      TextField,
      Toolbar,
      Typography
    } from '@mui/material';
    import { useState } from 'react';
    import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
    import './App.css';
    
    const Home = () => {
      return (
        <>
          <Box sx={{ borderBottom: 1, marginBottom: 3 }}>
            <Typography variant="h5">設問1</Typography>
            <Typography>
              サイドメニューにあるToDoリストを完成させなさい。<br />
              表示する情報は、以下のURLから取得できる。<br />
              https://jsonplaceholder.typicode.com/todos
            </Typography>
          </Box>
          <Box sx={{ borderBottom: 1, marginBottom: 3 }}>
            <Typography variant="h5">設問2</Typography>
            <Typography>
              Todoリストに絞り込み機能を追加しなさい。<br />
              絞り込み条件は「すべて」「完了」「未完了」の3種類とする。
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">設問3</Typography>
            <Typography>
              サイドメニューにある計算機能を完成させなさい。<br />
              入力値に応じた計算が行われ、画面で確認できることとする。
            </Typography>
          </Box>
        </>
      );
    }
    
    const TodoList = () => {
    
      return (
        <>
          <Table>
            <TableHead>
              <TableCell>ID</TableCell>
              <TableCell>ユーザーID</TableCell>
              <TableCell>タスク名</TableCell>
              <TableCell>状況</TableCell>
            </TableHead>
          </Table>
        </>
      );
    }
    
    const Calculator = () => {
    
      return (
        <>
          <Typography variant="h4" gutterBottom>計算機能</Typography>
          <Typography variant="h5" component="p">
            0
          </Typography>
          <Toolbar />
          <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '10ch'} }}>
            <TextField label="value1" color="secondary" />
            <TextField select label="Select">
              <MenuItem value={"+"}>+</MenuItem>
              <MenuItem value={"-"}>-</MenuItem>
            </TextField>
            <TextField label="value2" color="secondary" />
          </Box>
          <Button variant="contained" sx={{ m:2 }}>計算を実行する</Button>
        </>
      );
    }
    
    const MenuList = () => {
    
      const [open, setOpen] = useState(false);
      const toggleDrawer = (newOpen: boolean) => {
        setOpen(newOpen);
      }
    
      return (
        <Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {toggleDrawer(true)}}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
    	      open={open}
    	      onClose={() => toggleDrawer(false)}
    	      classes={{ paper: 'drawer-paper' }}
          >
            <Box className="drawer-header">
              <Typography variant="h6" className="drawer-title">機能一覧</Typography>
            </Box>
            <List>
            <ListItem>
                <ListItemButton component={Link} to="/">
                  <ListItemText primary="ホーム" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component={Link} to="/todos">
                  <ListItemText primary="ToDoリスト" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component={Link} to="/calculator">
                  <ListItemText primary="計算機" />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
        </Box>
      );
    }
    
    function App() {
    
      return (
        <>
          <BrowserRouter>
            <Box sx={{ display: 'flex' }}>
              <CssBaseline />
              <AppBar position="fixed">
                <Toolbar>
                  <MenuList />
                  <Typography variant="h5">
                    復習用プロジェクト
                  </Typography>
                </Toolbar>
              </AppBar>
              <Box component="main"
    	          sx={{ flexGrow: 1, p: 3, bgcolor: 'background.default' }}
    	        >
                <Toolbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/todos" element={<TodoList />} />
                  <Route path="/calculator" element={<Calculator />} />
                </Routes>
              </Box>
            </Box>
          </BrowserRouter>
        </>
      )
    }
    
    export default App
    ```
    

### お題2

お題1に対して以下の改修を行いなさい

1. 機能追加
    1. タスク件数
        1. 表示件数を最大20件に変更
        2. ページネーションを追加
        3. タスク表示件数を20/50/100件に変化させるボタン追加
    2. タスク並び替え
        1. 並び替えボタン or プルダウンを追加
        2. 対応した並び替え機能の追加
2. レイアウト改修
    1. サイドメニューやヘッダーのレイアウトを変化させる
    2. ボタンレイアウトを変化させる
    3. ダークモードとライトモードの切り替え機能を追加

## 明日に向けて

以下の内容を調査し、意味や用途などをまとめる

- WEBの仕組み
- WEBサービスの仕組み
- WEB APIとはなにか