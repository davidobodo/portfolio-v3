export default function Placeholder({ styles, containerRef }: { styles?: Record<string, string | number> }) {
	return <div style={{ ...styles }} ref={containerRef}></div>;
}
