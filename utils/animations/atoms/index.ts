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

    closeNoiseLayers({ node }: { node: NodeListOf<Element> | HTMLCollection }) {
        const tl = gsap.timeline();
        tl.to(node, { scaleY: 1 });
        return tl;
    }

    drawSvgLogo(logoSvg: Element, logoSvgPaths: NodeListOf<Element>) {
        const tl = gsap.timeline();
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
class AnimHomePage {
    changeFocusedAboutText(texts: HTMLCollection) {
        const firstElement = texts[0];
        const lastElement = texts[texts.length - 1];

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: firstElement,
                start: "top center",
                end: "bottom center",
                endTrigger: lastElement,
                toggleActions: "restart pause reverse pause",
                scrub: true
            }
        });

        // CREATE ACTIONS TO EXECUTE IN TIMELINE
        let timelineActions = [];
        for (let i = 0; i < texts.length; i++) {
            timelineActions.push({ target: texts[i], vars: { opacity: 1 }, options: i !== 0 ? "<" : "" });

            // Dont decrease the opacity of the last item
            if (i !== texts.length - 1) {
                timelineActions.push({ target: texts[i], vars: { opacity: 0.2 }, options: "" });
            }
        }

        // EXECUTE TIMELINE ACTIONS
        for (let j = 0; j < timelineActions.length; j++) {
            const { target, vars, options } = timelineActions[j];
            if (options) {
                tl.to(target, vars, options);
            } else {
                tl.to(target, vars);
            }
        }

        return tl;
    }
}

function expandImage(imageNode: HTMLImageElement) {
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

function fadeIn({ node }: { node: Element }) {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: node,
            start: "top 80%",
            end: "bottom center",
            toggleActions: "restart pause reverse pause",
            scrub: true
        }
    });

    tl.to(node, { opacity: 1, y: 0 });

    return tl;
}
const animPageLoaders = new AnimPageLoaders();
const homePageAnims = new AnimHomePage();
export { expandImage, animPageLoaders, homePageAnims, AnimPageLoaders, fadeIn };
