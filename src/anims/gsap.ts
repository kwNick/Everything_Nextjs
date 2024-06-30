import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const loadPageIn = () => {
    const tl = gsap.timeline();
    tl.set(".loadMe", {
        yPercent: 0,
    })
        .to(".loadMe", {
            yPercent: 100,
            duration: 1.0,
        })
        .to(".loadMe", {
            borderTopLeftRadius: "50vw",
            borderTopRightRadius: "50vw",
            duration: 0.5,
        }, '<');
};

export const loadPageOut = (href: string, router: AppRouterInstance) => {
    const tl = gsap.timeline();

    tl.set(".loadMe", {
        yPercent: -100,
        borderBottomLeftRadius: "50vw",
        borderBottomRightRadius: "50vw",
        borderTopRightRadius: "0",
        borderTopLeftRadius: "0"
    })
        .to(".loadMe", {
            yPercent: 0,
            duration: 1.0,
            onComplete: () => { router.push(`/${href.toLowerCase()}`); }
        })
        .to(".loadMe", {
            borderBottomRightRadius: "0",
            borderBottomLeftRadius: "0",
            duration: 0.5
        }, "<");

};

export const cursorEnter = () => {
    gsap.to(".cursor", {
        scale: 2,
    });
};

export const cursorLeave = () => {
    gsap.to(".cursor", {
        scale: 1,
    });
};