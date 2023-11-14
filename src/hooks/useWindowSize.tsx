import { useEffect, useState } from "react";

const getWindowSize = () => {
  return window.innerWidth;
};

export default function useWindowSize() {
  const [width, setWidth] = useState(getWindowSize());

  useEffect(() => {
    const onResize = () => {
      setWidth(getWindowSize());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return width;
}
