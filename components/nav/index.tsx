import { useEffect, useState } from "react";
import { Logo } from "../index";
export default function Nav() {
    const [showLogo, setShowLogo] = useState(false);
    const handlescroll = () => {
        if (window.pageYOffset >= 180) {
            setShowLogo(true);
        } else {
            setShowLogo(false);
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
                zIndex: 1000,
                left: "5rem",
                top: "4rem",
                opacity: showLogo ? 1 : 0
            }}
        />
    );
}
