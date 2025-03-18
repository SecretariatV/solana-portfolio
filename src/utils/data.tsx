import Main from "@layouts/main";

import { TMenu, TRouter } from "./types";
import { lazy } from "react";

const LazyHome = lazy(() => import("@pages/home"));

const ROUTER_DATA: TRouter[] = [
  {
    title: "Main Layout",
    path: "/",
    element: <Main />,
    children: [{ title: "Home", path: "", element: <LazyHome /> }],
  },
];

const MENU_DATA: TMenu[] = [
  { title: "Home", key: "home" },
  { title: "Pricing", key: "pricing" },
  { title: "Discover", key: "discover" },
  { title: "Get Started", key: "started" },
  { title: "About Us", key: "about" },
  { title: "Blog", key: "blog" },
];

export { ROUTER_DATA, MENU_DATA };
