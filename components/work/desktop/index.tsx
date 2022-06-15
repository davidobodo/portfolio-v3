import styles from "./styles.module.scss";
import { WORK } from "#/constants";
import { FaintBgText } from "../../index";
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
                        {/* <div className={styles.btnWrapper}>
                            <a href="">Resume &#8594;</a>
                        </div> */}
                    </div>
                    <div className={styles.tabDetails} ref={workDetailsContainerRef}>
                        {WORK.map((item, i) => {
                            const { title, company, location, range, url, note, urlLabel } = item;
                            return (
                                <div className={styles.tabDetail} key={i} data-goto={`active-work-${i}`}>
                                    <section>
                                        <h4>{company}</h4>
                                        <div className={styles.notes} dangerouslySetInnerHTML={{ __html: note }} />

                                        <span>{range}</span>

                                        <ul>
                                            <li> {title}</li>

                                            {location && <li> {location}</li>}
                                            <li>
                                                <a href={url} target="_blank" rel="noreferrer">
                                                    {urlLabel ? urlLabel : url}
                                                </a>
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <FaintBgText text="work" />
            </div>
        </div>
    );
}
