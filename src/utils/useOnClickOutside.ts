import { useEffect, RefObject } from "react";

export const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  handler: (arg0: { target: any }) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent | any) => {
      if (
        ref &&
        ref.current &&
        (!ref.current ||
          ref.current.contains(event.target || event.keyCode !== 27))
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
      document.removeEventListener("keydown", listener);
    };
  }, [ref, handler]);
};
