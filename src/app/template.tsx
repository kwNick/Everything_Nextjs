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
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis()

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })

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
                        start: '-30% 90%',
                        end: '-30% 40%',
                        // scrub: true,
                        // markers: true,
                        toggleActions: 'play none none reverse',
                    },
                    stagger: 0.02,
                    duration: 0.5,
                })
        })
    });
    useGSAP(() => {
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
                        markers: true,
                        // scrub: true,
                        toggleActions: "play none none reverse",
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
        <div>
            <div className="loadMe h-screen w-screen fixed top-0 left-0 z-10 bg-rose-950 " />
            {children}
        </div>
    )
}