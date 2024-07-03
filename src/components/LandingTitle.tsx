'use client';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import React, { useRef } from "react";

const LandingTitle = ({ children }: { children: React.ReactElement }) => {
    const landTitleRef = useRef<HTMLElement | null>(null);
    useGSAP(() => {
        gsap.from(landTitleRef?.current, {   //maybe put each one of these in its own wrapper function and wrap the component with it so no more wrapper in layoutpage
            opacity: 0,
            x: -100,
            duration: 2,
            ease: "power3.inOut"
        });
    });
    return (React.cloneElement(children, { ref: landTitleRef }))
}
export default LandingTitle