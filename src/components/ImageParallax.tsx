'use client';
import { useLenis } from "@studio-freight/react-lenis"
import gsap from 'gsap';

const ImageParallax = ({ children }: { children: React.ReactNode }) => {

    useLenis(({ scroll, progress }) => {
        const imgUp = gsap.quickTo(".imgUp", "yPercent", { duration: 0.2, ease: "power3" });    //move this to its own wrapper in page.tsx
        imgUp(-progress * 100 * 1.5);
    });

    return (
        <>
            {children}
        </>
    )
}
export default ImageParallax