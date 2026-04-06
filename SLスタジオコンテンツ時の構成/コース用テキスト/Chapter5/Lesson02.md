# Lesson02：【テキスト】ダッシュボード機能の実装計画（段取り）

## はじめに

コードリーディングでプロジェクトの構造を把握したところで、次は **実装の段取り** を組みます。

Chapter1で学んだ通り、実装前にタスクを分解・整理することで、効率的に作業を進めることができます。

---

## 実装するタスクの一覧

ダッシュボード画面に以下の機能を追加します。

| タスク | 内容 | 使用データ |
|---|---|---|
| ユーザー統計グラフ | 棒グラフで月ごとの新規・アクティブユーザー数を表示 | `userData.ts` |
| 売上データグラフ | 折れ線グラフで日別/週別/月別の売上を表示（切り替え機能付き） | `salesData.ts` |
| ダッシュボードの修正 | `PlaceholderChart` を実際のグラフコンポーネントに置き換え | — |
| 商品一覧ページ | テーブルで商品情報を表示する新規ページ | 新規作成 |
| カテゴリ別円グラフ | 商品カテゴリの割合を円グラフで表示 | 新規作成 |
| 商品別売上円グラフ | 商品ごとの売上金額を円グラフで表示 | `salesData.ts` |

---

## 段取りの考え方

### 実装順序の整理

以下の順序で進めるのが効率的です。

1. **まずデータを準備する**
   - 商品データ（`productData.ts`）を作成する
   - カテゴリデータを追加する

2. **個別のコンポーネントを作成する**
   - グラフコンポーネントを1つずつ作成しテスト
   - Rechartsの公式ドキュメントを参照

3. **ダッシュボードに統合する**
   - `PlaceholderChart` を作成したグラフに置き換え

4. **商品一覧ページを作成する**
   - ページコンポーネント作成
   - ルーティング追加
   - サイドメニュー追加

### 利用するライブラリ

グラフの作成には **Recharts** を使用します。

```bash
npm install recharts
```

公式ドキュメント：https://recharts.org/en-US/

---

## タスク分解の例

実装計画を立てる際は、以下のようにタスクを分解します。

```markdown
【タスク1】ユーザー統計グラフの作成
  ・components/ に UserStatsChart.tsx を作成
  ・Recharts の BarChart を使用
  ・userData.ts のデータを利用
  ・X軸：月、Y軸：ユーザー数
  ・新規ユーザーとアクティブユーザーの2系列

【タスク2】売上データグラフの作成
  ・components/ に SalesChart.tsx を作成
  ・Recharts の LineChart を使用
  ・salesData.ts のデータを利用
  ・日別/週別/月別の切り替え機能を実装
    → useState で期間を管理
    → ボタンクリックで表示データを切り替え

【タスク3】商品データの作成
  ・data/ に productData.ts を作成
  ・Product型と Category型のインターフェースを定義
  ・6種類以上の商品データを追加
  ・6種類以上のカテゴリデータを追加

【タスク4】円グラフの作成（2つ）
  ・components/ に CategoryPieChart.tsx を作成
  ・components/ に SalesPieChart.tsx を作成
  ・Recharts の PieChart を使用

【タスク5】ダッシュボードの修正
  ・Dashboard.tsx の PlaceholderChart を削除
  ・作成したグラフコンポーネントをインポートして配置

【タスク6】商品一覧ページの追加
  ・pages/ に Products.tsx を作成
  ・テーブルで商品情報を表示
  ・App.tsx にルーティングを追加
  ・SideMenu.tsx にメニュー項目を追加
```

---

## Rechartsの基本的な使い方

### 棒グラフ（BarChart）の例

```tsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: '1月', newUsers: 400, activeUsers: 240 },
  { month: '2月', newUsers: 300, activeUsers: 139 },
];

<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="newUsers" fill="#8884d8" name="新規ユーザー" />
    <Bar dataKey="activeUsers" fill="#82ca9d" name="アクティブユーザー" />
  </BarChart>
</ResponsiveContainer>
```

### 折れ線グラフ（LineChart）の例

```tsx
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

<ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    <XAxis dataKey="label" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="sales" stroke="#8884d8" name="売上" />
  </LineChart>
</ResponsiveContainer>
```

---

## 本Lessonのまとめ

- 実装前に **タスクを分解** し、実装順序を整理する
- データの準備 → コンポーネント作成 → 統合の順で進める
- Rechartsを使ってグラフコンポーネントを実装する
- 次のLessonでは、この実装計画を自分で作成する課題に取り組みます
