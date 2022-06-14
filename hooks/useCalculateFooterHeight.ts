import { useRef, useState, useEffect } from "react";
export default function useCalculateFooterHeight() {
    const footerRef = useRef<HTMLDivElement>(null);
    const [footerHeight, setfooterHeight] = useState<number>(0);

    useEffect(() => {
        if (footerRef.current) {
            setfooterHeight(footerRef.current.clientHeight);
        }
    }, []);
    return {
        footerHeight,
        footerRef
    };
}
