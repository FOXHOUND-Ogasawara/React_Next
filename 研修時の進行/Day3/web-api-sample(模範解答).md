# web-api-sample

本来であれば2つのプロジェクトを作成してもらいますが、
模範解答用のプロジェクトは見やすいようにひとつにまとめてます。

### App.tsx

```tsx
import { AppBar, Button, Container, Toolbar } from "@mui/material";
import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Weather from "./components/Weather";
import Cat from "./components/Cat";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/weather">
            お天気
          </Button>
          <Button color="inherit" component={Link} to="/cat">
            猫ちゃん
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/weather" element={<Weather />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/" element={<Weather />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App;
```

### Header.tsx

```tsx
// src/components/Header.tsx
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6">
          サンプルアプリケーション
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
```

### Cat.tsx

```tsx
// src/components/Cat.tsx
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

const Cat: React.FC = () => {
  const [catImage, setCatImage] = useState<string>("");
  const URL = "https://api.thecatapi.com/v1/images/search";

  const fetchCatImage = () => {
    fetch(URL)
    .then(response => response.json())
    .then(data => setCatImage(data[0].url))
    .catch(error => console.error("猫ちゃんの画像取得に失敗しました " + error));
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <Box textAlign="center" mt={5}>
      {catImage && (
        <img src={catImage} alt="猫ちゃん" style={{ maxWidth: '100%', height: 'auto' }} />
      )}
      <Button variant="contained" color="primary" onClick={fetchCatImage} sx={{ mt: 3 }}>
        別の猫ちゃんを見る
      </Button>
    </Box>
  );
}

export default Cat;
```

### Weather.tsx

```tsx
// src/components/Weather.tsx
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useEffect, useState } from "react";

interface WeatherData {
  weather: { icon: string }[];
  main: { temp: number };
}

const areas = [
  { name: '千代田区', id: 1850147 },
  { name: '中央区', id: 1850158 },
  { name: '港区', id: 1850181 },
];

const Weather: React.FC = () => {
  const [selectArea, setSelectArea] = useState<number>(1850147);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const API_KEY = 'd50ee320c1b52cb666f389e7c33f179d';
  const URL = 'https://api.openweathermap.org/data/2.5/weather';

  useEffect(() => {
    fetch(URL + `?id=${selectArea}&units=metric&lang=ja&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => setWeatherData(data))
    .catch(error => "お天気情報の取得に失敗しました " + error);
  }, [selectArea]);

  const handleChange = (event) => {
    setSelectArea(event.target.value as number);
  }

  return (
    <Box textAlign="center" mt={5}>
      {weatherData && (
        <>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0]}@2x.png`}
            alt="お天気アイコン"
          />
          <Typography variant="h4">
            {weatherData.main.temp}℃
          </Typography>
        </>
      )}
      <FormControl variant="outlined" sx={{ mt: 3, minWidth: 200 }}>
        <InputLabel id="area-select-label">地域を選択</InputLabel>
        <Select
          labelId="area-select-label"
          value={selectArea}
          onChange={handleChange}
          label="地域を選択"
        >
          {areas.map((area) => (
            <MenuItem key={area.id} value={area.id}>
              {area.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
export default Weather;
```