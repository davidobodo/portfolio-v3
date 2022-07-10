import { useEffect, useState } from "react";
import { Logo } from "../index";
export default function Nav({ timeline }) {
    const [isLight, setIsLight] = useState(false);
    const handlescroll = () => {
        if (window.pageYOffset >= 95) {
            setIsLight(true);
        } else {
            // console.log(timeline.progress());
            // console.log(timeline.totalProgress());
            setIsLight(false);
            // timeline.then(() => {
            //     console.log("in here");
            //     setIsLight(false);
            // });
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
    }, [timeline]);
    return (
        <Logo
            style={{
                position: "fixed",
                zIndex: 1003,
                left: "5rem",
                top: "4rem",
                opacity: isLight ? 1 : 0
            }}
            color={isLight ? "#e1dfdd" : "#000"}
        />
    );
}
