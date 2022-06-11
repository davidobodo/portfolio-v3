import ViewDesktop, { ViewDesktopProps } from "./desktop";
import ViewMobile, { ViewMobileProps } from "./mobile";

type Props = {} & ViewDesktopProps & ViewMobileProps;
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
            <ViewDesktop
                workContainerRef={workContainerRef}
                workTabsRef={workTabsRef}
                activeWorkBgGradient={activeWorkBgGradient}
                workTitlesContainerRef={workTitlesContainerRef}
                workDetailsContainerRef={workDetailsContainerRef}
            />
            <ViewMobile
                mobileWorkDetailsContainerRef={mobileWorkDetailsContainerRef}
                mobileWorkTitlesContainerRef={mobileWorkTitlesContainerRef}
                mobileWorkContainerRef={mobileWorkContainerRef}
                mobileWorkContentWrapperRef={mobileWorkContentWrapperRef}
            />
        </div>
    );
}
