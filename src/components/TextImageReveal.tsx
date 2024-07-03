'use client';
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const TextImageReveal = ({ children }: { children: React.ReactNode }) => {

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
                    ease: "power1.in",
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
    return (
        <>
            {children}
        </>
    )
}
export default TextImageReveal