# Lesson02：【実装課題】Weather APIのデータ取得と表示

## 課題の概要

Lesson01ではCat APIから画像データを取得して表示しました。

このLessonでは、**OpenWeatherMap API** を使って天気情報を取得し、**選択した地域に応じた天気情報を表示するアプリケーション** を実装します。

### API情報

| 項目 | 設定値 |
|---|---|
| HTTPメソッド | `GET` |
| エンドポイント | `https://api.openweathermap.org/data/2.5/weather` |
| 必須パラメータ | `q` または `id`（都市）, `appid`（APIキー） |
| 推奨パラメータ | `units=metric`（摂氏）, `lang=ja`（日本語） |

### 天気アイコンの表示方法

天気アイコンは以下のURLで画像として取得できます。

```
https://openweathermap.org/img/wn/{アイコンコード}@2x.png
```

---

## 課題1：天気情報を画面に表示する

### 課題設問

以下の仕様を満たすReactコンポーネント `Weather` を作成してください。

- OpenWeatherMap APIから天気情報を取得する
- 画面に以下を表示する
  - **天気アイコン**（画像）
  - **気温**（摂氏、℃表記）
- コンポーネントが表示されたタイミング（初回レンダリング時）にAPIを呼び出すこと

> **💡 ヒント：** データを取得できない場合は、Chrome DevToolsのConsoleタブとNetworkタブで原因を確認しましょう。

### 解答

```tsx
import { useEffect, useState } from "react";

interface WeatherData {
  weather: { icon: string }[];
  main: { temp: number };
}

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const API_KEY = "あなたのAPIキー";
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  useEffect(() => {
    fetch(URL + `?q=Tokyo&units=metric&lang=ja&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("お天気情報の取得に失敗しました", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {weatherData && (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="お天気アイコン"
          />
          <h2>{weatherData.main.temp}℃</h2>
        </>
      )}
    </div>
  );
};

export default Weather;
```

**ポイント：**
- `WeatherData` インターフェースでレスポンスの型を定義する
- `weatherData.weather[0].icon` でアイコンコードを取得し、画像URLを組み立てる
- `weatherData.main.temp` で気温を取得する

---

## 課題2：地域選択機能を追加する

### 課題設問

課題1で作成したコンポーネントに、以下の機能を追加してください。

- **プルダウン（セレクトボックス）** で地域を選択できるようにする
- 地域を変更したら、選択した地域の天気情報が自動的に取得・表示されること
- 以下の3地域以上を選択肢として用意すること

> **💡 ヒント：** `useEffect` の依存配列にstateを指定すると、そのstateが変更されるたびにAPIが再呼び出しされます。

### 解答

```tsx
import { useEffect, useState } from "react";

interface WeatherData {
  weather: { icon: string }[];
  main: { temp: number };
}

const areas = [
  { name: "千代田区", id: 1850147 },
  { name: "中央区", id: 1850158 },
  { name: "港区", id: 1850181 },
];

const Weather = () => {
  const [selectArea, setSelectArea] = useState<number>(1850147);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const API_KEY = "あなたのAPIキー";
  const URL = "https://api.openweathermap.org/data/2.5/weather";

  useEffect(() => {
    fetch(URL + `?id=${selectArea}&units=metric&lang=ja&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("お天気情報の取得に失敗しました", error));
  }, [selectArea]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectArea(Number(event.target.value));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {weatherData && (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="お天気アイコン"
          />
          <h2>{weatherData.main.temp}℃</h2>
        </>
      )}
      <div style={{ marginTop: "24px" }}>
        <label htmlFor="area-select">地域を選択：</label>
        <select id="area-select" value={selectArea} onChange={handleChange}>
          {areas.map((area) => (
            <option key={area.id} value={area.id}>
              {area.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Weather;
```

**ポイント：**
- `selectArea` をstateで管理し、`useEffect` の依存配列に `[selectArea]` を設定
- `selectArea` が変更されるとAPIが再呼び出しされ、新しい地域の天気が表示される
- 都市の指定はクエリパラメータ `id` を利用（都市名 `q` でも可）

---

## 課題3：差分確認と整理

### 課題設問

実装が完了したら、以下の手順で整理を行ってください。

1. 各地域を選択して天気情報が正しく表示されるか動作確認する
2. DevToolsのNetworkタブでAPIリクエストが正しく送信されているか確認する
3. VSCodeのソース管理タブ（`Ctrl + Shift + G`）で差分を確認する
   - 不要な `console.log` が残っていないか
   - コメントアウトした不要なコードが残っていないか
4. 差分確認が完了したらコミットする

### 解答

```bash
git add .
git commit -m "Weather APIの実装完了"
```

チェック観点：
- `console.log(data)` などのデバッグ用コードが残っていないこと
- コメントアウトした試行錯誤のコードが残っていないこと
- APIキーがハードコーディングされていること自体は本課題ではOK（本番環境では `.env` を使用すべき点を理解しておく）
