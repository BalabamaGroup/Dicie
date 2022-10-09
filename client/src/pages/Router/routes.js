import { ROUTES } from "./consts";

import About from "../About";
import Contact from "../Contact";
import Home from "../Home";

export const authRoutes = [
  {
    path: ROUTES.SIGN_UP,
    Component: About,
  },
  {
    path: ROUTES.SIGN_IN,
    Component: About,
  },
];

export const publicRoutes = [
  {
    path: ROUTES.ABOUT,
    Component: About,
  },
  {
    path: ROUTES.CONTACT,
    Component: Contact,
  },
  {
    path: ROUTES.HOME,
    Component: Home,
  },
];
