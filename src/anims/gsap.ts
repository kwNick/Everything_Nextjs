import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const loadPageIn = () => {
    gsap.set(".loadMe", {
        // opacity: 1,
        yPercent: 0,
    });
    gsap.to(".loadMe", {
        yPercent: 100,
        duration: 1.0,
    });
};

export const loadPageOut = (href: string, router: AppRouterInstance) => {
    gsap.set(".loadMe", {
        yPercent: -100,
    })
    gsap.to(".loadMe", {
        yPercent: 0,
        duration: 1.0,
        onComplete: () => { router.push(`/${href.toLowerCase()}`); }
    })

};