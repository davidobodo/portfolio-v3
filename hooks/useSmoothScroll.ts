import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
import smoothscroll from "smoothscroll-polyfill";

export default function useSmoothScroll() {
	useIsomorphicLayoutEffect(() => {
		smoothscroll.polyfill();
	}, []);
}
