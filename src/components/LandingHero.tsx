'use client';
import { useGSAP } from "@gsap/react"
import gsap from "gsap";

const LandingHero = ({ children }: { children: React.ReactNode }) => {
    useGSAP(() => {
        gsap.from(".left", {
            opacity: 0,
            xPercent: -100,
            ease: 'power1.in',
            duration: 2,
        });
        gsap.from(".right", {
            opacity: 0,
            xPercent: 100,
            ease: 'power1.in',
            duration: 2,
        });
        gsap.from(".mainImg", {
            opacity: 0,
            ease: 'power1.in',
            duration: 2,
        });
    });
    return (
        <>
            {children}
        </>
    )
}
export default LandingHero