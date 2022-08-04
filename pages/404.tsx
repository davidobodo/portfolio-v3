import Head from "next/head";
import gsap from "gsap";
import styles from "#/styles/_pages/not-found.module.scss";
import { Nav, Noise, DarkRadialGradient, ScrollAlert } from "#/components";
import { useEffect, useRef, useState } from "react";
import { use404PageInit } from "#/hooks";
import { animPageLoaders } from "#/utils/animations/atoms";
const { openNoiseLayers, drawSvgLogo, closeNoiseLayers } = animPageLoaders;

export default function NotFound() {
	const { onStopRedirect, countdown, logoVisibility, containerRef, scrollRef, gradientRef } = use404PageInit();

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
				<ScrollAlert propStyles={styles.scrollAlert} containerRef={scrollRef} />
				<DarkRadialGradient containerRef={gradientRef} containerStyles={{ opacity: 0 }} />
			</div>
			<Noise />
		</>
	);
}
