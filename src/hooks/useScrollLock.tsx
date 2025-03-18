import { useEffect } from "react";

const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    const body = document.body;

    if (isLocked) {
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.width = "100%";
    } else {
      body.style.overflow = "";
      body.style.position = "";
      body.style.width = "";
    }

    return () => {
      body.style.overflow = "";
      body.style.position = "";
      body.style.width = "";
    };
  }, [isLocked]);
};

export default useScrollLock;
