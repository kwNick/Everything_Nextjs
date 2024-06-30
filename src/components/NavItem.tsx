'use client';
import { cursorEnter, cursorLeave, loadPageOut } from "@/anims/gsap";
import { usePathname, useRouter } from "next/navigation";
import MagneticEffect from "./MagneticEffect";

const NavItem = ({ children }: { children: string }) => {
    const pathname = usePathname();
    const router = useRouter();

    const child = (children == "Everything!" ? "/" : children.toLowerCase())
    const handleLink = () => {
        if (pathname !== child) {
            // console.log(pathname, children.toLowerCase())
            loadPageOut(child, router);
        }
    };

    const enterHover = () => {
        cursorEnter();
    }
    const leaveHover = () => {
        cursorLeave();
    }

    return (
        <MagneticEffect>
            <button onClick={handleLink} onMouseEnter={enterHover} onMouseLeave={leaveHover} className="px-5 py-3">
                {children}
            </button>
        </MagneticEffect>
    )
}
export default NavItem