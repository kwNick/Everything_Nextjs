'use client';
import { useGSAP } from '@gsap/react';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { useRef, useState } from 'react';
import gsap from 'gsap';
import LandingScroll from './LandingScroll';
import Cursor from './Cursor';
import ProgressAnimation from './ProgressAnimation';

const Lenis = ({ children }: { children: React.ReactNode }) => {
    const [scrollPos, setScrollPos] = useState(0);
    const lenisRef: any = useRef()
    // console.log(lenisRef);

    const lenis = useLenis(({ scroll, progress }) => { //Scroll Animations
        // called every scroll
        const progX = gsap.quickSetter(".progress", "width", "%");
        progX(progress * 100);

        setScrollPos(progress * 100);
    })
    // console.log(lenis);

    useGSAP(() => {
        //Lenis Smooth Scroll
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
            <Cursor />
            {/* <ProgressAnimation> */}
            <div className="progress bg-rose-950 bg-opacity-40 w-full h-[7px] fixed top-0 left-0 z-10" />
            {/* </ProgressAnimation> */}
            <div className="m-3 fixed top-0 left-[25%] w-[50%] font-bold tracking-widest text-3xl text-rose-950 z-20">
                <LandingScroll>
                    <div className="landingScroll flex justify-center rounded-md">ScrollProgress: {Math.round(scrollPos)}</div>
                </LandingScroll>
            </div>
            {children}
        </ReactLenis>
    )
}
export default Lenis