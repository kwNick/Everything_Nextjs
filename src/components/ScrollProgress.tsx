'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Lenis from "lenis";
import { useLenis } from "lenis/react"
import { useState } from "react";

const ScrollProgress = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
        setScrollPos(scroll);
    });
    console.log(lenis);
    console.log(window.outerHeight, window.outerWidth);
    useGSAP(() => {
        const progTo = gsap.quickTo(".progress", 'width', { duration: 0.2 });
        const inMax = lenis?.dimensions.scrollHeight;
        console.log(inMax);
        var mapper = gsap.utils.mapRange(0, inMax, 0, window.innerWidth * .9);
        progTo(mapper(scrollPos));
    }, [scrollPos]);
    return (
        <div className="flex justify-center">ScrollProgress: {scrollPos}</div>
    )
}
export default ScrollProgress