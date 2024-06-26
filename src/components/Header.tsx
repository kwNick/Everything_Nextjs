import Link from "next/link";

const Header = () => {
    const list = [
        {
            title: "GSAP"
        },
        {
            title: "About"
        },
        {
            title: "Contact"
        },
        {
            title: "Docs"
        },
    ];
    return (
        <nav className="p-7 relative">
            <div className="pt-5 pl-5 tracking-widest font-semibold text-2xl font-serif fixed top-0 left-0">
                <Link href={"/"}>
                    <p>
                        Everything!
                    </p>
                </Link>
            </div>
            <div className="p-5 fixed top-0 right-0">
                <ul className="flex flex-col gap-5">
                    {list.map(({ title }: { title: string }) => (
                        <li className="uppercase tracking-widest font-semibold hover:underline duration-300">
                            <Link href={`/${title.toLowerCase()}`}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Header