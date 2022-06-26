// import { PROJECTS } from "./constants";
import { PROJECTS } from "#/constants/projects";
import styles from "./styles.module.scss";
import { Ref } from "react";
export default function Box({
    isActive,
    imgRef,
    btnRef,
    textRef
}: {
    isActive: boolean;
    imgRef: Ref<HTMLDivElement>;
    btnRef: Ref<HTMLDivElement>;
    textRef: Ref<HTMLDivElement>;
}) {
    return (
        <>
            {/* <div className={isActive ? "active mouse-pos-list-image" : "mouse-pos-list-image"} ref={imgRef}> */}
            <div className={isActive ? styles.container + " " + styles.active : styles.container} ref={imgRef}>
                {/* <div className="mouse-pos-list-image-bounce"> */}
                <div className={styles.projectsListBoundary}>
                    {/* <ul className="float-image-wrap"> */}
                    <ul className={styles.projectsList} data-key="projects-list">
                        {PROJECTS.slice(0, 5).map((item, i) => {
                            const { bgColor, bgImage } = item;
                            return (
                                // <li key={i} className="mouse-pos-list-image-inner visible">
                                <li key={i} className={styles.project + " " + styles.visible}>
                                    <span
                                        className={styles.overlayImage}
                                        style={{
                                            backgroundColor: bgColor,
                                            backgroundImage: `url(${bgImage})`
                                        }}
                                    ></span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className={isActive ? styles.btn + " " + styles.active : styles.btn} ref={btnRef}></div>
            <div className={isActive ? styles.text + " " + styles.active : styles.text} ref={textRef}>
                <p>View</p>
            </div>
        </>
    );
}
