import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../src/assets/logo.png';
import Headroom from "react-headroom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useState, useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const Root = () => {
    const [hideTopNavbar, setHideTopNavbar] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false)

    const navLinks = <div className="md:flex items-center">
        <div className="md:flex gap-4 space-y-3 md:space-y-0" onClick={() => setOpenSubMenu(false)}>
            <p> <NavLink to={'/'} className={({ isActive }) => isActive ? 'font-semibold uppercase text-[#3EA354]' : 'font-semibold uppercase hover:text-[#3EA354]'}>Home</NavLink></p>
            <p><NavLink to={'/about'} className={({ isActive }) => isActive ? 'font-semibold uppercase text-[#3EA354]' : 'font-semibold uppercase hover:text-[#3EA354]'}>About</NavLink></p>
        </div>
        <div className="relative my-3 md:my-0">
            <a className="font-semibold cursor-pointer md:ml-3 flex items-center hover:text-[#3EA354]" onClick={() => setOpenSubMenu(!openSubMenu)} onMouseEnter={() => setOpenSubMenu(true)}>
                VEHICLES <IoIosArrowForward />
            </a>
            <div className={openSubMenu ? 'absolute mt-2 py-2 w-48 bg-white border rounded-md shadow-lg' : 'absolute hidden mt-2 py-2 w-48 bg-white border rounded-md shadow-lg'} onMouseLeave={() => setOpenSubMenu(false)}>
                <Link to={'/v-class-5'} className="block px-4 py-2 font-semibold hover:text-[#3EA354]" onClick={() => setOpenSubMenu(false)}>V Class 5 Seats</Link>
                <Link to={'/v-class-4'} className="block px-4 py-2 font-semibold hover:text-[#3EA354]" onClick={() => setOpenSubMenu(false)}> V Class 4 Seats</Link>
                <Link to={'/falcon'} className="block px-4 py-2 font-semibold hover:text-[#3EA354]" onClick={() => setOpenSubMenu(false)}> Falcon</Link>
                <Link to={'/sprinter'} className="block px-4 py-2 font-semibold hover:text-[#3EA354]" onClick={() => setOpenSubMenu(false)}> Sprinter</Link>
            </div>
        </div>
        <div className="md:flex gap-4 md:ml-3 space-y-3 md:space-y-0" onClick={() => setOpenSubMenu(false)}>
            <p> <NavLink to={'/portfolio'} className={({ isActive }) => isActive ? 'font-semibold uppercase text-[#3EA354]' : 'font-semibold uppercase hover:text-[#3EA354]'}>Portfolio</NavLink></p>
            <p><NavLink to={'/contact'} className={({ isActive }) => isActive ? 'font-semibold uppercase text-[#3EA354]' : 'font-semibold uppercase hover:text-[#3EA354]'}>Contact</NavLink></p>
        </div>
    </div>

    useEffect(() => {
        function handleScroll() {

            if (window.scrollY > 0) {
                setOpenSubMenu(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <div className="">
            {/* 
            Secondary Navbar */}
            {!hideTopNavbar && <div className="h-8 bg-[#E5E5E5] p-1 w-full flex justify-around font-semibold text-slate-500">
                <p>Phone: +971 50 358 3882</p>
                <p>WE EXPORT WORLDWIDE</p>
            </div>}

            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <Headroom> <div className={hideTopNavbar ? 'w-full navbar bg-white' : 'w-full navbar bg-white shadow-md'}>
                        <div className="flex-none lg:hidden" onClick={() => setHideTopNavbar(!hideTopNavbar)}>
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                {hideTopNavbar ? <MdOutlineCancel className="text-2xl" /> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>}
                            </label>
                        </div>
                        <div className="hidden md:block flex-1 px-2 mx-2">
                            <Link to={'/'}> <img className="w-[60px]" src={logo} alt="" /></Link>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {navLinks}
                            </ul>
                        </div>
                        <div className=" flex md:hidden justify-end flex-1">
                            <Link to={'/'}> <img className="w-[60px]" src={logo} alt="" /></Link>
                        </div>
                    </div></Headroom>
                    {/* Page content here */}
                    {/* OutLet */}
                    <div className="min-h-screen overflow-hidden" ><Outlet /></div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 pt-20 block md:hidden">
                        {/* Sidebar content here */}
                        {navLinks}
                    </ul>
                </div>
            </div>

            {/* footer */}
            <footer className=" text-white pt-20 bg-white">
                <div className="footer p-10 bg-[#1E1E1E] md:flex justify-between">
                    <div className="">
                        <h1 className="text-xl font-semibold">CMC AUTOMOBILE OUTFITTING</h1>
                        <p className="opacity-55">38 26th St - Al Quoz - Al Quoz Industrial Area 4 - Dubai</p>
                        <p className="opacity-55">Phone: +971 50 358 3882</p>
                        <p className="opacity-55">Email: info@cmcauto.ae</p>
                    </div>
                    <nav>
                        <header className="footer-title">Useful Links</header>
                        <div className="opacity-70 space-y-5">
                            <a className="link link-hover ">About us</a> <br />
                            <a className="link link-hover">Contact</a> <br />
                            <a className="link link-hover ">Portfolio</a> <br />
                        </div>
                    </nav>
                    <form>
                        <header className="footer-title">Newsletter</header>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="opacity-55">Stay in the loop with the latest updates and exclusive offers, join our newsletter today for a front-row seat to automotive excellence!</span>
                            </label>
                            <div className="join">
                                <input type="text" placeholder="username@site.com" className="input text-black rounded-sm input-bordered join-item" />
                                <button className="btn bg-[#3EA354] hover:bg-[#388e4a] text-white rounded-sm join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className=" p-4 bg-black flex flex-col md:flex-row justify-center md:justify-between w-full px-10">
                    <aside className="flex justify-center">
                        <p className="hidden md:flex justify-center">Copyright © CMC AUTOMOBILE OUTFITTING, 2023 - All right reserved</p>
                        <p className="flex justify-center md:hidden">Copyright © CMC, 2023 - All right reserved</p>
                    </aside>
                    <aside className="flex gap-3 text-3xl justify-center mt-3 md:mt-0">
                        <FaFacebook className="cursor-pointer hover:scale-110 transition-all hover:text-[#3EA354]" />
                        <FaInstagram className="cursor-pointer hover:scale-110 transition-all hover:text-[#3EA354]" />
                        <BsTwitterX className="cursor-pointer hover:scale-110 transition-all hover:text-[#3EA354]" />
                    </aside>
                </div>
            </footer>

        </div>
    );
}


export default Root;
