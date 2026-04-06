# Lesson05：【課題】ダッシュボードの実装

## 課題の概要

Lesson04で学んだ実装手順を参考に、ダッシュボード画面の各機能を **自力で実装** してください。

---

## 実装タスク

### タスク1：ユーザー統計グラフ（棒グラフ）

- `src/components/UserStatsChart.tsx` を作成
- `userData.ts` のデータを使用
- Rechartsの `BarChart` で棒グラフを表示

### タスク2：売上データグラフ（折れ線グラフ）

- `src/components/SalesChart.tsx` を作成
- `salesData.ts` のデータを使用
- Rechartsの `LineChart` で折れ線グラフを表示
- **日別・週別・月別の切り替え機能**を実装

### タスク3：商品データの作成

- `src/data/productData.ts` を作成
- 6種類以上の商品データと6種類以上のカテゴリデータを定義

### タスク4：円グラフ（2つ）

- `src/components/CategoryPieChart.tsx`（カテゴリ別割合）
- `src/components/SalesPieChart.tsx`（商品別売上金額）
- Rechartsの `PieChart` を使用

### タスク5：ダッシュボードの修正

- `Dashboard.tsx` の `PlaceholderChart` を削除
- 作成した4つのグラフコンポーネントを配置

### タスク6：商品一覧ページの追加

- `src/pages/Products.tsx` を作成
- テーブルで商品情報を表示
- `App.tsx` へのルーティング追加
- `SideMenu.tsx` へのメニュー項目追加

---

## チェックリスト

- [ ] ユーザー統計の棒グラフが表示される
- [ ] 売上データの折れ線グラフが表示される
- [ ] 日別/週別/月別の切り替えが正常に動作する
- [ ] カテゴリ別の円グラフが表示される
- [ ] 商品別売上の円グラフが表示される
- [ ] ダッシュボード画面に4つのグラフが配置されている
- [ ] 商品一覧ページが正しく表示される
- [ ] サイドメニューから商品一覧ページに遷移できる

---

## Gitブランチの運用

タスクごとにブランチを切って作業し、完了したらmainブランチにマージしましょう。

```bash
# タスク1のブランチを作成
git checkout -b feature/user-stats-chart

# 作業完了後
git add .
git commit -m "ユーザー統計グラフの追加"
git checkout main
git merge feature/user-stats-chart
```

---

## 本Lessonのまとめ

- ダッシュボードの全機能を自力で実装した
- Gitブランチを切って作業し、タスクごとにコミットする運用を実践した
- 次のLessonでは差分確認と実装結果の整理を行います
