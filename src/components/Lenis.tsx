'use client';
import { useGSAP } from '@gsap/react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { progressBar } from '@/anims/gsap';

const Lenis = ({ children }: { children: React.ReactNode }) => {
    const [scrollPos, setScrollPos] = useState(0);
    const lenisRef: any = useRef()
    // console.log(lenisRef);

    const lenis = useLenis(({ scroll, progress }) => {
        // called every scroll
        // console.log(scroll);
        // console.log(progress);
        progressBar({ progress });
        setScrollPos(progress * 100);
    })

    useGSAP(() => { //lenis smooth scroll
        // --vv-- lenis/react w GSAP Integration
        function update(time: any) {
            lenisRef.current?.lenis?.raf(time * 1000)
            // console.log(lenisRef);
        }
        gsap.ticker.add(update)

        // --vv-- lenis/react w GSAP Integration
        return () => {
            gsap.ticker.remove(update)
        }
    });

    return (
        <ReactLenis root ref={lenisRef} autoRaf={false} options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            <div className="progress bg-rose-950 bg-opacity-40 w-10 h-[7px] fixed top-0 left-0 z-10" />
            <div className="m-3 fixed top-0 left-[25%] w-[50%] font-bold tracking-widest text-3xl text-rose-950 z-20">
                <div className="landingScroll flex justify-center rounded-md">ScrollProgress: {Math.round(scrollPos)}</div>
            </div>
            {children}
        </ReactLenis>
    )
}
export default Lenis