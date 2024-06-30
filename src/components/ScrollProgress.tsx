'use client';
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollProgress = () => {
    const [scrollPos, setScrollPos] = useState(0);


    useGSAP(() => {

    }, [scrollPos]);
    return (
        <div className="flex justify-center">ScrollProgress: {scrollPos}</div>
    )
}
export default ScrollProgress