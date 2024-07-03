'use client';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Cursor = () => {
    useGSAP(() => { //cursor animations

        //Page Load Animation
        gsap.from('.cursor', {   //maybe put each one of these in its own wrapper function and wrap the component with it so no more wrapper in layoutpage
            opacity: 0,
            scale: 3,
            duration: 2,
            ease: "power1.inOut",
        })

        //Mouse Follower Animation
        let xTo = gsap.quickTo(".cursor", "x", { duration: 0.4, ease: "power3" }),
            yTo = gsap.quickTo(".cursor", "y", { duration: 0.4, ease: "power3" });

        // let shadowX = gsap.quickSetter(".dynamicShadow", "boxShadow"),
        //     shadowY = gsap.getProperty(".dynamicShadow", "boxShadow");
        window.addEventListener("mousemove", e => {
            // console.log(e.movementX, e.movementY)
            // xTo(Math.round((e.clientX / window.innerWidth) * 100));
            // yTo(Math.round((e.clientY / window.innerHeight) * 100));
            xTo(e.clientX);
            yTo(e.clientY);
        });
    });
    return (
        <>
            <div className="cursor bg-white w-[3vh] h-[3vh] rounded-full fixed top-0 left-0 -translate-x-[50%] -translate-y-[50%] mix-blend-screen z-10" >
                <div className=" bg-red-700 absolute w-[20%] h-[20%] top-[15%] left-[45%] rounded-full" />
            </div>
        </>
    )
}
export default Cursor