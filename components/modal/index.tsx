import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.scss";

export default function Modal({ children, show }: { children: JSX.Element; show: boolean }) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [show]);

    const modalContent = show ? (
        <div role="dialog" aria-modal="true" aria-labelledby="" aria-describedby="" className={styles.container}>
            <div className={styles.backdrop}></div>
            <div className={styles.content}>{children}</div>
        </div>
    ) : null;

    if (isBrowser) {
        return createPortal(modalContent, document.getElementById("modal-root") as HTMLElement);
    } else {
        return null;
    }
}
