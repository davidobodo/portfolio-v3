import Head from "next/head";
import styles from "#/styles/_pages/letters.module.scss";
import { NextPage } from "next";
import { useRef } from "react";
import { SingleLetter, Nav, Layout, Noise, Banners, BannerCurtain, Contact } from "#/components";
import { LETTERS } from "#/constants/letters";
import { useGenericPageInit, useWindowSize } from "#/hooks";

const Letters: NextPage = () => {
	const darkSectionRef = useRef(null);

	const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();
	const { textWrapperRef, scrollIndicatorRef, bannerRef, blackCoverRef, bannerHeight } = useGenericPageInit({
		windowInnerHeight,
		windowInnerWidth,
		darkSectionRef,
	});

	return (
		<>
			<Head>
				<title>David Obodo | Letters</title>
				<meta
					name="description"
					content="Software Developer that is highly addicted to Front End Development, yet capable of Full Stack Development3"
				/>
				<link rel="icon" href="/icon-192x192.png" />
			</Head>
			<Nav hasBackdropFilter={false} />
			<BannerCurtain containerRef={blackCoverRef} />
			<Banners.OtherPages
				texts={["Letters", "Thoughts", "Stories", "Ideas"]}
				textWrapperRef={textWrapperRef}
				scrollIndicatorRef={scrollIndicatorRef}
				bannerRef={bannerRef}
				bannerHeight={bannerHeight}
			/>
			<Layout.DarkSection darkSectionRef={darkSectionRef}>
				<div className={styles.container}>
					<div className={styles.wrapper}>
						<h2>Viewing all letters</h2>
						{LETTERS.map((item, i) => {
							const { url, title, date, time, summary, tags } = item;
							return (
								<SingleLetter
									url={url}
									title={title}
									date={date}
									time={time}
									summary={summary}
									tags={tags}
									key={url}
									i={i}
								/>
							);
						})}
					</div>
				</div>
			</Layout.DarkSection>
			<Noise />
			<Contact />
		</>
	);
};

export default Letters;
