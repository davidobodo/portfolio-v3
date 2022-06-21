import styles from "./styles.module.scss";
import { PROJECTS } from "#/constants/projects";

export default function Grid({ activeKey }: { activeKey: string }) {
    console.log(activeKey, "TEH KEY IN HERE");
    return (
        <div className={styles.container}>
            {PROJECTS.map((item, i) => {
                const { tech, title, bgImage } = item;

                let isLocked = false;

                if (activeKey !== "all") {
                    if (!tech.includes(activeKey)) {
                        isLocked = true;
                    }
                }

                // if (isLocked) return null;
                return (
                    <div
                        key={i}
                        className={isLocked ? styles.box + " " + styles.locked : styles.box + " " + styles.free}
                    >
                        <div className={styles.boxImage} style={{ backgroundImage: `url(${bgImage})` }}></div>
                        <div className={styles.boxOverlay}></div>
                        <div className={styles.boxCircle}>
                            <span>
                                View <br /> Project
                            </span>
                        </div>
                        <div className={styles.boxLock}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-lock"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="rgba(255, 255, 255, 1)"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="5" y="11" width="14" height="10" rx="2" />
                                <circle cx="12" cy="16" r="1" />
                                <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                            </svg>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
