import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

// export const loadPageIn = () => {   //Is this context safe //moved to component and called w/ useGSAP
//     const tl = gsap.timeline();
//     tl.set(".loadMe", {
//         yPercent: 0,
//     })
//         .to(".loadMe", {
//             yPercent: 100,
//             duration: 1.5,
//             ease: 'power1',
//         })
//         .to(".loadMe", {
//             borderTopLeftRadius: "50vw",
//             borderTopRightRadius: "50vw",
//             duration: 1,
//             ease: 'power1',
//         }, '<');
// };

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
            ease: 'power1',
            onComplete: () => { router.push(`/${href.toLowerCase()}`); }
        })
        .to(".loadMe", {
            borderBottomRightRadius: "0",
            borderBottomLeftRadius: "0",
            duration: 0.5,
            ease: 'power1',
        }, "<");

};

export const cursorEnter = () => {
    gsap.to(".cursor", {
        scale: 2.5,
        // duration: 1.5,
        ease: 'power1.in',
    });
};

export const cursorLeave = () => {
    gsap.to(".cursor", {
        scale: 1,
        // duration: 1.5,
        ease: 'power2.out'
    });
};

// export const progressBarX = ({ progress }: { progress: number }) => {   //Is this context safe //moved to component and called w/ useGSAP
//     const progX = gsap.quickSetter(".progress", "width", "%");
//     // console.log(progress * 100);
//     progX(progress * 100);
// }