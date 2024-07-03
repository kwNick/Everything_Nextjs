'use client';
// import { loadPageIn } from "@/anims/gsap";
import { useGSAP } from "@gsap/react";

const PageTrans = ({ children }: { children: React.ReactNode }) => {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.set(".loadMe", {
            yPercent: 0,
        })
            .to(".loadMe", {
                yPercent: 100,
                duration: 1.5,
                ease: 'power1',
            })
            .to(".loadMe", {
                borderTopLeftRadius: "50vw",
                borderTopRightRadius: "50vw",
                duration: 1,
                ease: 'power1',
            }, '<');
        // loadPageIn();
    }, []);
    return (
        <>
            {children}
        </>
    )
}
export default PageTrans