'use client';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const LandingHeader = ({ children }: { children: React.ReactNode }) => {

    useGSAP(() => {
        gsap.from('.landingNavItem', {   //maybe put each one of these in its own wrapper function and wrap the component with it so no more wrapper in layoutpage
            opacity: 0,
            x: -50,
            duration: 2,
            stagger: 0.3,
            ease: "power1.inOut"
        });

        gsap.from('.landingLogo', {   //maybe put each one of these in its own wrapper function and wrap the component with it so no more wrapper in layoutpage
            opacity: 0,
            x: -100,
            duration: 2,
            ease: "power1.inOut"
        });

        // gsap.from('.landingScroll', {   //maybe put each one of these in its own wrapper function and wrap the component with it so no more wrapper in layoutpage
        //     opacity: 0,
        //     y: 100,
        //     duration: 2,
        //     ease: "power1.inOut"
        // });

        // gsap.from('.landingTitle', {   //maybe put each one of these in its own wrapper function and wrap the component with it so no more wrapper in layoutpage
        //     opacity: 0,
        //     x: -100,
        //     duration: 2,
        //     ease: "power3.inOut"
        // });

        // gsap.from('.cursor', {   //maybe put each one of these in its own wrapper function and wrap the component with it so no more wrapper in layoutpage
        //     opacity: 0,
        //     scale: 3,
        //     duration: 2,
        //     ease: "power1.inOut",
        // })
    });
    return (
        <>
            {children}
        </>
    )
}
export default LandingHeader