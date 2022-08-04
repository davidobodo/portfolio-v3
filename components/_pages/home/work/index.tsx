import WorkDesktop, { WorkDesktopProps } from "./desktop";
import WorkMobile, { WorkMobileProps } from "./mobile";

type Props = {} & WorkDesktopProps & WorkMobileProps;
export default function Work({
	workContainerRef,

	mobileWorkContainerRef,
}: Props) {
	return (
		<div>
			<WorkDesktop workContainerRef={workContainerRef} />
			<WorkMobile mobileWorkContainerRef={mobileWorkContainerRef} />
		</div>
	);
}
