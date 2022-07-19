import { useEffect, useState } from "react";
import { Logo } from "../index";
export default function Nav({ alwaysVisible = false, color = "#e1dfdd" }: { alwaysVisible?: boolean; color?: string }) {
    // const [isLight, setIsLight] = useState(true);
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
        if (alwaysVisible) {
            setIsVisible(true);
        } else {
            if (typeof window !== "undefined") {
                window.addEventListener("scroll", handlescroll);
            }
            return () => {
                if (typeof window !== "undefined") {
                    window.removeEventListener("scroll", handlescroll);
                }
            };
        }
    }, [alwaysVisible]);
    return (
        <Logo
            style={{
                position: "fixed",
                zIndex: 1003,
                left: "5rem",
                top: "4rem",
                opacity: isVisible ? 1 : 0
            }}
            // color={isLight ? "#e1dfdd" : "#000"}
            color={color}
        />
    );
}
