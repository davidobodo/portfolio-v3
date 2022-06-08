import React, { Ref, useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { DEFAULT_MOBILE_HEIGHT } from "#/constants";

type Props = {
    logoRef: Ref<SVGSVGElement>;
    preloaderBgRef: Ref<HTMLDivElement>;
    windowInnerHeight: number | null;
};

export default function Preloader({ preloaderBgRef, logoRef, windowInnerHeight }: Props) {
    const [bannerHeight, setBannerHeight] = useState<number>(DEFAULT_MOBILE_HEIGHT);
    // Mainly because of the 100vh issue on mobile devices
    useEffect(() => {
        if (windowInnerHeight) {
            setBannerHeight(windowInnerHeight);
        }
    }, [windowInnerHeight]);

    return (
        <div className={styles.preloader} ref={preloaderBgRef} style={{ height: bannerHeight + "px" }}>
            <svg
                width="94"
                height="98"
                viewBox="0 0 94 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                ref={logoRef}
            >
                <path
                    d="M6.23438 1.35938H5.23438V2.35938V70V71H6.23438H30.0938C40.3842 71 48.6749 67.7875 54.3875 61.7332C60.0927 55.6866 63.1094 46.9297 63.1094 36.0625C63.1094 25.217 60.0799 16.5169 54.3664 10.5229C48.6469 4.52257 40.3569 1.35938 30.0938 1.35938H6.23438ZM17.7344 12.4062H29.1094C36.0466 12.4062 41.3143 14.5374 44.8605 18.474C48.4214 22.4268 50.375 28.342 50.375 36.1562C50.375 43.996 48.4321 49.9103 44.8781 53.8561C41.339 57.7854 36.0724 59.9062 29.1094 59.9062H17.7344V12.4062Z"
                    stroke="#FCFCFC"
                    strokeWidth="2"
                />
                <path
                    d="M59.4844 24.2344C49.4929 24.2344 41.2868 27.6885 35.5871 33.9789C29.8975 40.2581 26.7969 49.2612 26.7969 60.2031C26.7969 71.1451 29.8976 80.1369 35.5877 86.4046C41.2879 92.6833 49.494 96.125 59.4844 96.125C69.4518 96.125 77.6575 92.683 83.3631 86.405C89.0589 80.1378 92.1719 71.1461 92.1719 60.2031C92.1719 49.2602 89.059 40.2573 83.3637 33.9785C77.6586 27.6888 69.4529 24.2344 59.4844 24.2344ZM59.4844 35.4688C65.6249 35.4688 70.5586 37.8323 73.9776 42.0425C77.4153 46.2756 79.3906 52.4642 79.3906 60.2031C79.3906 67.918 77.4156 74.0948 73.978 78.3222C70.5589 82.527 65.625 84.8906 59.4844 84.8906C53.3435 84.8906 48.3972 82.5266 44.9663 78.321C41.5174 74.0933 39.5312 67.9167 39.5312 60.2031C39.5312 52.4655 41.5177 46.2771 44.9667 42.0437C48.3975 37.8326 53.3436 35.4688 59.4844 35.4688Z"
                    stroke="#FCFCFC"
                    strokeWidth="2"
                />
            </svg>
        </div>
    );
}
