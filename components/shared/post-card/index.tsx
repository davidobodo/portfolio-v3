import Image from "next/image";
import styles from "./styles.module.scss";

export default function PostCard({ img, title, subtitle, time, date }) {
	return (
		<a className={styles.container}>
			<div className={styles.image} style={{ backgroundImage: `url(${img})` }}>
				<Image src={img} layout="fill" />
			</div>
			<h3>{title}</h3>
			<p>{subtitle}</p>
		</a>
	);
}
