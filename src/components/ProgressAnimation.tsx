import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProgressAnimation = ({ children }: { children: React.ReactNode }) => {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        // const progX = gsap.quickSetter(".progress", "width", "%");
        // progX(progress * 100);
        let width = 0;
        gsap.set(".progress", {
            width: width + "%",
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: "top top",
                // markers: true,
                end: "bottom bottom",
                onUpdate: e => { width = Math.floor(e.progress * 100); console.log(width); },
            },


        })
    });

    return (
        <>
            {children}
        </>
    )
}
export default ProgressAnimation