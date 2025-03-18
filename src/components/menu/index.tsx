import { FC, useState } from "react";

import S from "./index.module.scss";
import clsx from "clsx";

type MenuProps = {
  onClick: () => void;
};

const Menu: FC<MenuProps> = ({ onClick }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleClick = () => {
    setVisible(!visible);
    onClick();
  };

  return (
    <>
      <button
        className={clsx(S.hamburger, visible && S.active)}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
      </button>
    </>
  );
};

export default Menu;
