import { useRef, useEffect } from "react";
export default function usePrevious(value: string | number) {
	const ref = useRef<string | number>();
	useEffect(() => {
		ref.current = value;
	}, [value]);
	return ref.current;
}
