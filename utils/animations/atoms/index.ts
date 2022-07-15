import gsap from "gsap";

//--------------------------------------------
// SITE LOADER
//--------------------------------------------
class AnimPageLoaders {
    constructor() {}

    showLoadingTexts(nodesWrapper: Element, nodes: HTMLSpanElement[]) {
        const tl = gsap.timeline({ repeat: -1 });

        // CREATE TIMELINE ACTIONS
        let timelineActions = [];
        timelineActions.push({ target: nodesWrapper, vars: { visibility: "visible" } });
        for (let i = 0; i < nodes.length; i++) {
            timelineActions.push({
                target: nodes[i],
                vars: {
                    opacity: 0
                }
            });

            // Move node to the middle
            timelineActions.push({
                target: nodes[i],
                vars: {
                    y: 0,
                    opacity: 1,
                    ease: "power4.out"
                }
            });
            // Move node to the top
            timelineActions.push({
                target: nodes[i],
                vars: {
                    y: -300,
                    opacity: 0,
                    delay: 1,
                    ease: "power4.out"
                }
            });
        }

        // EXECUTE TIMELINE
        for (let j = 0; j < timelineActions.length; j++) {
            const { target, vars } = timelineActions[j];
            tl.to(target, vars);
        }

        return tl;
    }

    hideLoadingTexts(node: HTMLDivElement) {
        const tl = gsap.timeline();
        tl.to(node, { visibility: "hidden", opacity: 0 });
        return tl;
    }

    openNoiseLayers(node: NodeListOf<Element>) {
        const tl = gsap.timeline();
        tl.to(node, { scaleY: 0 });
        return tl;
    }

    closeNoiseLayers({ node, options }: { node: NodeListOf<Element> | HTMLCollection; options?: gsap.TimelineVars }) {
        const tl = gsap.timeline({ ...options });
        tl.to(node, { scaleY: 1 });
        return tl;
    }

    drawSvgLogo(logoSvg: Element, logoSvgPaths: NodeListOf<Element>) {
        const tl = gsap.timeline();

        // tl.to(logoSvg, {
        //     opacity: 1,
        //     visibility: "visible"
        // })
        tl.to(logoSvgPaths, {
            strokeDashoffset: 0,
            duration: 2,
            stagger: 0.8,
            delay: 1
        })
            .to(logoSvg, {
                fill: "#fcfcfc"
            })
            .to(logoSvg, {
                opacity: 0
            })
            .to(logoSvg, {
                visibility: "hidden"
            });

        return tl;
    }
}

//--------------------------------------------
// HOME PAGE
//--------------------------------------------
function expandImage(imageNode: HTMLDivElement) {
    gsap.to(imageNode, {
        scrollTrigger: {
            trigger: imageNode,
            start: "top 80%",
            end: "top 75%",
            toggleActions: "restart complete pause reverse"
        },
        width: "100%"
    });
}
const animPageLoaders = new AnimPageLoaders();
export { expandImage, animPageLoaders };
