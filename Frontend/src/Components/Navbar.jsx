import { useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isActive, setIsActive] = useState({
        properties: false,
        dashboard: false,
        list: true,
        contact: false,
        more: false
    })

    return (
        <>
            <div className="h-full w-full overflow-x-hidden relative">
                <nav className="bg-[#FCF8F4] w-full p-2 font-bold fixed top-0 z-10">
                    <div className="flex justify-between items-center md:items-baseline px-4">
                        <img src="logo.png" alt="Logo" />
                        <div className="text-3xl lg:hidden cursor-pointer" onClick={toggleMenu}>
                            <GiHamburgerMenu />
                        </div>
                        <ul className="hidden lg:flex lg:justify-end lg:gap-6 xl:gap-8">
                            <li><a className={`hover:underline ${isActive.properties ? `underline` : ``}`} href="#">PROPERTIES</a></li>
                            <li><a className={`hover:underline ${isActive.dashboard ? `underline` : ``}`} href="#">MY DASHBOARD/ACTIVITY</a></li>
                            <li><a className={`hover:underline ${isActive.list ? `underline` : ``}`} href="#">LIST YOUR PROPERTY</a></li>
                            <li><a className={`hover:underline ${isActive.contact ? `underline` : ``}`} href="#">CONTACT US</a></li>
                            <li><a className={`hover:underline ${isActive.more ? `underline` : ``}`} href="#">MORE</a></li>
                            <span>|</span>
                            <li className="text-2xl"><a href="#"><IoLanguage /></a></li>
                            <li className="text-2xl"><a href="#"><CgProfile /></a></li>
                        </ul>
                    </div>
                    {/* Mobile Menu */}
                    <div className={`lg:hidden fixed top-0 left-0 h-full w-full bg-[#FCF8F4] p-4 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                        <div className="flex justify-end mb-4">
                            <button className="text-3xl" onClick={toggleMenu}>×</button>
                        </div>
                        <ul className="flex flex-col items-center gap-4">
                            <li><a className="hover:underline active:underline" href="#" onClick={toggleMenu}>PROPERTIES</a></li>
                            <li><a className="hover:underline active:underline" href="#" onClick={toggleMenu}>MY DASHBOARD/ACTIVITY</a></li>
                            <li><a className="hover:underline active:underline" href="#" onClick={toggleMenu}>LIST YOUR PROPERTY</a></li>
                            <li><a className="hover:underline active:underline" href="#" onClick={toggleMenu}>CONTACT US</a></li>
                            <li><a className="hover:underline active:underline" href="#" onClick={toggleMenu}>MORE</a></li>
                            <span>|</span>
                            <li className="text-2xl"><a href="#" onClick={toggleMenu}><IoLanguage /></a></li>
                            <li className="text-2xl"><a href="#" onClick={toggleMenu}><CgProfile /></a></li>
                        </ul>
                    </div>
                </nav>
                <div className="w-full h-full bg-slate-500"></div>
            </div>
        </>
    );
}
