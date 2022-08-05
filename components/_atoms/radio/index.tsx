import styles from "./styles.module.scss";
export default function Radio({
	id,
	name,
	value,
	onchange,
	checked,
}: {
	id: string;
	name: string;
	value: string;
	onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	checked: boolean;
}) {
	return (
		<div className={styles.container}>
			<input type="radio" id={id} name={name} value={value} onChange={onchange} checked={checked} />
			<span></span>
			<span></span>
		</div>
	);
}
