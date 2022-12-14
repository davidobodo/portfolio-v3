// import Image from "next/image";
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
	color = "#000",
}: {
	url: string;
	img: string;
	title: string;
	subtitle: string;
	time: string;
	date: string;
	color: string;
}) {
	const isExternal = url.startsWith("http");
	return (
		<Link href={url} passHref>
			<a className={styles.container} target={isExternal ? "_blank" : "_self"}>
				<div className={styles.image} style={{ backgroundImage: `url(${img})`, backgroundColor: color }}>
					{/* {img && <Image src={img} layout="fill" objectFit="contain" />} */}
				</div>
				<h3>{title}</h3>
				<p className={styles.summary}>{subtitle}</p>
				<p className={styles.time}>
					{/* <span className={styles.circle}></span> */}
					{format(new Date(date), "MMMM Do, YYYY")} <span className={styles.line}></span>
					{time} read
				</p>
			</a>
		</Link>
	);
}
