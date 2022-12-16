const events = {
	//----------------------------------------------------
	// EVENETS THAT CAN BE CALLED FROM MULTIPLE PLACES
	//----------------------------------------------------
	shared: {
		contactForm: {
			linkedin: () => ({
				label: "visit_linkedin",
			}),
			twitter: () => ({
				label: "visit_twitter",
			}),
			resume: () => ({
				label: "view_resume",
			}),
			github: () => ({
				label: "visit_github",
			}),
			clickEmail: () => ({
				label: "click_email",
			}),
			submitFormStart: ({ sender_email, sender_name }: { sender_email: string; sender_name: string }) => ({
				label: "submit_form_start",
				parameters: {
					sender_name,
					sender_email,
				},
			}),
			submitFormSuccess: ({ sender_email, sender_name }: { sender_email: string; sender_name: string }) => {
				return {
					label: "submit_form_success",
					parameters: {
						sender_name,
						sender_email,
					},
				};
			},
			submitFormFailure: ({ error }: { error: string }) => {
				return {
					label: "submit_form_error",
					parameters: { error },
				};
			},
		},
		homeAndProjects: {
			toggleProjectsView: ({ projects_view }: { projects_view: string }) => {
				return {
					label: "toggle_projects_view",
					parameters: { projects_view },
				};
			},
			viewProjectInfo: ({ project_title }: { project_title: string }) => {
				return {
					label: "view_project",
					parameters: { project_title },
				};
			},
			viewProjectGithub: ({ project_title, link_url }: { project_title: string; link_url: string }) => {
				return {
					label: "visit_project_github",
					parameters: {
						project_title,
						link_url,
					},
				};
			},
			viewProjectSite: ({ project_title, link_url }: { project_title: string; link_url: string }) => {
				return {
					label: "visit_project_site",
					parameters: {
						project_title,
						link_url,
					},
				};
			},
		},
		scrollToTopBtn: () => ({ label: "click_scrolltotop" }),
	},
	//----------------------------------------------------
	// EVENETS SPECIFIC TO A PAGE
	//----------------------------------------------------
	pages: {
		home: {
			jumpToViewAllSkills: () => ({
				label: "jump_to_view_all_skills",
			}),
			viewMoreProjects: () => ({ label: "view_more_projects" }),
		},
		projects: {
			openProjectsFilter: () => ({ label: "open_projects_filter" }),
			closeProjectsFilter: () => ({ label: "close_projects_filter" }),
			toggleProjectsFilterBy: ({ filter_by }: { filter_by: string }) => {
				return {
					label: "toggle_projects_filter_by",
					parameters: {
						filter_by,
					},
				};
			},

			filterProjectsByKey: ({ filter_key }: { filter_key: string }) => {
				return {
					label: "filter_projects_by",
					parameters: {
						filter_key,
					},
				};
			},
			viewUnknownProject: ({ project_title }: { project_title: string }) => {
				return {
					label: "view_unknown_project",
					parameters: { project_title },
				};
			},
		},
		letters: {
			viewLetter: ({ link_url, article_title }: { link_url: string; article_title: string }) => {
				return {
					label: "visit_letter",
					parameters: {
						link_url,
						article_title,
					},
				};
			},
		},
		credits: {
			viewCredit: ({ link_url }: { link_url: string }) => {
				return {
					label: "visit_credit",
					parameters: {
						link_url: link_url,
					},
				};
			},
		},
		notFound: {
			remainLost: () => ({ label: "remain_lost" }),
		},
		blog: {
			clickNavBlogLink: () => {
				return {
					label: "nav_blog_link",
				};
			},
			clickNavPortfolioLink: () => {
				return {
					label: "nav_portfolio_link",
				};
			},
			tweetBlogPost: ({ title, url }: { title: string; url: string }) => {
				return {
					label: "tweet_post",
					parameters: {
						blog_title: title,
						blog_url: url,
					},
				};
			},
			discussBlogPost: ({ title, url }: { title: string; url: string }) => {
				return {
					label: "discuss_post",
					parameters: {
						blog_title: title,
						blog_url: url,
					},
				};
			},
			clickFooterPortfolioLink: () => ({
				label: "footer_portfolio_link",
			}),
		},
	},
};

function registerEvent({ label, parameters = {} }: { label: string; parameters?: Record<string, string> }) {
	if (typeof window !== "undefined") {
		if (window.gtag) {
			window.gtag("event", label, parameters);
		}
	}
}

export { registerEvent, events };
