import { METADATA } from "#/constants";

export default function HeadChildren({
	location,
}: {
	location: "home" | "projects" | "letters" | "credits" | "notfound";
}) {
	const { title, description, url, image } = METADATA[location];
	return (
		<>
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

			{/* OPEN GRAPH */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={image} />
			<meta property="og:site_name" content={title} />

			{/* TWITTER */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@phitGeek" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />

			<link rel="icon" href="/icon-192x192.png" />
		</>
	);
}
