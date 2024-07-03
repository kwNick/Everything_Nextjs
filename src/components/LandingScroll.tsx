import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const LandingScroll = ({ children }: { children: React.ReactNode }) => {
    useGSAP(() => {
        gsap.from('.landingScroll', {   //maybe put each one of these in its own wrapper function and wrap the component with it so no more wrapper in layoutpage
            opacity: 0,
            y: 100,
            duration: 2,
            ease: "power1.inOut"
        });
    });
    return (
        <>
            {children}
        </>
    )
}
export default LandingScroll