import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import Loading from "@ui/loading";

import { TRouter } from "./types";
import { ROUTER_DATA } from "./data";

const renderRoutes = (routes: TRouter[]) => {
  return routes.map(({ title, path, element, children = [] }: TRouter) => {
    return (
      <Route key={title} path={path} element={element}>
        {children.length > 0 && renderRoutes(children)}
      </Route>
    );
  });
};

const PageRouter = () => {
  const PAGE_ROUTER = renderRoutes(ROUTER_DATA);
  return (
    <Suspense fallback={<Loading />}>
      <Routes>{PAGE_ROUTER}</Routes>
    </Suspense>
  );
};

export default PageRouter;
