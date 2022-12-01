import styles from "./styles.module.scss";

export default function SeriesCard({
	img = "https://blog.davidobodo.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1665787824519%2Ft8GFTtJwn.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75",
	title = "Testing Frontend Applications",
	summary = "More often than not, every project has a business deadline to meet up with, a specific time when the business needs to hit the market before other competitors come in and steal the desired market, or before an investor runs out of patience on the funds they invested 😂. Unfortunately, when writing tests - be it before development or after - it always takes a considerable amount of time, so one has to be careful in gauging when exactly to write tests. It almost seems like we are always racing against time, am I right?",
}) {
	return (
		<a className={styles.container}>
			<div className={styles.info}>
				<p className={styles.latest}>LATEST</p>
				<h3>{title}</h3>
				<div className={styles.time}>
					<p>-- 7 mins read -- 27 Nov 2022</p>
				</div>
				<p>{summary}</p>
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
