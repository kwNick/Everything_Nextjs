'use client';

import { loadPageIn } from "@/anims/gsap";
import { useEffect } from "react"

const PageTrans = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        loadPageIn();
    }, []);
    return (
        <>
            {children}
        </>
    )
}
export default PageTrans