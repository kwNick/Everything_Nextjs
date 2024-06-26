'use client';
import { useGSAP } from "@gsap/react";
import { useEffect } from "react"

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    useGSAP(() => {
        // gsap.fromTo("")
    })
    useEffect(() => {
        console.log("Animation");

    });
    return (
        <>{children}</>
    )
}
export default PageTransition