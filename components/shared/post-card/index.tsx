import Link from "next/link";
import styles from "./styles.module.scss";
import { format } from "fecha";

export default function PostCard({
	url = "",
	img = " ",
	title,
	subtitle,
	time,
	date,
}: {
	url: string;
	img: string;
	title: string;
	subtitle: string;
	time: string;
	date: string;
}) {
	const isExternal = url ? url.startsWith("http") : false;

	return (
		<Link href={url ? url : ""} passHref>
			<a className={styles.container} target={isExternal ? "_blank" : "_self"}>
				<div className={styles.image}>
					<div className={styles.imageInner} style={{ backgroundImage: `url(${img})` }}></div>
				</div>
				<h3>{title}</h3>
				<p className={styles.summary}>{subtitle}</p>
				<p className={styles.time}>
					{date && format(new Date(date), "MMMM Do, YYYY")} <span className={styles.line}></span>
					{time} read
				</p>
			</a>
		</Link>
	);
}
