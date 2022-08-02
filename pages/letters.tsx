import Head from "next/head";
import styles from "#/styles/_pages/letters.module.scss";
import { NextPage } from "next";
import { SingleLetter, Nav, Layout, Noise, Banners, BannerCurtain } from "#/components";
import { LETTERS } from "#/constants/letters";
import { useProjectsLettersInit, useWindowSize } from "#/hooks";

const Letters: NextPage = () => {
	const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();
	const { textWrapperRef, scrollIndicatorRef, bannerRef, blackCoverRef, bannerHeight } = useProjectsLettersInit({
		windowInnerHeight,
		windowInnerWidth,
	});

	return (
		<>
			<Head>
				<title>David Obodo - Letters</title>
				<meta name="description" content="David Obodo's portfolio website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<BannerCurtain containerRef={blackCoverRef} />
			<Banners.OtherPages
				texts={["Letters", "Thoughts", "Stories", "Ideas"]}
				textWrapperRef={textWrapperRef}
				scrollIndicatorRef={scrollIndicatorRef}
				bannerRef={bannerRef}
				bannerHeight={bannerHeight}
			/>
			<Layout.DarkSection>
				<div className={styles.container}>
					<div className={styles.wrapper}>
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
		</>
	);
};

export default Letters;
