import styles from "./styles.module.scss";
import useBoxAnimation from "./useBoxAnimation";
// import { PROJECTS } from "./constants";
import { PROJECTS } from "#/constants/projects";
import Box from "./box";
import { Button } from "../../../index";
import Heading from "./heading";
import { Ref } from "react";

export default function Project({ projectTitleRef }: { projectTitleRef: Ref<HTMLHeadingElement> }) {
    const {
        imgRef,
        btnRef,
        textRef,
        onMouseEnter,
        onMouseLeave,
        isActive,
        onEnterElement,
        listRef
    } = useBoxAnimation();

    return (
        <>
            <Heading projectTitleRef={projectTitleRef} />
            <div className={styles.container}>
                <Box imgRef={imgRef} btnRef={btnRef} textRef={textRef} isActive={isActive} />
                <ul
                    className={styles.projectsList}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    ref={listRef}
                >
                    {PROJECTS.slice(0, 5).map((item, i) => {
                        // const { title, type, link } = item;
                        const { title, live_link, type } = item;
                        return (
                            <li key={i} onMouseEnter={onEnterElement}>
                                <a href={live_link} className="row">
                                    <h4>{title}</h4>
                                    <p>{type}</p>
                                </a>

                                <span className={styles.number}>{`0${i + 1}`}</span>
                            </li>
                        );
                    })}
                </ul>
                <div className={styles.btnWrapper}>
                    <Button label="View more" />
                </div>
            </div>
        </>
    );
}
