import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function PostCard({ url = "", img = " ", title, subtitle, time, date, color = "#000" }) {
	return (
		<Link href={url} passHref>
			<a className={styles.container}>
				<div className={styles.image} style={{ backgroundImage: `url(${img})`, backgroundColor: color }}>
					{/* {img && <Image src={img} layout="fill" objectFit="contain" />} */}
				</div>
				<h3>{title}</h3>
				<p>{subtitle}</p>
			</a>
		</Link>
	);
}