import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

export default function useRegisterGsapScrollTrigger() {
	if (typeof window !== "undefined") {
		gsap.registerPlugin(ScrollTrigger);
		gsap.registerPlugin(ScrollToPlugin);
		// ScrollTrigger.normalizeScroll(true);
	}
}
