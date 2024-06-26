'use client';
import { useGSAP } from "@gsap/react";
import { useEffect } from "react"

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        console.log("Animation");
        useGSAP(() => {
            // gsap.fromTo("")
        })
    });
    return (
        <>{children}</>
    )
}
export default PageTransition