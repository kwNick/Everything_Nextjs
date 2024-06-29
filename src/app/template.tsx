'use client';
import { loadPageIn } from "@/anims/gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react"
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "lenis";
import { ReactLenis, useLenis } from 'lenis/react'

export default function Template({ children }: { children: React.ReactNode }) {
    const lenisRef: any = useRef() //lenis/react w GSAP integration way
    // console.log(lenisRef);

    // --vv-- the lenis/react way --vv--
    // const lenis = useLenis(({ scroll }) => {
    //     // called every scroll
    //     console.log(scroll);
    // })
    // console.log(lenis);

    useGSAP(() => { //lenis smooth scroll
        //--vv-- Basic Javascript w GSAP integration
        // const lenis = new Lenis()
        // lenis.on('scroll', (e: any) => {
        //     console.log(e)
        // })
        // lenis.on('scroll', ScrollTrigger.update)
        // gsap.ticker.add((time) => {
        //     lenis.raf(time * 1000)
        // })
        // gsap.ticker.lagSmoothing(0)

        // --vv-- lenis/react w GSAP Integration
        function update(time: any) {
            lenisRef.current?.lenis?.raf(time * 1000)
            // console.log(time);
        }
        gsap.ticker.add(update)

        // --vv-- lenis/react w GSAP Integration
        return () => {
            gsap.ticker.remove(update)
        }
    });

    useGSAP(() => { //scrollTrigger split text reveal
        gsap.registerPlugin(ScrollTrigger);
        const splitTypes = document.querySelectorAll('.reveal-text');
        // console.log(splitTypes);

        splitTypes.forEach((char, i) => {
            const text = new SplitType(char, { types: 'char' });
            // console.log(text.chars);

            gsap.fromTo(text.chars, {
                // color: bg,
                scaleY: 0,
                y: -50,
                transformOrigin: 'top',
            },
                {
                    // color: fg,
                    scaleY: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: char,
                        start: '-30% 90%',
                        end: '-30% 40%',
                        // scrub: true,
                        // markers: true,
                        toggleActions: 'play none none none',
                    },
                    stagger: 0.03,
                    duration: 0.1,
                })
        })
    });
    useGSAP(() => {     //scrollTrigger image reveal 
        const images = document.querySelectorAll('.reveal-image');
        // console.log(images)

        images.forEach((img, i) => {
            // console.log(img);
            gsap.fromTo(
                img,
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
                },
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    ease: "power1.out",
                    duration: 2,
                    scrollTrigger: {
                        trigger: img,
                        start: "center bottom",
                        end: "bottom top",
                        // markers: true,
                        // scrub: true,
                        toggleActions: "play none none none",
                        // onEnter: () => updateBackground(bgColors[index]),
                        // onEnterBack: () => updateBackground(bgColors[index]),
                    },
                }
            )
        });
    });
    useEffect(() => {
        loadPageIn();
    }, []);
    return (
        // <ReactLenis root>
        //     <div className="loadMe h-screen w-screen fixed top-0 left-0 z-10 bg-rose-950 " />
        //     {children}
        // </ReactLenis>
        <ReactLenis root ref={lenisRef} autoRaf={false}>
            <div className="loadMe h-screen w-screen fixed top-0 left-0 z-20 bg-rose-950 " />
            {children}
        </ReactLenis>
    )
}