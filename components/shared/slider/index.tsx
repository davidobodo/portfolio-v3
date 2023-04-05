import styles from "./styles.module.scss";
import Image from "next/image";
import { useWindowSize } from "#/hooks";
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "../../icons";
import { StaticImageData } from "next/image";
export default function Slider({
	items,
	id,
	bgColor,
}: {
	items: { type: "image" | "video" | "gif"; source: StaticImageData }[];
	id: string;
	bgColor: string;
}) {
	const { innerHeight, innerWidth } = useWindowSize();

	const itemsWrapperRef = useRef<HTMLDivElement>(null);

	const [sliderDisplacement, setSliderDisplacement] = useState<number>(0);
	const [itemWidth, setItemWidth] = useState<number>(0);
	const [activeItem, setActiveItem] = useState(0);

	//-----------------------------------------------------
	// User clicked on an indicator
	//-----------------------------------------------------
	const handleSetActiveItem = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!(e.target instanceof HTMLButtonElement)) {
			return;
		}
		const { slide } = e.target.dataset;
		if (!slide) return;
		moveSlider(parseInt(slide), itemWidth);
	};

	//-----------------------------------------------------
	// User clicked on an arrow
	//-----------------------------------------------------
	const handleChangeItem = (e: React.MouseEvent<HTMLButtonElement>) => {
		const { action } = e.currentTarget.dataset;
		if (!action) return;

		if (action === "<") {
			if (activeItem <= 0) {
				moveSlider(0, itemWidth);
			} else {
				moveSlider(activeItem - 1, itemWidth);
			}
		} else if (action === ">") {
			if (activeItem >= items.length - 1) {
				moveSlider(items.length - 1, itemWidth);
			} else {
				moveSlider(activeItem + 1, itemWidth);
			}
		}
	};

	const moveSlider = (itemNumber: number, width: number) => {
		setActiveItem(itemNumber);
		setSliderDisplacement(width * itemNumber);
	};

	//------------------------------------------------------------
	// Refresh slider when device dimentions changes
	//------------------------------------------------------------
	useEffect(() => {
		if (itemsWrapperRef.current) {
			const width = itemsWrapperRef.current.children[0].clientWidth;
			setItemWidth(width);
			moveSlider(activeItem, width);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [innerWidth, innerHeight]);

	//------------------------------------------------------------
	// Reset slider immediately we are viewing a different project
	//------------------------------------------------------------
	useEffect(() => {
		setActiveItem(0);
		moveSlider(0, itemWidth);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return (
		<>
			<div className={styles.slider}>
				{activeItem !== 0 && (
					<button className={styles.control + " " + styles.prev} data-action="<" onClick={handleChangeItem}>
						<ChevronLeft />
					</button>
				)}
				<div
					className={styles.sliderInner}
					ref={itemsWrapperRef}
					style={{
						transform: `translateX(-${sliderDisplacement}px)`,
					}}
				>
					{items.map((a, i) => {
						const { source } = a;
						return (
							<div key={i} className={styles.item} style={{ backgroundColor: bgColor }}>
								<Image src={source} alt={`Picture ${i}`} />
							</div>
						);
					})}
				</div>
				{activeItem !== items.length - 1 && (
					<button className={styles.control + " " + styles.next} data-action=">" onClick={handleChangeItem}>
						<ChevronRight />
					</button>
				)}
			</div>

			<div className={styles.indicators} onClick={handleSetActiveItem}>
				{items.map((a, i) => {
					return (
						<button
							className={activeItem === i ? styles.indicator + " " + styles.active : styles.indicator}
							data-slide={i}
							key={i}
						></button>
					);
				})}
			</div>
		</>
	);
}
