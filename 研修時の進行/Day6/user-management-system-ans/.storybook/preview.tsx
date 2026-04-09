import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Decorator, Preview } from "@storybook/react";
import theme from "../styles/theme";

// Storybook用のモックデータ
const mockUsers = [
  { id: 1, name: "山田 太郎", email: "taro.yamada@example.com", role: "管理者", deleted: false },
  { id: 2, name: "佐藤 花子", email: "hanako.sato@example.com", role: "ユーザー", deleted: false },
  { id: 3, name: "鈴木 一郎", email: "ichiro.suzuki@example.com", role: "ゲスト", deleted: false },
];

// Storybook環境ではNext.jsのAPIサーバーが存在しないため、
// /api/ へのfetchリクエストをモックしてダミーデータを返す
const originalFetch = window.fetch;
window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = typeof input === "string" ? input : input.toString();

  // /api/users/:id へのリクエスト
  const userByIdMatch = url.match(/\/api\/users\/(\d+)$/);
  if (userByIdMatch) {
    const id = parseInt(userByIdMatch[1]);
    const user = mockUsers.find((u) => u.id === id);

    if (init?.method === "PUT") {
      return new Response(JSON.stringify(user || {}), { status: 200 });
    }
    if (init?.method === "DELETE") {
      return new Response(JSON.stringify(user || {}), { status: 200 });
    }
    // GET
    if (user) {
      return new Response(JSON.stringify(user), { status: 200 });
    }
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  }

  // /api/users へのリクエスト
  if (url.endsWith("/api/users")) {
    if (init?.method === "POST") {
      const body = JSON.parse(init.body as string);
      const newUser = { id: mockUsers.length + 1, ...body, deleted: false };
      return new Response(JSON.stringify(newUser), { status: 201 });
    }
    // GET
    return new Response(JSON.stringify(mockUsers), { status: 200 });
  }

  // その他のリクエストはそのまま通す
  return originalFetch(input, init);
};

const withThemeProvider: Decorator = (Story, context) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

const preview: Preview = {
  decorators: [withThemeProvider],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
