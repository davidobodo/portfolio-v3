import styles from "./styles.module.scss";
// import { IMAGES } from "#/constants";
import { Ref, useEffect, useRef } from "react";
import { expandImage } from "#/utils/animations/atoms";

export default function FirstThought({ textWrapperRef }: { textWrapperRef: Ref<HTMLDivElement> }) {
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imageRef.current) {
            expandImage(imageRef.current);
        }
    }, []);
    return (
        <>
            <div className={styles.container}>
                <div className={styles.textWrapper} ref={textWrapperRef} id="text">
                    <div className={styles.paragraph}>
                        <div className={styles.textLine}>
                            <span>
                                The things we make and the <strong> quality of the work </strong> we do reveal someting
                                <strong> about who we are </strong>, so I always strive to put
                                <strong> excellence into it</strong> .
                            </span>
                        </div>
                    </div>

                    <div className={styles.paragraph}>
                        <div className={styles.textLine}>
                            <span>
                                {" "}
                                From writing <strong> clean and scalable code </strong> for posterity sake, to using the
                                most <strong>efficient algorithms </strong> to ensure
                                <strong> optimal performance because &quot;Speed is king&quot;</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.imageWrapper}>
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url(https://dennissnellenberg.com/assets/img/DSC07312-2.jpg)` }}
                    // style={{ backgroundImage: `url(${IMAGES.one})` }}
                    ref={imageRef}
                ></div>
            </div>
        </>
    );
}
