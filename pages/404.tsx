import Head from "next/head";
import styles from "#/styles/_pages/not-found.module.scss";
import { Nav, Noise, DarkRadialGradient, ScrollAlert, Contact } from "#/components";
import { use404PageInit } from "#/hooks";

export default function NotFound() {
	const { onStopRedirect, countdown, containerRef, scrollRef, gradientRef, bannerHeight } = use404PageInit();

	return (
		<>
			<Head>
				<title>David Obodo | Lets take you home</title>
				<meta
					name="description"
					content="Software Developer that is highly addicted to Front End Development, yet capable of Full Stack Development3"
				/>
				<link rel="icon" href="/icon-192x192.png" />
			</Head>
			<Nav />
			<div className={styles.main} ref={containerRef}>
				<header className={styles.content} style={{ minHeight: bannerHeight + "px" }}>
					<div className={styles.top} data-key="section">
						<div>
							<h1>
								404 <br /> Page not found.
							</h1>
							<div data-key="mortal-text">
								<h2>Mortals are not allowed here</h2>
								<h2>
									sending you home in <span> {countdown} </span>
								</h2>
							</div>
						</div>
					</div>

					<div className={styles.bottom} data-key="section">
						<div></div>
						<div className={styles.bottomRight} data-key="mortal-text">
							<h2>Wait, I choose to be immortal</h2>
							<button onClick={onStopRedirect}>
								<span>Remain here</span>
							</button>
						</div>
					</div>
				</header>
				<ScrollAlert propStyles={styles.scrollAlert} containerRef={scrollRef} />
				<DarkRadialGradient containerRef={gradientRef} propStyles={styles.radialGradient} />
				<Noise />
			</div>
			<Contact />
		</>
	);
}
