import styles from "./styles.module.scss";

type Props = {
	text: string;
	color?: string;
	containerStyles?: Record<string, string | number>;
	svgStyles?: Record<string, string | number>;
	textStyles?: Record<string, string | number>;
};
export default function FaintBgText({
	text,
	color = "rgba(255, 255, 255, 0.02)",
	containerStyles,
	svgStyles,
	textStyles,
}: Props) {
	return (
		<div data-key="faint-svg" className={styles.svgContainer} style={{ ...containerStyles }}>
			<svg className={styles.svgAnimation} style={{ ...svgStyles }}>
				<text x="0" y="95%" stroke={color} fill={color} style={{ ...textStyles }}>
					{text}
				</text>
			</svg>
		</div>
	);
}
