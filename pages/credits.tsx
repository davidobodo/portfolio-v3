import Head from "next/head";
import styles from "#/styles/_pages/credits.module.scss";
import { Noise, Nav, Layout, Banners, BannerCurtain, AlternatingOpacity, Contact, HeadChildren } from "#/components";
import { useGenericPageInit, useWindowSize, useAlternateTextOpacity, useIsomorphicLayoutEffect } from "#/hooks";
import { useRef } from "react";
import { otherSharedAnimations } from "#/utils/animations";
import { events, registerEvent } from "#/utils/analytics/events";
import { CREDIT_NOTE } from "#/constants";

const { fadeIn } = otherSharedAnimations;
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
		{
			link: "https://greensock.com/forums/topic/29470-gsap-page-transitions-in-nextjs/",
		},
	];

	const PEOPLE: TCredit[] = [
		{
			link: "https://www.linkedin.com/in/oluwaseunadedire/",
			description: "Chief Reviewer - Oluwaseun Adedire",
		},
		{
			link: "https://www.linkedin.com/in/oluwaseunadedire/",
			description: "Assitant chief reviewer - Harmony Orakpoyovwuru",
		},
		{
			link: "https://www.linkedin.com/in/oluwaseunadedire/",
			description: "Home page banner and Contact section - Ifeanyi ",
		},
		{
			link: "https://www.linkedin.com/in/oluwaseunadedire/",
			description: "Home page banner and Contact section - Onos",
		},
		{
			link: "https://www.linkedin.com/in/oluwaseunadedire/",
			description: "Home page banner and Contact section - Lekan",
		},
		{
			link: "https://www.linkedin.com/in/oluwaseunadedire/",
			description: "Home page banner and Contact section - Teenoh",
		},
		{
			link: "https://www.linkedin.com/in/oluwaseunadedire/",
			description: "Home page banner and Contact section - Emma ui/ux",
		},
		{
			link: "https://www.linkedin.com/in/oluwaseunadedire/",
			description: "Home page banner and Contact section - Assurance",
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

	return (
		<>
			<Head>
				<HeadChildren location="credits" />
			</Head>
			<Nav hasBackdropFilter={false} />

			<BannerCurtain containerRef={blackCoverRef} />

			<Banners.OtherPages
				texts={["Design", "_________", "Credits", "_________"]}
				textWrapperRef={textWrapperRef}
				scrollIndicatorRef={scrollIndicatorRef}
				bannerRef={bannerRef}
				bannerHeight={bannerHeight}
			/>

			<Layout.DarkSection darkSectionRef={darkSectionRef} bannerHeight={bannerHeight}>
				<div className={styles.container}>
					<div className={styles.summary}>
						<AlternatingOpacity textsListRef={textsListRef} textsList={CREDIT_NOTE} />
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

						<ul className={styles.list}>
							{PEOPLE.map((item, i) => {
								const { link, description } = item;
								return (
									<ListItem
										key={i}
										role="Chief Reviewer"
										name="Oluwaseun Adedire"
										link={link}
										description={description}
									/>
								);
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

function ListItem({
	link,
	role,
	name,
	description,
}: {
	link: string;
	role?: string;
	name?: string;
	description?: string;
}) {
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
				<a href={link} target="_blank" onClick={handleGAEvent}>
					<span>{description}</span>
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
