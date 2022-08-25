import WorkDesktop, { WorkDesktopProps } from "./desktop";
import WorkMobile, { WorkMobileProps } from "./mobile";

type Props = {} & WorkDesktopProps & WorkMobileProps;
export default function Work({ workContainerRef, mobileWorkContainerRef, onWorkDetailsKeyDown }: Props) {
	return (
		<div>
			<WorkDesktop workContainerRef={workContainerRef} onWorkDetailsKeyDown={onWorkDetailsKeyDown} />
			<WorkMobile mobileWorkContainerRef={mobileWorkContainerRef} />
		</div>
	);
}
