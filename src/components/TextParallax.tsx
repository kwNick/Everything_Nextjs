'use client';
import { useGSAP } from "@gsap/react";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";

const TextParallax = ({ children }: { children: React.ReactNode }) => {
    let xPercent = 0;
    // let direction = 1;

    const lenis = useLenis(({ scroll, progress }) => {
        const textTop = gsap.quickTo(".textTop", "xPercent", { duration: 0.2, ease: "power3" });  //move this to its own wrapper in page.tsx
        textTop(progress * 100 * 1.5);

        // const textMiddle = gsap.quickTo(".textMiddle", "xPercent", { duration: 0.2, ease: "power3" });  //move this to its own wrapper in page.tsx
        // textMiddle(-progress * 100 * 1.1);

        const textBottom = gsap.quickTo(".textBottom", "xPercent", { duration: 0.2, ease: "power3" });  //move this to its own wrapper in page.tsx
        textBottom(progress * 100 * 1.1);
    });
    // console.log(lenis);


    useGSAP(() => {
        // const textSlide = gsap.quickTo(".textMiddle", "xPercent", { duration: 0.2, ease: "power1" });

        const animation = () => {
            // let xPercent = gsap.
            if (xPercent <= -100) {
                xPercent = 0;
            }

            if (xPercent > 0) {
                xPercent = -100
            }

            gsap.set(".textMiddle", { xPercent: xPercent });
            xPercent += 0.1;
            // requestAnimationFrame(animation);
        }
        gsap.ticker.add(animation);
        // requestAnimationFrame(animation)
        return () => {
            gsap.ticker.remove(animation);
        }
    });
    return (
        <>
            {children}
        </>
    )
}
export default TextParallax