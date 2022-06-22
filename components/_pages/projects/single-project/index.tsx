import styles from "./styles.module.scss";

export default function SingleProject() {
    return (
        <div className={styles.container}>
            <section className={styles.title}>
                <h1>rocket.chat</h1>
                <p>Open Source web chat platform developed as UI/UX Javascript Specialist at Konecty → Rocket.Chat.</p>
            </section>

            <div className={styles.links}>
                <a href="">Visit site</a>
                <a href="">Github repo</a>
            </div>

            <div className={styles.image}></div>

            <section className={styles.about}>
                <h2>About this project</h2>

                <p>
                    On this Open Source project I was responsible for the initial UI/UX architecture, structure, design
                    and animations. The idea was to follow the 3 column UX trend of webchats like skype, hipchat, gitter
                    and slack. Building upon that an Open Source alternative with similar functionalities.
                </p>

                <p>
                    The UI/UX was conceived with a mobile first approach. So it would be possible to effortlessly launch
                    it into any platform without making any changes to the main application.
                </p>
            </section>

            <section className={styles.tech}>
                <h2>Technical Sheet</h2>
                <p>Code technologies I got involved with while working on this project.</p>

                <ul>
                    <li>
                        <span className={styles.circle}></span>UI/UX Design
                    </li>
                    <li>
                        <span className={styles.circle}></span>UI/UX Architecture
                    </li>
                    <li>
                        <span className={styles.circle}></span>UI/UX Animations
                    </li>
                    <li>
                        <span className={styles.circle}></span>HTML5 – semantic, audio, video, canvas
                    </li>
                    <li>
                        <span className={styles.circle}></span>CSS3 – preprocessed with LESS + LESSHAT
                    </li>
                    <li>
                        <span className={styles.circle}></span>Meteor.js
                    </li>
                    <li>
                        <span className={styles.circle}></span>Blaze
                    </li>
                    <li>
                        <span className={styles.circle}></span>MongoDB
                    </li>
                </ul>
            </section>
        </div>
    );
}
