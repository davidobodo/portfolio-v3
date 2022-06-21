import styles from "./styles.module.scss";
import { PROJECTS } from "#/constants/projects";

export default function Grid() {
    return (
        <div className={styles.container}>
            {PROJECTS.map((item, i) => {
                const { tech, title, bgImage } = item;
                // const bgImage =
                // "https://images.unsplash.com/photo-1655748403948-96f04e5f2cc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60";

                let isLocked = false;

                // if (activeTech.key !== "all") {
                //     if (!tech.includes(activeTech.key)) {
                //         isLocked = true;
                //     }
                // }
                return (
                    <div key={i} className={styles.box + " " + styles.free}>
                        <div className={styles.boxImage} style={{ backgroundImage: `url(${bgImage})` }}></div>
                        <div className={styles.boxOverlay}></div>
                        <div className={styles.boxCircle}>
                            <span>
                                View <br /> Project
                            </span>
                        </div>
                        <div className="box__lock">
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
