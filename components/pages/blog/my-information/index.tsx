import styles from "./styles.module.scss";
import Image from "next/image";
import profilePic from "#/public/home-banner.jpg";

export default function MyInformation() {
	return (
		<section className={styles.myInformation}>
			<div className={styles.bottom}>
				<div className={styles.imageWrapper}>
					<Image
						src={profilePic}
						width="180px"
						height="180px"
						objectFit="cover"
						style={{ borderRadius: "50%", flexShrink: 0 }}
						alt="David smiling"
					/>
				</div>

				<div>
					<p>David Obodo is a Fullstack developer, with main focus on Frontend development.</p>
					<p>
						David&apos;s articles are &apos;inspired&apos; by times he{" "}
						<span>found a simpler way to understand a concept or implement a feature</span> and when he{" "}
						<span>had a thought to share</span> (well who doesn&apos;t every once in a while).
					</p>
					<p>
						David writes because <span>teaching is the best way to solidify his own knowledge</span> and to also{" "}
						<span>ease the stress of the reader, with simple explanations.</span>
					</p>
				</div>
			</div>
		</section>
	);
}
