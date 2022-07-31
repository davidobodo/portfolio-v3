import Head from "next/head";
import styles from "#/styles/_pages/letters.module.scss";
import { NextPage } from "next";
import { SingleLetter, Nav, Layout, Noise, Banners } from "#/components";
import { LETTERS } from "#/constants/letters";
import { useProjectsLettersInit } from "#/hooks";

const Letters: NextPage = () => {
	const { textWrapperRef, scrollIndicatorRef } = useProjectsLettersInit();

	return (
		<>
			<Head>
				<title>David Obodo - Letters</title>
				<meta name="description" content="David Obodo's portfolio website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<div className={styles.main}>
				<Banners.OtherPages
					texts={["Letters", "Thoughts", "Stories", "Ideas"]}
					textWrapperRef={textWrapperRef}
					scrollIndicatorRef={scrollIndicatorRef}
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
			</div>
		</>
	);
};

export default Letters;
