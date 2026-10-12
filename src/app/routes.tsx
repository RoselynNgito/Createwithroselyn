import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import SchoolMatchCaseStudy from "./pages/SchoolMatchCaseStudy";
import VeridoCaseStudy from "./pages/VeridoCaseStudy";
import { RootLayout } from "./components/RootLayout";

export const routes = [
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/projects",
        Component: ProjectsPage,
      },
      {
        path: "/projects/school-match",
        Component: SchoolMatchCaseStudy,
      },
      {
        path: "/projects/verido",
        Component: VeridoCaseStudy,
      },
    ],
  },
];
