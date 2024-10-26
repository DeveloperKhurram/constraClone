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
import {
  Home,
  HomeTwo,
  About,
  Contact,
  Error,
  FAQ,
  NewsLeftBar,
  NewsRightBar,
  NewsSingle,
  ParentMenu,
  People,
  Pricing,
  ProjectSingle,
  Projects,
  ServiceSingle,
  Services,
  Testimonials,
  Typography,
} from "./pages/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<Home />} />
      <Route path="homeTwo" element={<HomeTwo />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="newsLeftBar" element={<NewsLeftBar />} />
      <Route path="newsRightBar" element={<NewsRightBar />} />
      <Route path="" parentMenu element={<ParentMenu />} />
      <Route path="newsSingle" element={<NewsSingle />} />
      <Route path="people" element={<People />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="projectSingle" element={<ProjectSingle />} />
      <Route path="projects" element={<Projects />} />
      <Route path="serviceSingle" element={<ServiceSingle />} />
      <Route path="services" element={<Services />} />
      <Route path="testimonials" element={<Testimonials />} />
      <Route path="typography" typography element={<Typography />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
