'use client';
import { loadPageIn } from "@/anims/gsap";
import { useGSAP } from "@gsap/react";

const PageTrans = ({ children }: { children: React.ReactNode }) => {
    useGSAP(() => {
        loadPageIn();
    }, []);
    return (
        <>
            {children}
        </>
    )
}
export default PageTrans