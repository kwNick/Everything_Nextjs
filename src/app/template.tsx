'use client';
import { loadPageIn } from "@/anims/gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react"
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function Template({ children }: { children: React.ReactNode }) {
    useGSAP(() => {
        const lenis = new Lenis()

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })

        gsap.registerPlugin(ScrollTrigger);
        const splitTypes = document.querySelectorAll('.reveal-text');
        // console.log(splitTypes);

        splitTypes.forEach((char, i) => {
            const text = new SplitType(char, { types: 'char' });
            // console.log(text.chars);

            gsap.fromTo(text.chars, {
                // color: bg,
                scaleY: 0,
                y: -20,
                transformOrigin: 'top',
            },
                {
                    // color: fg,
                    scaleY: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: char,
                        start: 'top center',
                        end: '+=5%',
                        scrub: true,
                        markers: true,
                        toggleActions: 'play none none none',
                    },
                    stagger: 0.02,
                    duration: 0.3,
                })
        })
    });
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