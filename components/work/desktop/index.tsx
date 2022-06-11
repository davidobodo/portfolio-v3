import styles from "./styles.module.scss";
import { WORK } from "#/constants";
import { Ref } from "react";

export type ViewDesktopProps = {
    workContainerRef: Ref<HTMLDivElement>;
    workTabsRef: Ref<HTMLDivElement>;
    activeWorkBgGradient: Ref<HTMLLIElement>;
    workTitlesContainerRef: Ref<HTMLUListElement>;
    workDetailsContainerRef: Ref<HTMLDivElement>;
};
export default function ViewDesktop({
    workContainerRef,
    workTabsRef,
    activeWorkBgGradient,
    workTitlesContainerRef,
    workDetailsContainerRef
}: ViewDesktopProps) {
    return (
        <div className={styles.container} ref={workContainerRef}>
            <div className={styles.contentWrapper} ref={workTabsRef}>
                <div className={styles.tabs}>
                    <div className={styles.tabHeadersContainer}>
                        <ul className={styles.tabHeaders} ref={workTitlesContainerRef}>
                            <li className={styles.bgGradient} ref={activeWorkBgGradient}></li>
                            {WORK.map((item, i) => {
                                return (
                                    <li className={styles.tabHeader} key={i}>
                                        {item.company}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={styles.tabDetails} ref={workDetailsContainerRef}>
                        {WORK.map((item, i) => {
                            const { title, company, location, range, url } = item;
                            return (
                                <div className={styles.tabDetail} key={i} data-goto={`active-work-${i}`}>
                                    <section>
                                        <h4>{company}</h4>
                                        <p>
                                            To cancel unwanted external sound, <br /> AirPods Max use a total of six{" "}
                                            <br /> outward-facing microp
                                        </p>

                                        <ul>
                                            <li>Title : {title}</li>
                                            <li>Location : {location}</li>
                                            <li>Company Url : {url}</li>
                                            <li>{range}</li>
                                        </ul>
                                    </section>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <SectionBgSVG text="work" />
            </div>
        </div>
    );
}

function SectionBgSVG({ text, color = "rgba(255, 255, 255, 0.02)" }: { text: string; color?: string }) {
    return (
        <div id="work-svg" className={styles.svgContainer}>
            <svg className={styles.svgAnimation}>
                <text x="0" y="95%" stroke={color} fill={color}>
                    {text}
                </text>
            </svg>
        </div>
    );
}
