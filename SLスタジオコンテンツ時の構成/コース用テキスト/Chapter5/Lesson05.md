# Lesson05：【課題】ダッシュボードの実装

## 課題の概要

Lesson04で学んだ実装手順を参考に、ダッシュボード画面の各機能を **自力で実装** してください。

---

## 課題1：ユーザー統計グラフ（棒グラフ）の作成

### 課題設問

`src/components/UserStatsChart.tsx` を新規作成し、以下の仕様を満たすコンポーネントを実装してください。

- `userData.ts` のデータを利用する
- Rechartsの `BarChart` で棒グラフを表示する
- X軸に月名、Y軸にユーザー数を表示する
- 「新規ユーザー」と「アクティブユーザー」の2系列を表示する

### 解答

```tsx
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { userData } from '../data/userData';

const UserStatsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
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

---

## 課題2：売上データグラフ（折れ線グラフ）の作成

### 課題設問

`src/components/SalesChart.tsx` を新規作成し、以下の仕様を満たすコンポーネントを実装してください。

- `salesData.ts` のデータを利用する
- Rechartsの `LineChart` で折れ線グラフを表示する
- **日別・週別・月別の切り替え機能**を実装する（ボタンクリックで切り替え）

### 解答

```tsx
import { useState } from 'react';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { dailySalesData, weeklySalesData, monthlySalesData } from '../data/salesData';

interface SalesData {
  label: string;
  sales: number;
}

const SalesChart = () => {
  const [data, setData] = useState<SalesData[]>(dailySalesData);
  const [period, setPeriod] = useState('daily');

  const handleDataChange = (selectedPeriod: string) => {
    setPeriod(selectedPeriod);
    if (selectedPeriod === 'daily') setData(dailySalesData);
    else if (selectedPeriod === 'weekly') setData(weeklySalesData);
    else if (selectedPeriod === 'monthly') setData(monthlySalesData);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => handleDataChange('daily')}
          style={{ fontWeight: period === 'daily' ? 'bold' : 'normal' }}
        >
          日別
        </button>
        <button
          onClick={() => handleDataChange('weekly')}
          style={{ fontWeight: period === 'weekly' ? 'bold' : 'normal' }}
        >
          週別
        </button>
        <button
          onClick={() => handleDataChange('monthly')}
          style={{ fontWeight: period === 'monthly' ? 'bold' : 'normal' }}
        >
          月別
        </button>
      </div>
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
};

export default SalesChart;
```

---

## 課題3：商品データの作成

### 課題設問

`src/data/productData.ts` を新規作成し、以下の仕様を満たすモックデータを定義してください。

- `Product` インターフェース（id, name, category, price）を定義
- `Category` インターフェース（id, category, value）を定義
- 6種類以上の商品データ配列 `products` をエクスポート
- 6種類以上のカテゴリデータ配列 `categoryData` をエクスポート

### 解答

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
  { id: 1, name: 'サンプルA', category: 'カテゴリA', price: 10000 },
  { id: 2, name: 'サンプルB', category: 'カテゴリB', price: 2000 },
  { id: 3, name: 'サンプルC', category: 'カテゴリC', price: 150000 },
  { id: 4, name: 'サンプルD', category: 'カテゴリA', price: 7500 },
  { id: 5, name: 'サンプルE', category: 'カテゴリC', price: 80000 },
  { id: 6, name: 'サンプルF', category: 'カテゴリD', price: 300 },
];

export const categoryData: Category[] = [
  { id: 1, category: 'カテゴリA', value: 100 },
  { id: 2, category: 'カテゴリB', value: 450 },
  { id: 3, category: 'カテゴリC', value: 450 },
  { id: 4, category: 'カテゴリD', value: 300 },
  { id: 5, category: 'カテゴリE', value: 200 },
  { id: 6, category: 'カテゴリF', value: 600 },
];
```

---

## 課題4：円グラフ（2つ）の作成

### 課題設問

以下の2つのコンポーネントを新規作成してください。

1. `src/components/CategoryPieChart.tsx` — カテゴリ別の割合を円グラフで表示
2. `src/components/SalesPieChart.tsx` — 商品別の売上金額を円グラフで表示

いずれも Recharts の `PieChart` を使用すること。

### 解答

**CategoryPieChart.tsx：**

```tsx
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { categoryData } from '../data/productData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA00FF', '#AA9032'];

const CategoryPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={categoryData} dataKey="value" nameKey="category" cx="50%" cy="50%" outerRadius={80} label>
          {categoryData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CategoryPieChart;
```

**SalesPieChart.tsx：**

```tsx
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { productSalesData } from '../data/salesData';

const COLORS = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'];

const SalesPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={productSalesData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
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

---

## 課題5：ダッシュボードの修正

### 課題設問

`Dashboard.tsx` から `PlaceholderChart` を削除し、課題1〜4で作成した4つのグラフコンポーネントを配置してください。2×2のグリッドレイアウトで表示すること。

### 解答

```tsx
import UserStatsChart from '../components/UserStatsChart';
import SalesChart from '../components/SalesChart';
import CategoryPieChart from '../components/CategoryPieChart';
import SalesPieChart from '../components/SalesPieChart';

const Dashboard = () => {
  return (
    <div>
      <h2>ダッシュボード</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div>
          <h3>ユーザー統計</h3>
          <UserStatsChart />
        </div>
        <div>
          <h3>売上データ</h3>
          <SalesChart />
        </div>
        <div>
          <h3>商品カテゴリ別の割合</h3>
          <CategoryPieChart />
        </div>
        <div>
          <h3>商品別の売上金額</h3>
          <SalesPieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
```

---

## 課題6：商品一覧ページの追加

### 課題設問

以下の3ファイルを修正・作成し、商品一覧ページを追加してください。

1. `src/pages/Products.tsx` — テーブルで商品情報（ID・商品名・カテゴリ・価格）を表示
2. `src/App.tsx` — `/products` へのルーティングを追加
3. `src/components/SideMenu.tsx` — サイドメニューに「商品一覧」リンクを追加

### 解答

**Products.tsx：**

```tsx
import { products } from '../data/productData';

const Products = () => {
  return (
    <div>
      <h2>商品一覧</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>商品名</th>
            <th>カテゴリ</th>
            <th>価格</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price.toLocaleString()}円</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
```

**App.tsx（追加部分）：**

```tsx
<Route path="/products" element={<Products />} />
```

**SideMenu.tsx（追加部分）：**

```tsx
<Link to="/products">商品一覧</Link>
```
