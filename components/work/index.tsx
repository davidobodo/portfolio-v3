import styles from "./styles.module.scss";
import { WORK } from "#/constants";
export default function Work() {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.tabs}>
                    <ul className={styles.tabHeaders}>
                        <div className={styles.bgGradient}></div>
                        {WORK.map((item, i) => {
                            return (
                                <li className={styles.tabHeader} key={i}>
                                    {item.company}
                                </li>
                            );
                        })}
                    </ul>

                    <div className={styles.tabDetails}>
                        {WORK.map((item, i) => {
                            const { title, company, location, range, url, work } = item;
                            return (
                                <div className={styles.tabDetail} key={i} data-goto={`active-work-${i}`}>
                                    <section className="tabs__tab-panels__tab-panel__inner">
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
            </div>
        </div>
    );
}
