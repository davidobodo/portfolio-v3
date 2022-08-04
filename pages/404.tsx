import Head from "next/head";
import gsap from "gsap";
import styles from "#/styles/_pages/not-found.module.scss";
import { Nav, Noise, DarkRadialGradient, ScrollAlert } from "#/components";
import { useEffect, useRef, useState } from "react";
import { animPageLoaders } from "#/utils/animations/atoms";
import { usePageLeaveAnimationContext } from "#/state";
import { useRouter } from "next/router";
const { openNoiseLayers, drawSvgLogo, closeNoiseLayers } = animPageLoaders;

export default function NotFound() {
	const { pageLeaveAnimation } = usePageLeaveAnimationContext();

	const containerRef = useRef<HTMLDivElement>(null);
	const gradientRef = useRef<HTMLDivElement>(null);
	const scrollRef = useRef<HTMLDivElement>(null);
	const containerSelector = gsap.utils.selector(containerRef);

	const [logoVisibility, setLogoVisibility] = useState(true);

	const router = useRouter();

	const [countdown, setCountdown] = useState(15);
	const [timerId, setTimerId] = useState<NodeJS.Timeout>();

	const redirectToHome = () => {
		closeNoiseLayers({ node: document.querySelectorAll("[data-key='layer']") }).then(() => {
			router.push("/");
		});
	};
	const initRedirectTimer = () => {
		const limit = new Date().getTime() + 16000;
		const id = setInterval(() => {
			const now = new Date().getTime();
			const distance = limit - now;
			const inas = Math.floor((distance % (1000 * 60)) / 1000);
			setCountdown(inas);
		}, 1000);
		setTimerId(id);
	};

	useEffect(() => {
		if (countdown === 0) {
			clearTimeout(timerId);
			redirectToHome();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [countdown, timerId]);

	useEffect(() => {
		return () => {
			clearTimeout(timerId);
		};
	}, [timerId]);

	const pageAnimation = () => {
		const tl = gsap.timeline();

		tl.to(containerSelector('[data-key="section"]'), { opacity: 1, y: 0, stagger: 0.2 });

		return tl;
	};

	useEffect(() => {
		// Navigating to this page directly from the browser url input
		const logo = document.querySelector("[data-key='logo']") as Element;
		const logoChildren = document.querySelectorAll("[data-key='logo'] path");
		const layers = document.querySelectorAll("[data-key='layer']");

		if (pageLeaveAnimation) {
			const master = gsap.timeline();
			master.add(openNoiseLayers(layers));

			return () => {
				master.kill();
			};
		} else {
			const master = gsap.timeline();
			master
				.add(drawSvgLogo(logo, logoChildren))
				.add(openNoiseLayers(layers))
				.add(pageAnimation())
				.add(initRedirectTimer);

			return () => {
				master.kill();
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onStopRedirect = () => {
		clearTimeout(timerId);
		const mortalTexts = containerSelector('[data-key="mortal-text"]');
		const tl = gsap.timeline();

		tl.to(mortalTexts[0], { opacity: 0, y: 100 });
		tl.to(mortalTexts[1], { opacity: 0, y: 100 }, "<");
		tl.to(containerRef.current, { backgroundColor: "#000", color: "#86868b" });
		tl.to(gradientRef.current, { opacity: 1 }, "<");
		tl.add(() => {
			document.querySelector("body")?.classList.remove("hide");
			setLogoVisibility(false);
		});
		tl.to(scrollRef.current, { opacity: 1 });
	};

	return (
		<>
			<Head>
				<title>David Obodo - Lets take you home</title>
				<meta name="description" content="David Obodo's portfolio website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{logoVisibility && <Nav alwaysVisible={true} color="#000" />}

			<div className={styles.main} ref={containerRef}>
				<div className={styles.content}>
					<div className={styles.top} data-key="section">
						<div>
							<h1>
								404 <br /> Page not found.
							</h1>
							<div data-key="mortal-text">
								<h1>Mortals are not allowed here</h1>
								<h1>
									sending you home in <span> {countdown} </span>
								</h1>
							</div>
						</div>
					</div>

					<div className={styles.bottom} data-key="section">
						<div></div>
						<div className={styles.bottomRight} data-key="mortal-text">
							<h1>Wait, I choose to be immortal</h1>
							<button onClick={onStopRedirect}>Remain here</button>
						</div>
					</div>
				</div>
				<ScrollAlert
					containerStyles={{
						opacity: 0,
						color: "#86868b",
						position: "absolute",
						left: "5rem",
						bottom: "5rem",
					}}
					containerRef={scrollRef}
				/>
				<DarkRadialGradient containerRef={gradientRef} containerStyles={{ opacity: 0 }} />
			</div>

			<Noise />
		</>
	);
}
