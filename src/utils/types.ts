import { ReactElement } from "react";

type TRouter = {
  title: string;
  path: string;
  element: ReactElement;
  children?: TRouter[];
};

type TMenu = {
  title: string;
  key: string;
};

export type { TRouter, TMenu };
