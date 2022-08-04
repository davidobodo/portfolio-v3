import styles from "./styles.module.scss";
import Heading from "../heading";
import { RefObject } from "react";
import { ScrollAlert, SectionPlaceholder } from "../../index";

type Props = {
	bannerRef: RefObject<HTMLDivElement>;
	bannerHeight: number | undefined;
};

export default function Banner({ bannerRef, bannerHeight }: Props) {
	const fieldA = "SOFTWARE";
	const fieldB = "DEVELOPER";
	const nameA = "DAVID";
	const nameB = "OBODO";

	return (
		<>
			<div className={styles.banner} ref={bannerRef} style={{ minHeight: bannerHeight + "px" }} data-key="banner">
				<div className={styles.topSection}>
					<div className={styles.topSectionTexts}>
						<div data-key="field">
							<Heading text={fieldA} revealOrigin="left" />
							<Heading text={fieldB} revealOrigin="left" />
						</div>
						<div className={styles.subfieldwrapper}>
							<div className={styles.subfieldtext} data-key="sub-field">
								<span></span> Front end addicted
							</div>
						</div>
					</div>

					<div>
						<div className={styles.desktopImage} data-key="desktop-image">
							<span></span>
						</div>
						<div className={styles.mobileImage} data-key="mobile-image"></div>
					</div>
				</div>

				<div className={styles.bottomSection}>
					<ScrollAlert propStyles={styles.scrollAlert} />

					<div className={styles.bottomSectionText}>
						<div className={styles.subfieldwrapper}>
							<div className={styles.subfieldtext} data-key="sub-field">
								<span></span> Full stack capable
							</div>
						</div>

						<div data-key="name">
							<Heading text={nameA} revealOrigin="right" />
							<Heading text={nameB} revealOrigin="right" />
						</div>
					</div>
				</div>
			</div>
			<SectionPlaceholder styles={{ height: bannerHeight ? bannerHeight + "px" : "100vh" }} />
		</>
	);
}
