# dashboard-app

### フォルダ構成

```
dashboad-app
└ src
   ├ components
   │  ├ CategoryChart.tsx       -> 追加
   │  ├ Header.tsx
   │  ├ NotificationCenter.tsx
   │  ├ SalesChart.tsx          -> 追加
   │  ├ SalesPieChart.tsx       -> 追加
   │  ├ SideMenu.tsx            -> 修正
   │  └ UserStatsChart.tsx      -> 追加
   ├ data
   │  ├ notifications.ts
   │  ├ productData.tsx　　　　　-> 追加
   │  ├ salesData.ts
   │  └ userData.ts
   ├ pages
   │  ├ Dashboard.tsx　　　　　　-> 修正
   │  ├ Notifications.tsx
   │  ├ Products.tsx            -> 追加
   │  └ Settings.tsx
   └ App.tsx
```

## src

### App.tsx

```tsx
// App.tsx
import { Box, createTheme, CssBaseline, ThemeProvider, Toolbar } from '@mui/material';
import { useMemo, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

const drawerWidth = 240;

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  }),[darkMode]);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header onThemeChange={handleThemeChange} darkMode={darkMode} />
          <Box sx={{ display: 'flex' }}>
            <SideMenu drawerWidth={drawerWidth} />
            <Box component="main" sx={{ flexGrow: 1, p: 3}}>
              <Toolbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

```

## src/components

### CategoryChart.tsx

```tsx
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { categoryData } from '../data/productData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA00FF', '#AA9032'];

const CategoryChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={categoryData}
          dataKey="value"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {categoryData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CategoryChart;
```

### SalesChart.tsx

```tsx
import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { dailySalesData, monthlySalesData, weeklySalesData } from "../data/salesData";

interface SalesData {
  label: string;
  sales: number;
}

const SalesChart = () => {
  const [data, setData] = useState<SalesData[]>(dailySalesData);
  const [period, setPeriod] = useState('daily');

  const handleDataChange = (selectedPeriod: string) => {
    setPeriod(selectedPeriod);
    if (selectedPeriod === 'daily') {
      setData(dailySalesData);
    } else if (selectedPeriod === 'weekly') {
      setData(weeklySalesData);
    } else if (selectedPeriod === 'monthly') {
      setData(monthlySalesData);
    }
  }
  return (
    <div>
      <ButtonGroup variant="outlined" size="small" sx={{ mb: 2 }}>
        <Button onClick={() => handleDataChange('daily')} variant={period === 'daily' ? 'contained' : 'outlined'}>日別</Button>
        <Button onClick={() => handleDataChange('weekly')} variant={period === 'daily' ? 'contained' : 'outlined'}>週別</Button>
        <Button onClick={() => handleDataChange('monthly')} variant={period === 'daily' ? 'contained' : 'outlined'}>月別</Button>
      </ButtonGroup>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" name="売上" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
```

### SalesPieChart.tsx

```tsx
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { productSalesData } from '../data/salesData'; 

const COLORS = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'];

const SalesPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={productSalesData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {productSalesData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SalesPieChart;
```

### SideMenu.tsx

```tsx
import { Drawer, List, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

interface SideMenuProps {
  drawerWidth: number;
}

const SideMenu = ({drawerWidth}: SideMenuProps) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: { width: drawerWidth },
      }}
    >
      <Toolbar />
      <List>
        <ListItemButton component={Link} to="/">
          <ListItemText primary="ダッシュボード" />
        </ListItemButton>
        <ListItemButton component={Link} to="/products">
          <ListItemText primary="商品一覧" />
        </ListItemButton>
        <ListItemButton component={Link} to="/notifications">
          <ListItemText primary="通知センター" />
        </ListItemButton>
        <ListItemButton component={Link} to="/settings">
          <ListItemText primary="設定" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default SideMenu;
```

### UserStatsChart.tsx

```tsx
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { userData } from '../data/userData';

const UserStatsChart = () => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <BarChart data={userData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="newUsers" fill="#8884d8" name="新規ユーザー" />
        <Bar dataKey="activeUsers" fill="#82ca9d" name="アクティブユーザー" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserStatsChart;
```

## src/data

### productData.ts

```tsx
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}
  
export interface Category {
  id: number;
  category: string;
  value: number;
}
  
export const products: Product[] = [
  // 6種類の商品データを追加
  { id: 1, name: 'サンプルA', category: 'カテゴリA', price: 10000 },
  { id: 2, name: 'サンプルB', category: 'カテゴリB', price: 2000 },
  { id: 3, name: 'サンプルC', category: 'カテゴリC', price: 150000 },
  { id: 4, name: 'サンプルD', category: 'カテゴリA', price: 7500 },
  { id: 5, name: 'サンプルE', category: 'カテゴリC', price: 80000 },
  { id: 6, name: 'サンプルF', category: 'カテゴリD', price: 300 },
];

export const categoryData: Category[] = [
    // 6つのデータを追加
    { id: 1, category: 'カテゴリA', value: 100 },
    { id: 2, category: 'カテゴリB', value: 450 },
    { id: 3, category: 'カテゴリC', value: 450 },
    { id: 4, category: 'カテゴリD', value: 300 },
    { id: 5, category: 'カテゴリE', value: 200 },
    { id: 6, category: 'カテゴリF', value: 600 },
];
```

## src/pages

### Dashboard.tsx

```tsx
import { Grid, Paper, Typography } from '@mui/material';
import SalesChart from '../components/SalesChart';
import UserStatsChart from '../components/UserStatsChart';
import CategoryChart from '../components/CategoryChart';
import SalesPieChart from '../components/SalesPieChart';

const Dashboard = () => {
  return (
    <div>
      <Typography variant='h4' gutterBottom>
        ダッシュボード
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant='h6' gutterBottom>
              ユーザー統計
            </Typography>
            <UserStatsChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant='h6' gutterBottom>
              売上データ
            </Typography>
            <SalesChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant='h6' gutterBottom>
              商品カテゴリ別の割合
            </Typography>
            <CategoryChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant='h6' gutterBottom>
              商品別の売上金額
            </Typography>
            <SalesPieChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
```

### Products.tsx

```tsx
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { products } from "../data/productData";

const Products = () => {
  return (
    <Box>
      <Typography variant='h4' gutterBottom>
        ダッシュボード
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>商品名</TableCell>
            <TableCell>カテゴリ</TableCell>
            <TableCell>価格</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
  
export default Products;
```