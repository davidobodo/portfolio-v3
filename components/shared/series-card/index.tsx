import styles from "./styles.module.scss";

export default function SeriesCard({
	url,
	img = "https://blog.davidobodo.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1665787824519%2Ft8GFTtJwn.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75",
	title,
	summary,
	date,
	time,
}) {
	return (
		<a className={styles.container}>
			<div className={styles.info}>
				{/* <p className={styles.latest}>LATEST</p> */}
				<h3>{title}</h3>

				<p className={styles.summary}>{summary}</p>
				<p className={styles.time}>
					<span className={styles.circle}></span>
					{time} read <span className={styles.circle}></span> {date}
				</p>
			</div>
			<div
				className={styles.image}
				style={{
					backgroundImage: `url(${img})`,
				}}
			></div>
		</a>
	);
}
