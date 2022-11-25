import styles from "./styles.module.scss";

export default function SeriesCard({
	img = "https://blog.davidobodo.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1665787824519%2Ft8GFTtJwn.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75",
	title = "Testing Frontend Applications",
	summary = "I have always known that documenting has a great impact. Ranging from documenting our sorrowful moments, happy moments, sad moments, joyful moments, and Im",
}) {
	return (
		<a className={styles.container}>
			<div
				className={styles.image}
				style={{
					backgroundImage: `url(${img})`,
				}}
			></div>
			<h3>{title}</h3>
			<p>{summary}</p>
		</a>
	);
}
