import gsap from "gsap";

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

export { expandImage };
