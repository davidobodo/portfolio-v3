import Head from "next/head";
import styles from "#/styles/_pages/credits.module.scss";
import { Noise, Nav, Layout, Banners, BannerCurtain, AlternatingOpacity, Contact } from "#/components";
import { useGenericPageInit, useWindowSize, useAlternateTextOpacity, useIsomorphicLayoutEffect } from "#/hooks";
import { useEffect, useRef } from "react";
import { sharedAnimations } from "#/utils/animations";
import { events, registerEvent } from "#/utils/analytics/events";
const { fadeIn } = sharedAnimations;
type TCredit = {
	link: string;
	description?: string;
};
export default function Credit() {
	const SITES: TCredit[] = [
		{
			link: "https://www.apple.com/ng/iphone-13-pro/",
		},
		{
			link: "https://mayerr.com/",
		},
		{
			link: "https://dennissnellenberg.com/",
		},
		{
			link: "https://www.richardekwonye.com/",
		},
		{
			link: "https://css-tricks.com/animating-layouts-with-the-flip-technique/",
		},
		{
			link: "https://www.youtube.com/watch?v=vJNVramny9k&feature=youtu.be",
		},

		{
			link: "https://javascript.plainenglish.io/advanced-page-transitions-in-next-js-with-router-events-and-gsap-e8435d2410bb ",
		},
		{
			link: "https://basement.studio/contact",
		},
	];

	const PEOPLE: TCredit[] = [
		{
			link: "https://www.linkedin.com/in/oluwaseunadedire/",
			description: "Reviewer",
		},
		{
			link: "https://www.linkedin.com/in/oluwaseunadedire/",
			description: "Harmony",
		},
		{
			link: "https://jesperlandberg.dev/",
		},
		{
			link: "https://twitter.com/adeolajs",
			description: `Adeols's portfolio gave some inspiration for this work`,
		},

		{
			link: "https://www.linkedin.com/in/oluwaseunadedire/",
			description: "Ifeanyi ",
		},

		{
			link: "https://www.linkedin.com/in/oluwaseunadedire/",
			description: "Onos",
		},
		{
			link: "https://www.linkedin.com/in/oluwaseunadedire/",
			description: "Lekan",
		},
		{
			link: "https://www.linkedin.com/in/oluwaseunadedire/",
			description: "Teenoh",
		},
		{
			link: "https://www.linkedin.com/in/oluwaseunadedire/",
			description: "Emma ui/ux",
		},
	];
	const darkSectionRef = useRef(null);

	const { innerHeight: windowInnerHeight, innerWidth: windowInnerWidth } = useWindowSize();
	const { textWrapperRef, scrollIndicatorRef, blackCoverRef, bannerRef, bannerHeight } = useGenericPageInit({
		windowInnerHeight,
		windowInnerWidth,
		darkSectionRef,
	});
	const { textsListRef } = useAlternateTextOpacity();

	const note = [
		`I am not a "professional designer" by skill`,
		`so in order to bring this portfolio's design to what
        it is,`,
		"I had to research,",
		"draw inspiration",
		"and also learn from what others have done.",
		"For that I would like to acknowledge",
		"works and people",
		"who contributed to the design of this portfolio",
	];

	return (
		<>
			<Head>
				<title>David Obodo | Credits</title>
				<meta
					name="description"
					content="Software Developer that is highly addicted to Front End Development, yet capable of Full Stack Development3"
				/>

				<link rel="icon" href="/icon-192x192.png" />
			</Head>
			<Nav />

			<BannerCurtain containerRef={blackCoverRef} />

			<Banners.OtherPages
				texts={["Design", "_________", "Credits", "_________"]}
				textWrapperRef={textWrapperRef}
				scrollIndicatorRef={scrollIndicatorRef}
				bannerRef={bannerRef}
				bannerHeight={bannerHeight}
			/>

			<Layout.DarkSection darkSectionRef={darkSectionRef}>
				<div className={styles.container}>
					<div className={styles.summary}>
						<AlternatingOpacity textsListRef={textsListRef} textsList={note} />
					</div>

					<section>
						<h2>Sites/Resources</h2>
						<ul className={styles.list}>
							{SITES.map((item, i) => {
								const { link } = item;
								return <ListItem key={i} link={link} />;
							})}
						</ul>
					</section>
					<section>
						<h2>People</h2>

						<ul className={styles.people}>
							{PEOPLE.map((item, i) => {
								const { link } = item;
								return <ListItem key={i} role="Chief Reviewer" name="Oluwaseun Adedire" link={link} />;
							})}
						</ul>
					</section>
				</div>
			</Layout.DarkSection>

			<Noise />
			<Contact />
		</>
	);
}

function ListItem({ link, role, name }: { link: string; role?: string; name?: string }) {
	const ref = useRef<HTMLLIElement>(null);

	useIsomorphicLayoutEffect(() => {
		if (ref.current) {
			const tl = fadeIn({
				node: ref.current,
			});

			return () => {
				tl.scrollTrigger?.kill();
			};
		}
	}, []);

	const handleGAEvent = () => {
		registerEvent(events.pages.credits.viewCredit({ link_url: link }));
	};

	if (role && name) {
		return (
			<li ref={ref}>
				<span>Chief Reviewer</span>
				<span className={styles.lines}></span>
				<a href={link} target="_blank" onClick={handleGAEvent}>
					<span>Oluwaseun Adedire</span>
				</a>
			</li>
		);
	}
	return (
		<li ref={ref}>
			<a href={link} target="_blank" onClick={handleGAEvent}>
				<span>{link}</span>
			</a>
		</li>
	);
}
