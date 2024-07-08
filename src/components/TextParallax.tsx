'use client';
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";

const TextParallax = ({ children }: { children: React.ReactNode }) => {

    useLenis(({ scroll, progress }) => {
        const textTop = gsap.quickTo(".textTop", "xPercent", { duration: 0.2, ease: "power3" });  //move this to its own wrapper in page.tsx
        textTop(progress * 100 * 1.3);

        const textMiddle = gsap.quickTo(".textMiddle", "xPercent", { duration: 0.2, ease: "power3" });  //move this to its own wrapper in page.tsx
        textMiddle(-progress * 100 * 1.5);

        const textBottom = gsap.quickTo(".textBottom", "xPercent", { duration: 0.2, ease: "power3" });  //move this to its own wrapper in page.tsx
        textBottom(progress * 100 * 1.1);
    });

    return (
        <>
            {children}
        </>
    )
}
export default TextParallax