'use client';
import { loadPageOut } from "@/anims/gsap";
import { usePathname, useRouter } from "next/navigation";

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

    return (
        <button onClick={handleLink}>
            {children}
        </button>
    )
}
export default NavItem