import styles from "./styles.module.scss";
import Heading from "../heading";
import { ScrollAlert } from "../../index";

export default function Test() {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <h1>
                        Let <span style={{ backgroundColor: "yellow" }}>t</span>ers
                    </h1>
                    <h1>
                        <span>h</span>
                        <span>o</span>
                        <span>u</span>
                        <span>g</span>
                        <span>h</span>
                        <span>t</span>
                        <span>s</span>
                    </h1>
                    <h1>tories</h1>
                    <h1>
                        <span>d</span>
                        <span>e</span>
                        <span>a</span>
                        <span>s</span>
                    </h1>
                </div>
                <div className={styles.bottom}>
                    <ScrollAlert />
                    {/* <div>DAVID</div> */}
                </div>
            </div>
            <div className={styles.placeholder}></div>
        </>
    );
}
