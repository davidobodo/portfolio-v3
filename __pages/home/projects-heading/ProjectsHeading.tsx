import { Ref } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export default function ProjectHeading({ projectTitleRef, isStatic }: { projectTitleRef: Ref<HTMLHeadingElement>, isStatic?: boolean }) {
	return (
		<h2 className={classNames(styles.sectionTitle, { [styles.isStatic]: isStatic })} ref={projectTitleRef}>
			<span>
				<span>A few</span>
			</span>
			<span>
				<span>select</span>
			</span>
			<span>
				<span>
					<strong>Projects</strong>
				</span>
			</span>
		</h2>
	);
}
