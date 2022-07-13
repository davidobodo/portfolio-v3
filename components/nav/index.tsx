import { useEffect, useState } from "react";
import { Logo } from "../index";
export default function Nav() {
    const [isLight, setIsLight] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const handlescroll = () => {
        // Toggle visibility
        if (window.pageYOffset >= 95) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handlescroll);
        }
        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("scroll", handlescroll);
            }
        };
    }, []);
    return (
        <Logo
            style={{
                position: "fixed",
                zIndex: 1003,
                left: "5rem",
                top: "4rem",
                opacity: isVisible ? 1 : 0
            }}
            color={isLight ? "#e1dfdd" : "#000"}
        />
    );
}
