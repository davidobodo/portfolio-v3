import styles from "./HomePageBanner.module.scss";
import Heading from "./heading";
import { RefObject } from "react";
import { ScrollAlert } from "#/components";
import Image from "next/image";
import bannerImg from "#/public/home-banner.jpg";
import classNames from "classnames";

type Props = {
	bannerRef: RefObject<HTMLDivElement>;
	bannerHeight: number | undefined;
	isStatic?: boolean;
};

export default function HomePageBanner({ bannerRef, bannerHeight, isStatic }: Props) {
	const fieldA = "SOFTWARE";
	const fieldB = "DEVELOPER";
	const nameA = "DAVID";
	const nameB = "OBODO";


	function renderBannerHeight(){
		if(isStatic){
			if(bannerHeight){
				return bannerHeight + "px"
			}
			return "100vh"
		}
		return bannerHeight + "px"
	}


	return (
		<>
			<header
				className={classNames(styles.banner, {
					[styles.isStatic]: isStatic,
				})}
				ref={bannerRef}
				style={{ minHeight: renderBannerHeight() }}
			>
				<div className={styles.topSection}>
					<div className={styles.topSectionTexts}>
						<div data-key="field">
							<Heading text={fieldA} revealOrigin="left" isStatic={isStatic} />
							<Heading text={fieldB} revealOrigin="left" isStatic={isStatic} />
						</div>
						<h2 className={styles.subfieldwrapper}>
							<div className={styles.subfieldtext} data-key="sub-field">
								<span></span> Front end addicted
							</div>
						</h2>
					</div>

					<div>
						<div className={styles.desktopImage}>
							<Image src={bannerImg} layout="fill" objectFit="cover" alt="Profile picture" />
							<span className={styles.blind} data-key="desktop-image-blind"></span>
						</div>
						<div className={styles.mobileImage} data-key="mobile-image">
							<Image src={bannerImg} layout="fill" objectFit="cover" alt="Profile picture" />
						</div>
					</div>
				</div>

				<div className={styles.bottomSection}>
					<ScrollAlert propStyles={styles.scrollAlert} />

					<div className={styles.bottomSectionText}>
						<h2 className={styles.subfieldwrapper}>
							<div className={styles.subfieldtext} data-key="sub-field">
								<span></span> Full stack capable
							</div>
						</h2>

						<div data-key="name">
							<Heading text={nameA} revealOrigin="right" isStatic={isStatic} />
							<Heading text={nameB} revealOrigin="right" isStatic={isStatic} />
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
