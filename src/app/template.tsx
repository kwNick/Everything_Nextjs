'use client';
import { loadPageIn } from "@/anims/gsap";
import { useEffect } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        loadPageIn();
    }, []);
    return (
        <div>
            <div className="loadMe h-screen w-screen fixed top-0 left-0 z-10 bg-rose-950 " />
            {children}
        </div>
    )
}