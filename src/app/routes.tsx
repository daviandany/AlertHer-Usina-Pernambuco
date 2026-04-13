import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { ForgotPassword } from "./components/ForgotPassword";
import { SafeHerAppLayout } from "./components/SafeHerAppLayout";
import { RequireAuth } from "./components/RequireAuth";
import { EmergencyPage } from "./components/EmergencyPage";
import { SafetyTipsPage } from "./components/SafetyTipsPage";
import { ResourcesPage } from "./components/ResourcesPage";
import { SafeLocationsPage } from "./components/SafeLocationsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/cadastro",
    Component: Signup,
  },
  {
    path: "/esqueci-senha",
    Component: ForgotPassword,
  },
  {
    Component: RequireAuth,
    children: [
      {
        path: "/app",
        Component: SafeHerAppLayout,
        children: [
          {
            index: true,
            Component: EmergencyPage,
          },
          {
            path: "emergencia",
            Component: EmergencyPage,
          },
          {
            path: "dicas",
            Component: SafetyTipsPage,
          },
          {
            path: "recursos",
            Component: ResourcesPage,
          },
          {
            path: "locais",
            Component: SafeLocationsPage,
          },
        ],
      },
    ],
  },
]);
