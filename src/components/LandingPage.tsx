'use client';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const LandingPage = ({ children }: { children: React.ReactNode }) => {
    useGSAP(() => {
        gsap.from('.landingScroll', {
            opacity: 0,
            y: 100,
            duration: 2,
            ease: "power1.inOut"
        });
        gsap.from('.landingNavItem', {
            opacity: 0,
            x: -50,
            duration: 2,
            stagger: 0.3,
            ease: "power1.inOut"
        });
        gsap.from('.landingLogo', {
            opacity: 0,
            x: -100,
            duration: 2,
            ease: "power1.inOut"
        });
        gsap.from('.landingTitle', {
            opacity: 0,
            x: -100,
            duration: 2,
            ease: "power3.inOut"
        });
        gsap.from('.cursor', {
            opacity: 0,
            x: 10,
            duration: 3,
        })
    });
    return (
        <>
            {children}
        </>
    )
}
export default LandingPage