'use client';
import React from "react";
import { useRef } from "react";
import gsap, { Expo } from "gsap";
import { useGSAP } from "@gsap/react";

const MagneticEffect = ({ children }: { children: React.ReactElement }) => {
    const magneticRef = useRef<HTMLElement | null>(null);
    useGSAP(() => {
        const xPos = gsap.quickTo(magneticRef.current, "x", {
            duration: 2.2,
            ease: Expo.easeOut,
        });
        const yPos = gsap.quickTo(magneticRef.current, "y", {
            duration: 2.2,
            ease: Expo.easeOut
        })
        // const xPos = gsap.quickSetter(magneticRef.current, "x", "px");
        // const yPos = gsap.quickSetter(magneticRef.current, "y", "px")
        const mouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = magneticRef.current.getBoundingClientRect();
            const x = clientX - (left + width / 1.5);
            const y = clientY - (top + height / 1.5);
            xPos(x);
            yPos(y);
        };
        const mouseLeave = (e: MouseEvent) => {
            xPos(0);
            yPos(0);
        }

        magneticRef.current.addEventListener("mousemove", mouseMove);
        magneticRef.current.addEventListener("mouseleave", mouseLeave);
        return () => {
            magneticRef.current.removeEventListener("mousemove", mouseMove);
            magneticRef.current.removeEventListener("mouseleave", mouseLeave);
        }
    }, [])

    return (React.cloneElement(children, { ref: magneticRef }))
}
export default MagneticEffect