import { useEffect } from "react";
import AOS from "aos";


export const useAos = (duration) => {
    useEffect(() => {
        AOS.init({ duration: duration });
      }, [duration]);
}
