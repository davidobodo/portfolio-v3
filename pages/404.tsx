import Head from "next/head";
import styles from "#/styles/_pages/not-found.module.scss";
import { Nav, Noise, DarkRadialGradient, ScrollAlert, Footer } from "#/components";
import { use404PageInit } from "#/hooks";
import { METADATA } from "#/constants";

export default function NotFound() {
	const { onStopRedirect, countdown, containerRef, scrollRef, gradientRef, bannerHeight } = use404PageInit();

	const { title, description, url, image } = METADATA["notfound"];

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
			<Footer />
		</>
	);
}

NotFound.withAnim = true;
