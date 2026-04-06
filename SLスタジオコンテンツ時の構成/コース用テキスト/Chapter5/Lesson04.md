# Lesson04：【テキスト】React+APIでのダッシュボード実装

## はじめに

このLessonでは、Lesson02で整理した実装計画に基づき、ダッシュボード画面の各コンポーネントを実装する手順を解説します。

---

## タスク1：ユーザー統計グラフの作成

### 対象ファイル
`src/components/UserStatsChart.tsx`

### 実装内容

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

## タスク2：売上データグラフの作成

### 対象ファイル
`src/components/SalesChart.tsx`

### 実装内容

日別・週別・月別のデータを切り替える機能付きの折れ線グラフです。

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
        <button onClick={() => handleDataChange('daily')}>日別</button>
        <button onClick={() => handleDataChange('weekly')}>週別</button>
        <button onClick={() => handleDataChange('monthly')}>月別</button>
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

**ポイント：**
- `useState` で表示するデータセットとperiodを管理
- ボタンクリックで `handleDataChange` を呼び出しデータを切り替える

---

## タスク3：商品データの作成

### 対象ファイル
`src/data/productData.ts`

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

## タスク4：円グラフの作成

### CategoryPieChart.tsx

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

### SalesPieChart.tsx

SalesPieChartも同様の構造で、`salesData.ts` の `productSalesData` を利用して作成します。

---

## タスク5：ダッシュボードの修正

### 対象ファイル
`src/pages/Dashboard.tsx`

`PlaceholderChart` を削除し、作成したグラフコンポーネントをインポートして配置します。

```tsx
import UserStatsChart from '../components/UserStatsChart';
import SalesChart from '../components/SalesChart';
import CategoryPieChart from '../components/CategoryPieChart';
import SalesPieChart from '../components/SalesPieChart';
```

グリッドレイアウトで4つのグラフを2×2に配置すると見やすいダッシュボードになります。

---

## タスク6：商品一覧ページの追加

### 対象ファイル
- `src/pages/Products.tsx` ← 新規作成
- `src/App.tsx` ← ルーティング追加
- `src/components/SideMenu.tsx` ← メニュー項目追加

### Products.tsx

テーブルで商品情報（ID・商品名・カテゴリ・価格）を表示するページを作成します。

### App.tsx

```tsx
<Route path="/products" element={<Products />} />
```

### SideMenu.tsx

商品一覧ページへのリンクを追加します。

---

## 本Lessonのまとめ

- 各グラフコンポーネントの実装手順を確認した
- Rechartsを使って棒グラフ・折れ線グラフ・円グラフを作成する方法を学んだ
- ダッシュボード画面への統合方法を理解した
- 次のLessonでは、これらの実装を自力で行う課題に取り組みます
