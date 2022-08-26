import { Ref } from "react";

export default function Placeholder({
	styles,
	containerRef,
}: {
	styles?: Record<string, string | number>;
	containerRef?: Ref<HTMLDivElement>;
}) {
	return <div style={{ ...styles }} ref={containerRef}></div>;
}
