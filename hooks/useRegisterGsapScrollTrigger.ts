import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function useRegisterGsapScrollTrigger() {
    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }
}
