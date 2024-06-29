'use client';
import { useLenis } from "lenis/react"
import { useState } from "react";

const ScrollProgress = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
        setScrollPos(scroll);
    })
    return (
        <div className="flex justify-center">ScrollProgress: {scrollPos}</div>
    )
}
export default ScrollProgress