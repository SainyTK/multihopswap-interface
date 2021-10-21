import { useEffect, useRef } from "react";

const useOnClickOutside = (callback: () => void) => {
    let ref = useRef<HTMLElement | null>(null);

    useEffect(() => {

        const handleClickOutside = (ev: MouseEvent) => {
            if (ref.current && !ref.current.contains(ev.target as HTMLElement)) {
                callback && callback();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback]);

    return ref;
}

export default useOnClickOutside;