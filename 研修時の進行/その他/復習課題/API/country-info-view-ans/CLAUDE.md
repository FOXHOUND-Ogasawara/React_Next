## 言語設定

**重要**: このプロジェクトでは、必ず日本語で回答してください。技術用語は必要に応じて英語のまま使用可能です。

## Common Development Tasks

*   **Start development server**: `npm run dev`
*   **Build for production**: `npm run build`
*   **Run linter**: `npm run lint`
*   **Preview production build**: `npm run preview`

## High-Level Code Architecture

This is a React application built with Vite and TypeScript for displaying country information, likely fetched from the REST Countries API. It uses `react-router-dom` for client-side routing.

### Directory Structure

*   **`public/`**: Public assets.
*   **`src/`**: Main source code.
    *   **`assets/`**: Static assets (images, etc.).
    *   **`components/`**: Reusable React components (e.g., `CountryList`, `CountryItem`, `CountryFilter`).
    *   **`pages/`**: Page-level components (e.g., `Home.tsx`, `CountryDetail.tsx`).
    *   **`types/`**: TypeScript type definitions.
    *   **`App.tsx`**: Main application component, handles routing.
    *   **`main.tsx`**: Application entry point.
    *   **`App.css`**, **`index.css`**: Global and application-specific styles.

### Key Technologies

*   **React**: Frontend library.
*   **TypeScript**: Statically typed JavaScript.
*   **Vite**: Fast build tool and development server.
*   **ESLint**: Code quality linting.
*   **react-router-dom**: For routing within the single-page application.

### Core Functionality

The application is designed to:

1.  Display a list of countries, including flag, name, region, and population.
2.  Allow filtering of countries by region.
3.  Provide search functionality by country name.
4.  Enable sorting of countries by name or population.
5.  (Optional) Display detailed information for a selected country on a dedicated page.