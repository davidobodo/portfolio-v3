import styles from "./styles.module.scss";
import Link from "next/link";

export default function ShareArticle() {
	return (
		<div className={styles.container}>
			<Link href="" passHref>
				<a>
					Tweet this article
					<span></span>
				</a>
			</Link>

			<Link href="" passHref>
				<a>
					Discuss on Twitter
					<span></span>
				</a>
			</Link>
		</div>
	);
}
