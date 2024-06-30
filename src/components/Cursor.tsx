'use client';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Cursor = () => {
    useGSAP(() => {
        let xTo = gsap.quickTo(".cursor", "x", { duration: 0.4, ease: "power3" }),
            yTo = gsap.quickTo(".cursor", "y", { duration: 0.4, ease: "power3" });

        window.addEventListener("mousemove", e => {
            xTo(e.clientX);
            yTo(e.clientY);
        });
    });
    return (
        <>
            <div className="cursor bg-white w-[5vh] h-[5vh] rounded-full fixed top-0 left-0 -translate-x-[50%] -translate-y-[50%] bg-blend-screen " />
        </>
    )
}
export default Cursor