import Head from "next/head";
import styles from "#/styles/_pages/letters.module.scss";
import { NextPage } from "next";
import { useRef } from "react";
import { SingleLetter, Nav, Layout, Noise, Banners, BannerCurtain, Footer } from "#/components";
import { LETTERS, METADATA } from "#/constants";
import { useGenericPageInit, useWindowSize } from "#/hooks";

export default function Letters() {
	const darkSectionRef = useRef(null);

	const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();
	const { textWrapperRef, scrollIndicatorRef, bannerRef, blackCoverRef, bannerHeight } = useGenericPageInit({
		windowInnerHeight,
		windowInnerWidth,
		darkSectionRef,
	});

	const { title, description, url, image } = METADATA["letters"];

	LETTERS.sort((a, b) => {
		return new Date(`${b.date}`).getTime() - new Date(`${a.date}`).getTime();
	});
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta property="type" content="website" />
				<meta property="url" content={url} />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="theme-color" content="#e1dfdd" />

				<meta property="title" content={title} />
				<meta name="description" content={description} />
				<meta property="image" content={image} />
				<meta content="image/*" property="og:image:type" />

				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={url} />
				<meta property="og:image" content={image} />
				<meta property="og:site_name" content={title} />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@phitGeek" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={image} />

				<link rel="icon" href="/favicon.ico" />
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
			<Layout.DarkSection darkSectionRef={darkSectionRef} bannerHeight={bannerHeight}>
				<div className={styles.container}>
					<div className={styles.wrapper}>
						<h2>Viewing all letters</h2>
						{LETTERS.map((item, i) => {
							const { url, title, date, time, summary, tags } = item;
							return (
								<SingleLetter url={url} title={title} date={date} time={time} summary={summary} tags={tags} key={url} i={i} />
							);
						})}
					</div>
				</div>
			</Layout.DarkSection>
			<Noise />
			<Footer />
		</>
	);
}

Letters.withAnim = true;
