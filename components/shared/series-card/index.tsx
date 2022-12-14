import styles from "./styles.module.scss";
import Link from "next/link";
import { format } from "fecha";

export default function SeriesCard({
	url,
	img = "https://blog.davidobodo.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1665787824519%2Ft8GFTtJwn.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75",
	title,
	summary,
	date,
	time,
}: {
	url: string;
	img: string;
	title: string;
	summary: string;
	date: string;
	time: string;
}) {
	return (
		<Link href={url} passHref>
			<a className={styles.container}>
				<div className={styles.info}>
					<h3>{title}</h3>
					<p className={styles.summary}>{summary}</p>
					<p className={styles.time}>
						{format(new Date(date), "MMMM Do, YYYY")}
						<span className={styles.line}></span>
						{time} read
					</p>
				</div>
				<div
					className={styles.image}
					style={{
						backgroundImage: `url(${img})`,
					}}
				></div>
			</a>
		</Link>
	);
}
