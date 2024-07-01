'use client';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Cursor = () => {
    useGSAP(() => {
        let xTo = gsap.quickTo(".cursor", "x", { duration: 0.4, ease: "power3" }),
            yTo = gsap.quickTo(".cursor", "y", { duration: 0.4, ease: "power3" });

        let shadowX = gsap.quickSetter(".dynamicShadow", "bodShadow"),
            shadowY = gsap.quickSetter(".dynamicShadow", "bodShadow");
        window.addEventListener("mousemove", e => {
            console.log(e.movementX, e.movementY)
            xTo(e.clientX);
            yTo(e.clientY);
        });
    });
    return (
        <>
            <div className="cursor bg-white w-[5vh] h-[5vh] rounded-full fixed top-0 left-0 -translate-x-[50%] -translate-y-[50%] mix-blend-screen z-10" ><div className="relative w-full h-full"><span className="z-10 bg-color-red w-full h-full fixed" /></div></div>
        </>
    )
}
export default Cursor