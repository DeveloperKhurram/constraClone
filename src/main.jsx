import { createRoot } from "react-dom/client";
import "./index.css";
import "./css/typography.css";
import "./fonts/fontAwesomeLibrary.js";
import { ThemeProvider } from "@material-tailwind/react";
import Layout from "./Layout.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<Home />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
