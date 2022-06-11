import styles from "./styles.module.scss";
import { WORK } from "#/constants";
import { Ref } from "react";

export type ViewMobileProps = {
    mobileWorkDetailsContainerRef: Ref<HTMLDivElement>;
    mobileWorkTitlesContainerRef: Ref<HTMLUListElement>;
    mobileWorkContainerRef: Ref<HTMLDivElement>;
    mobileWorkContentWrapperRef: Ref<HTMLDivElement>;
};
export default function ViewMobile({
    mobileWorkDetailsContainerRef,
    mobileWorkTitlesContainerRef,
    mobileWorkContainerRef,
    mobileWorkContentWrapperRef
}: ViewMobileProps) {
    return (
        <div className={styles.container} ref={mobileWorkContainerRef}>
            <div className={styles.contentWrapper} ref={mobileWorkContentWrapperRef}>
                <div className={styles.tabs}>
                    <div className={styles.bgGradient}></div>
                    <ul className={styles.tabHeaders} ref={mobileWorkTitlesContainerRef}>
                        {WORK.map((item, i) => {
                            return (
                                <li className={styles.tabHeader} key={i}>
                                    {item.company.includes("Upwork") ? "Upwork" : item.company}
                                </li>
                            );
                        })}
                    </ul>

                    <div className={styles.tabDetails} ref={mobileWorkDetailsContainerRef}>
                        {WORK.map((item, i) => {
                            const { title, location, range, url } = item;
                            return (
                                <div className={styles.tabDetail} key={i} data-goto={`active-work-${i}`}>
                                    <section>
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
            </div>
        </div>
    );
}
