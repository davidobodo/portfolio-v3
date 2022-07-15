import Router from "next/router";

export const routerWrapper = (url: string, leaveTransition: gsap.core.Timeline) => {
    leaveTransition.then(() => {
        Router.push(url);
    });
};
