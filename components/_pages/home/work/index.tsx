import WorkDesktop, { WorkDesktopProps } from "./desktop";
import WorkMobile, { WorkMobileProps } from "./mobile";

type Props = {} & WorkDesktopProps & WorkMobileProps;
export default function Work({
    workContainerRef,
    workTabsRef,
    activeWorkBgGradient,
    workTitlesContainerRef,
    workDetailsContainerRef,
    mobileWorkDetailsContainerRef,
    mobileWorkTitlesContainerRef,
    mobileWorkContainerRef,
    mobileWorkContentWrapperRef
}: Props) {
    return (
        <div>
            <WorkDesktop
                workContainerRef={workContainerRef}
                workTabsRef={workTabsRef}
                activeWorkBgGradient={activeWorkBgGradient}
                workTitlesContainerRef={workTitlesContainerRef}
                workDetailsContainerRef={workDetailsContainerRef}
            />
            <WorkMobile
                mobileWorkDetailsContainerRef={mobileWorkDetailsContainerRef}
                mobileWorkTitlesContainerRef={mobileWorkTitlesContainerRef}
                mobileWorkContainerRef={mobileWorkContainerRef}
                mobileWorkContentWrapperRef={mobileWorkContentWrapperRef}
            />
        </div>
    );
}
