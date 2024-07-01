'use client';
import { loadPageIn } from "@/anims/gsap";
import { useEffect } from "react"
import Footer from "@/components/Footer";

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        loadPageIn();
    }, []);
    return (
        <>
            <div className="loadMe h-screen w-screen fixed top-0 left-0 z-20 bg-rose-950 " />
            {children}
            <Footer />
        </>
    )
}