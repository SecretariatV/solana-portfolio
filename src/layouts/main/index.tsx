import { Outlet } from "react-router-dom";

import Footer from "@layouts/footer";
import Header from "@layouts/header";

import S from "./index.module.scss";

const Main = () => {
  return (
    <div className={S.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
