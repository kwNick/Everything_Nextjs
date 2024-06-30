import NavItem from "./NavItem";
import ScrollProgress from "./ScrollProgress";

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
        <nav className="p-7 relative z-20 text-rose-950 ">
            <div className="progress bg-rose-950 bg-opacity-40 w-10 h-[4px] fixed top-0 left-0" />
            <div className="m-3 fixed top-0 left-[25%] w-[50%] font-bold tracking-widest text-3xl">
                <ScrollProgress />
            </div>
            <div className="p-4 m-3 tracking-widest font-bold text-3xl font-serif fixed top-0 left-0">
                <NavItem>
                    Everything!
                </NavItem>
            </div>
            <div className="p-5 fixed top-0 right-0">
                <ul className="flex flex-col">
                    {list.map(({ title }: { title: string }) => (
                        <li key={title} className="uppercase tracking-widest font-bold duration-300 text-xl">
                            <NavItem  >
                                {title}
                            </NavItem>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Header