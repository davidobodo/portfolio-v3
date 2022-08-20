import { useWindowSize } from "#/hooks";
import styles from "./styles.module.scss";
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "../icons";
export default function Slider({ items, id }: { items: { type: "image" | "video"; source: string }[]; id: string }) {
	const { innerHeight, innerWidth } = useWindowSize();

	const itemsWrapperRef = useRef<HTMLDivElement>(null);

	const [sliderDisplacement, setSliderDisplacement] = useState<number>(0);
	const [itemWidth, setItemWidth] = useState<number>(0);

	const [activeItem, setActiveItem] = useState(0);

	const handleSetActiveItem = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!(e.target instanceof HTMLButtonElement)) {
			return;
		}
		const { slide } = e.target.dataset;
		if (!slide) return;
		moveSlider(parseInt(slide), itemWidth);
	};

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

	useEffect(() => {
		if (itemsWrapperRef.current) {
			const width = itemsWrapperRef.current.children[0].clientWidth;
			setItemWidth(width);
			moveSlider(activeItem, width);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [innerWidth, innerHeight]);

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
							<div
								key={i}
								className={styles.item}
								style={{
									backgroundImage: `url(${source})`,
								}}
							></div>
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
