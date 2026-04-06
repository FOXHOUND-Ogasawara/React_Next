# Lesson02：【実装課題】Weather APIのデータ取得と表示

## 課題の概要

Lesson01ではCat APIから画像データを取得して表示しました。

このLessonでは、**OpenWeatherMap API** を使って天気情報を取得し、**選択した地域に応じた天気情報を表示するアプリケーション**を実装します。

---

## 課題の仕様

### 機能要件

1. OpenWeatherMap APIから天気情報を取得して画面に表示する
2. 表示する情報
   - **天気アイコン**
   - **気温**（摂氏）
3. **地域選択機能**を実装する
   - プルダウン（セレクトボックス）で地域を選択できるようにする
   - 選択した地域の天気情報が表示される

### API情報

| 項目 | 設定値 |
|---|---|
| HTTPメソッド | `GET` |
| エンドポイント | `https://api.openweathermap.org/data/2.5/weather` |
| 必須パラメータ | `q`（都市名）, `appid`（APIキー） |
| 推奨パラメータ | `units=metric`（摂氏）, `lang=ja`（日本語） |

### リクエスト例

```
https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&lang=ja&appid=YOUR_API_KEY
```

### レスポンス例

```json
{
  "weather": [
    {
      "description": "晴天",
      "icon": "01d"
    }
  ],
  "main": {
    "temp": 25.3
  }
}
```

### 天気アイコンの表示方法

天気アイコンは以下のURLで画像として取得できます。

```
https://openweathermap.org/img/wn/{アイコンコード}@2x.png
```

例：`https://openweathermap.org/img/wn/01d@2x.png`

---

## 実装のステップ

### 段取り（実装前に整理しましょう）

以下の手順で進めてみてください。

1. **APIから取得した情報の確認**
   - Thunder Clientで事前にレスポンスを確認し、必要なデータの場所を把握する
   - 気温：`main.temp`
   - アイコン：`weather[0].icon`

2. **天気情報の表示**
   - コンポーネントの作成
   - `fetch` を使った通信処理の実装
   - `useState` でデータを管理
   - データを画面に表示

3. **地域選択機能の追加**
   - 地域が選択できるようにプルダウン（`<select>`）を追加
   - 選択された地域を `useState` で管理
   - stateの状態に応じてfetch先のURLの `q=○○` 部分を変更する

### 地域データの例

```tsx
const areas = [
  { name: '東京', query: 'Tokyo' },
  { name: '大阪', query: 'Osaka' },
  { name: '名古屋', query: 'Nagoya' },
  { name: '福岡', query: 'Fukuoka' },
  { name: '札幌', query: 'Sapporo' },
];
```

---

## 実装のヒント

### APIキーの扱い

APIキーはソースコード内に直接記述して構いません。

```tsx
const API_KEY = "あなたのAPIキー";
const URL = "https://api.openweathermap.org/data/2.5/weather";
```

### 地域変更時にデータを再取得する

`useEffect` の依存配列にstateを指定すると、**そのstateが変更されるたびに再実行**されます。

```tsx
const [selectedArea, setSelectedArea] = useState('Tokyo');

useEffect(() => {
  fetch(`${URL}?q=${selectedArea}&units=metric&lang=ja&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => setWeatherData(data))
    .catch(error => console.error(error));
}, [selectedArea]); // selectedAreaが変更されるたびに再実行
```

### プルダウンの実装

```tsx
<select value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)}>
  {areas.map((area) => (
    <option key={area.query} value={area.query}>
      {area.name}
    </option>
  ))}
</select>
```

---

## 差分確認と整理

実装が完了したら、以下の手順で整理を行ってください。

### 1. 動作確認

- 各地域を選択して天気情報が正しく表示されるか確認する
- DevToolsのNetworkタブでAPIリクエストが正しく送信されているか確認する

### 2. VSCodeのソース管理タブで差分を確認

- `Ctrl + Shift + G` でソース管理タブを開く
- 変更したファイルをクリックして差分を確認する
- 以下を確認する
  - 不要な `console.log` が残っていないか
  - コメントアウトした不要なコードが残っていないか
  - 意図しない変更が含まれていないか

### 3. コミット

差分確認が完了したら、Git入門コースで学んだ手順でコミットしましょう。

```bash
git add .
git commit -m "Weather APIの実装完了"
```

---

## 本Lessonのまとめ

- OpenWeatherMap APIから天気情報を取得し、Reactで画面に表示できた
- `useEffect` の依存配列を活用して、**stateの変更をトリガーにAPIを再呼び出し**できる
- 実装後は **差分確認 → 不要コード除去 → コミット** の整理を行う
- 次のChapterでは、ローカルのPostgreSQLと連携したCRUD処理に挑戦します
