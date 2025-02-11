import styles from "./styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { events, registerEvent } from "#/utils/analytics/events";

export default function BlogLayout({ children }: { children: JSX.Element }) {
	const router = useRouter();

	const handlePageGAEvents = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		const { link } = e.currentTarget.dataset;
		const { linkedin, twitter, resume, github, clickEmail } = events.shared.contactForm;
		const { clickFooterPortfolioLink, clickNavBlogLink, clickNavPortfolioLink } = events.pages.blog;
		switch (link) {
			case "resume":
				registerEvent(resume());
				return;
			case "linkedin":
				registerEvent(linkedin());
				return;
			case "twitter":
				registerEvent(twitter());
				return;
			case "github":
				registerEvent(github());
				return;
			case "email":
				registerEvent(clickEmail());
				return;
			case "clickFooterPortfolioLink":
				registerEvent(clickFooterPortfolioLink());
				return;
			case "clickNavPortfolioLink":
				registerEvent(clickNavPortfolioLink());
				return;
			case "clickNavBlogLink":
				registerEvent(clickNavBlogLink());
				return;
			default:
				return;
		}
	};
	return (
		<div className={styles.container}>
			<div className={styles.radialGradient}></div>
			<div className={styles.contentWrapper}>
				<header className={styles.header}>
					<div>
						<svg width="79" height="43" viewBox="0 0 79 43" fill="none" xmlns="http://www.w3.org/2000/svg" id="logo">
							<path
								d="M34.2803 19H36.4746L33.043 9.13574H30.6162L27.1914 19H29.3105L30.0625 16.6074H33.5283L34.2803 19ZM31.7715 11.0225H31.8193L33.084 15.0625H30.5068L31.7715 11.0225ZM41.5947 19L44.9102 9.13574H42.6611L40.4053 16.874H40.3574L38.1016 9.13574H35.791L39.1064 19H41.5947ZM47.9863 19V9.13574H45.9219V19H47.9863ZM49.627 9.13574V19H53.3936C56.3535 19 58.0967 17.1611 58.0967 14.0303C58.0967 10.8994 56.3535 9.13574 53.3936 9.13574H49.627ZM51.6914 10.8379H53.1475C54.9658 10.8379 55.9912 11.9727 55.9912 14.0371C55.9912 16.1699 54.9932 17.291 53.1475 17.291H51.6914V10.8379Z"
								fill="#fff"
							/>
							<path
								d="M2.34375 0.816406V29H13.1055C21.5625 29 26.543 23.7461 26.543 14.8008C26.543 5.85547 21.5625 0.816406 13.1055 0.816406H2.34375ZM8.24219 5.67969H12.4023C17.5977 5.67969 20.5273 8.92188 20.5273 14.8203C20.5273 20.9141 17.6758 24.1172 12.4023 24.1172H8.24219V5.67969Z"
								fill="#fff"
							/>
							<path
								d="M44.1885 32C46.2939 32 47.5996 30.9131 47.5996 29.1768C47.5996 27.8711 46.6152 26.8936 45.2754 26.791V26.7363C46.3213 26.5791 47.1279 25.6768 47.1279 24.5967C47.1279 23.0859 45.9658 22.1357 44.1133 22.1357H39.8203V32H44.1885ZM41.8848 23.6738H43.5801C44.5439 23.6738 45.0977 24.125 45.0977 24.918C45.0977 25.752 44.4688 26.2373 43.3682 26.2373H41.8848V23.6738ZM41.8848 30.4619V27.5977H43.6143C44.8311 27.5977 45.4941 28.0898 45.4941 29.0127C45.4941 29.9561 44.8516 30.4619 43.6621 30.4619H41.8848ZM53.2256 21.9648C50.2998 21.9648 48.4678 23.9268 48.4678 27.0713C48.4678 30.209 50.2998 32.1709 53.2256 32.1709C56.1445 32.1709 57.9834 30.209 57.9834 27.0713C57.9834 23.9268 56.1445 21.9648 53.2256 21.9648ZM53.2256 23.6875C54.8389 23.6875 55.8711 25 55.8711 27.0713C55.8711 29.1357 54.8389 30.4414 53.2256 30.4414C51.6055 30.4414 50.5732 29.1357 50.5732 27.0713C50.5732 25 51.6123 23.6875 53.2256 23.6875ZM59.3164 22.1357V32H63.083C66.043 32 67.7861 30.1611 67.7861 27.0303C67.7861 23.8994 66.043 22.1357 63.083 22.1357H59.3164ZM61.3809 23.8379H62.8369C64.6553 23.8379 65.6807 24.9727 65.6807 27.0371C65.6807 29.1699 64.6826 30.291 62.8369 30.291H61.3809V23.8379ZM73.5693 21.9648C70.6436 21.9648 68.8115 23.9268 68.8115 27.0713C68.8115 30.209 70.6436 32.1709 73.5693 32.1709C76.4883 32.1709 78.3271 30.209 78.3271 27.0713C78.3271 23.9268 76.4883 21.9648 73.5693 21.9648ZM73.5693 23.6875C75.1826 23.6875 76.2148 25 76.2148 27.0713C76.2148 29.1357 75.1826 30.4414 73.5693 30.4414C71.9492 30.4414 70.917 29.1357 70.917 27.0713C70.917 25 71.9561 23.6875 73.5693 23.6875Z"
								fill="#fff"
							/>
							<path
								d="M24.0586 13.3281C15.6992 13.3281 10.4648 18.9336 10.4648 27.918C10.4648 36.8828 15.6992 42.4883 24.0586 42.4883C32.3984 42.4883 37.6523 36.8828 37.6523 27.918C37.6523 18.9336 32.3984 13.3281 24.0586 13.3281ZM24.0586 18.25C28.668 18.25 31.6172 22 31.6172 27.918C31.6172 33.8164 28.668 37.5469 24.0586 37.5469C19.4297 37.5469 16.4805 33.8164 16.4805 27.918C16.4805 22 19.4492 18.25 24.0586 18.25Z"
								fill="#fff"
							/>
						</svg>
					</div>

					<div className={styles.navlinks}>
						<Link href="/blog" passHref>
							<a
								className={router.pathname === "/blog" ? styles.active : ""}
								onClick={handlePageGAEvents}
								data-link="clickNavBlogLink"
							>
								Blog
								<span></span>
							</a>
						</Link>
						<Link href="/" passHref>
							<a onClick={handlePageGAEvents} data-link="clickNavPortfolioLink">
								Portolio
								<span></span>
							</a>
						</Link>
					</div>
				</header>

				<div className={styles.content}>{children}</div>

				<footer className={styles.footer}>
					<ul>
						<li>
							<Link href="/" passHref>
								<a target="_blank" onClick={handlePageGAEvents} data-link="clickFooterPortfolioLink">
									<span>Portfolio</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="https://www.linkedin.com/in/david-obodo" passHref>
								<a target="_blank" onClick={handlePageGAEvents} data-link="linkedin">
									<span>Linkedin</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="https://github.com/davidobodo" passHref>
								<a target="_blank" onClick={handlePageGAEvents} data-link="github">
									<span>Github</span>
								</a>
							</Link>
						</li>
						{/* <li>
							<Link href="https://blog.davidobodo.com" passHref>
								<a target="_blank" onClick={handlePageGAEvents} data-link="blog">
									<span>Blog</span>
								</a>
							</Link>
						</li> */}
						<li>
							<Link href="https://twitter.com/phitGeek" passHref>
								<a target="_blank" onClick={handlePageGAEvents} data-link="twitter">
									<span>Twitter</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="mailto: contact@davidobodo.com" passHref>
								<a target="_blank" onClick={handlePageGAEvents} data-link="email">
									<span>Email</span>
								</a>
							</Link>
						</li>
					</ul>

					<p> &#169; 2025 David Obodo</p>
				</footer>
			</div>
		</div>
	);
}
