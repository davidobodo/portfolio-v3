import { useMemo, useEffect } from "react";
import debounce from "lodash.debounce";
import useWindowSize from "./useWindowSize";

export default function useDebounceScrollToTop() {
	const { innerWidth } = useWindowSize();
	const debouncedHandler = useMemo(
		() =>
			debounce(() => {
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: "smooth",
				});
			}, 700),
		[]
	);
	useEffect(() => {
		debouncedHandler();
	}, [innerWidth]);
}
