'use client';
import { cursorEnter, cursorLeave, loadPageOut } from "@/anims/gsap";
import { usePathname, useRouter } from "next/navigation";
import MagneticEffect from "./MagneticEffect";
import { useGSAP } from "@gsap/react";

const NavItem = ({ children, logo = false }: { children: string, logo?: boolean }) => {
    const { contextSafe } = useGSAP();
    const pathname = usePathname();
    const router = useRouter();

    const child = (children == "Everything!" ? "/" : children.toLowerCase())
    const handleLink = contextSafe(() => {
        if (pathname !== child) {
            loadPageOut(child, router);
        }
    });

    const enterHover = contextSafe(() => {
        cursorEnter();
    });
    const leaveHover = contextSafe(() => {
        cursorLeave();
    });

    return (
        <MagneticEffect>
            <button onClick={handleLink} onMouseOver={enterHover} onMouseOut={leaveHover} className={`${logo ? 'landingLogo' : 'landingNavItem'} px-4 py-2 shadow-md rounded-md`}>
                {children}
            </button>
        </MagneticEffect>
    )
}
export default NavItem