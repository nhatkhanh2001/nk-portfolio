'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "Resume", path: "/resume" },
    { title: "Work", path: "/work" },
    { title: "Contact", path: "/contact" },
];
const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex items-center gap-8">
            {menuItems.map((item, index) => (
                <Link key={index} href={item.path} className={`${item.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                    {item.title}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;