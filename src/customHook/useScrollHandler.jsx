import { useEffect,useState } from "react";

export const useScrollHandler = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 0;
      setScroll(scrollCheck);
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};