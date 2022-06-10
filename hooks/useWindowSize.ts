import { useState, useEffect } from "react";

const nullDimensions = {
    innerHeight: 0,
    innerWidth: 0,
    outerHeight: 0,
    outerWidth: 0
};

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState(typeof window !== "undefined" ? getDimensions() : nullDimensions);

    function getDimensions() {
        return {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            outerHeight: window.outerHeight,
            outerWidth: window.outerWidth
        };
    }

    function onResize() {
        setWindowSize(getDimensions());
    }

    // set resize handler once on mount and clean before unmount
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("resize", onResize);
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", onResize);
            }
        };
    }, []);

    return windowSize;
}
