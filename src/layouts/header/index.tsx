import { useState } from "react";
import clsx from "clsx";

import useScrollPosition from "@hooks/useScrollPosition";

import S from "./index.module.scss";
import Logo from "@components/logo";
import Menu from "@components/menu";

const Header = () => {
  const [headerStyle, setHeaderStyle] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useScrollPosition(({ y }) => {
    setHeaderStyle(y > 2);
  });

  const handleOpenMenu = () => {
    setOpen(!open);
  };

  return (
    <header
      className={clsx(
        S.header,
        headerStyle && S.visible,
        open && headerStyle && S.openVisible
      )}
    >
      <div className={S.container}>
        <Logo />
        <Menu onClick={handleOpenMenu} />
      </div>
    </header>
  );
};

export default Header;
