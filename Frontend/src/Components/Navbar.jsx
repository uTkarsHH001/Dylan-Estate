import { IoLanguage } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

export default function Navbar(){

    return(
        <>
            <nav className="hidden md:block bg-[#FCF8F4] w-full px-10 py-2 font-bold flex justify-between items-baseline fixed top-0">
                <div className="">
                    <img src="logo.png" alt="" />
                </div>
                <div className="">
                    <ul className="flex gap-8">
                        <li><a className="hover:underline active:underline" href="#">PROPERTIES</a></li>
                        <li><a className="hover:underline active:underline" href="#">MY DASHBOARD/ACTIVITY</a></li>
                        <li><a className="hover:underline active:underline" href="#">LIST YOUR PROPERTY</a></li>
                        <li><a className="hover:underline active:underline" href="#">CONTACT US</a></li>
                        <li><a className="hover:underline active:underline" href="#">MORE</a></li>
                        <span>|</span>
                        <li className="text-2xl"><a  href="#"><IoLanguage /></a></li>
                        <li className="text-2xl"><a href="#"><CgProfile /></a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}