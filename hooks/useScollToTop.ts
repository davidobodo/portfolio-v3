import { useEffect } from "react";

export default function useScrollToTop() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.scrollTo(0, 0);
        }
    }, []);
}
