import styles from "./styles.module.scss";
import { WORK } from "#/constants";
import { FaintBgText } from "../../../../index";
import { Ref } from "react";
import { useIsomorphicLayoutEffect } from "#/hooks";

export type WorkDesktopProps = {
	workContainerRef: Ref<HTMLDivElement>;
};

export const matchElement = (origin: Element, destinationTag: string): Element | void => {
	if (origin.matches(destinationTag)) {
		return origin;
	}

	if (!origin.parentElement) return;

	if (origin.parentElement.matches(destinationTag)) {
		return origin.parentElement;
	}

	return matchElement(origin.parentElement, destinationTag);
};

let getSiblings = function (e) {
	// for collecting siblings
	let siblings = [];
	// if no parent, return no sibling
	if (!e.parentNode) {
		return siblings;
	}
	// first child of the parent node
	let sibling = e.parentNode.firstChild;

	// collecting siblings
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== e) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling;
	}
	return siblings;
};

export default function ViewDesktop({ workContainerRef }: WorkDesktopProps) {
	const handleKeyboardFocus = (e) => {
		if (e.key === "Tab" || e.keyCode === 9) {
			const foundElement = matchElement(document.activeElement, "[data-key='work-detail']");

			if (foundElement) {
				//Get all elements siblings
				const siblings = getSiblings(foundElement);
				const currActive = siblings.find((item) => {
					const { focus } = item.dataset;
					return focus === "active-work";
				});

				console.log(currActive === foundElement);

				// console.log(siblings, currActive, "THE SIBLINGS");

				if (currActive && currActive !== foundElement) {
					console.log(currActive, "TEH CURRE");
					currActive.removeAttribute("data-focus");
				}

				//Remove data focus from the sibling

				foundElement.setAttribute("data-focus", "active-work");
			}
		}
	};

	useIsomorphicLayoutEffect(() => {
		document.body.addEventListener("keydown", handleKeyboardFocus);

		return () => {
			document.body.removeEventListener("keydown", handleKeyboardFocus);
		};
	}, []);
	return (
		<div className={styles.container} ref={workContainerRef} id="work-section">
			<div className={styles.contentWrapper} data-key="work-tabs">
				<div className={styles.tabs}>
					<div className={styles.tabHeadersContainer}>
						<ul className={styles.tabHeaders} data-key="work-companies">
							<li className={styles.bgGradient} data-key="gradient"></li>
							{WORK.map((item, i) => {
								return (
									<li className={styles.tabHeader} key={i} tabIndex={0}>
										{item.company}
									</li>
								);
							})}
						</ul>
					</div>
					<div className={styles.tabDetails} data-key="work-details">
						{WORK.map((item, i) => {
							const { title, company, location, range, url, note, urlLabel } = item;
							return (
								<div className={styles.tabDetail} key={i} data-key="work-detail">
									<section>
										<h4>{company}</h4>
										<div className={styles.notes} dangerouslySetInnerHTML={{ __html: note }} />
										<span>{range}</span>
										<ul>
											<li> {title}</li>
											{location && <li> {location}</li>}
											<li>
												<a href={url} target="_blank">
													{urlLabel ? urlLabel : url}
												</a>
											</li>
										</ul>
									</section>
								</div>
							);
						})}
					</div>
				</div>
				<FaintBgText text="work" />
			</div>
		</div>
	);
}
