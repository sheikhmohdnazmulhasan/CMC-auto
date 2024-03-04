import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../src/assets/logo.png';
import Headroom from "react-headroom";
import { FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Root = () => {
    const [hideTopNavbar, setHideTopNavbar] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false)
    console.log('Developed by Sheikh Mohammad Nazmul Hasan || nazmulofficial@outlook.com');

    const navLinks = <div className="md:flex items-center text-white">
        <div className="md:flex gap-4 space-y-3 md:space-y-0" onClick={() => setOpenSubMenu(false)}>
            <p> <NavLink to={'/'} className={({ isActive }) => isActive ? 'font-semibold uppercase text-[#3EA354]' : 'font-semibold uppercase hover:text-[#3EA354]'}>Home</NavLink></p>
            <p><NavLink to={'/services'} className={({ isActive }) => isActive ? 'font-semibold uppercase text-[#3EA354]' : 'font-semibold uppercase hover:text-[#3EA354]'}>Services</NavLink></p>
        </div>
        <div className="relative my-3 md:my-0">
            <a className="font-semibold cursor-pointer md:ml-3 flex items-center hover:text-[#3EA354]" onClick={() => setOpenSubMenu(!openSubMenu)} onMouseEnter={() => setOpenSubMenu(true)}>
                VEHICLES <IoIosArrowForward />
            </a>
            <div className={openSubMenu ? 'absolute mt-2 uppercase py-2 w-48 !bg-black border rounded-md shadow-lg' : 'absolute uppercase hidden mt-2 py-2 w-48 bg-white border rounded-md shadow-lg'} onMouseLeave={() => setOpenSubMenu(false)}>
                <Link to={'/v-class'} className="block px-4 py-2 font-semibold hover:text-[#3EA354]" onClick={() => setOpenSubMenu(false)}>  MERCEDES V CLASS</Link>

                <Link to={'/falcon'} className="block px-4 py-2 font-semibold hover:text-[#3EA354]" onClick={() => setOpenSubMenu(false)}> Falcon type</Link>

                <Link to={'/sprinter'} className="block px-4 py-2 font-semibold hover:text-[#3EA354]" onClick={() => setOpenSubMenu(false)}> Sprinter</Link>

                <Link to={'/mercedes-g-class'} className="block px-4 py-2 font-semibold hover:text-[#3EA354]" onClick={() => setOpenSubMenu(false)}> Mercedes g class</Link>

                <Link to={'/mercedes-s-class'} className="block px-4 py-2 font-semibold hover:text-[#3EA354]" onClick={() => setOpenSubMenu(false)}> Mercedes S-Class</Link>

                <Link to={'/gmc'} className="block px-4 py-2 font-semibold hover:text-[#3EA354]" onClick={() => setOpenSubMenu(false)}> GMC</Link>

                <Link to={'/vehicles'} className="block px-4 py-2 font-semibold hover:text-[#3EA354]" onClick={() => setOpenSubMenu(false)}> more VEHICLES </Link>
            </div>
        </div>
        <div className="md:flex gap-4 md:ml-3 space-y-3 md:space-y-0" onClick={() => setOpenSubMenu(false)}>
            <p> <NavLink to={'/media'} className={({ isActive }) => isActive ? 'font-semibold uppercase text-[#3EA354]' : 'font-semibold uppercase hover:text-[#3EA354]'}>Media</NavLink></p>
            <p><NavLink to={'/about'} className={({ isActive }) => isActive ? 'font-semibold uppercase text-[#3EA354]' : 'font-semibold uppercase hover:text-[#3EA354]'}>About</NavLink></p>
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
        <div className="z-[900000000000]">
            {/* 
            Secondary Navbar */}
            {/* <div className="h-8 text-sm bg-[#292929] p-1 w-full hidden md:flex justify-around font-semibold text-slate-400">
                <p data-aos="fade-right">Phone: +971 50 358 3882</p>
                <p data-aos="fade-left">WE EXPORT WORLDWIDE</p>
            </div> */}

            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* Navbar */}
                    <Headroom className=" !bg-black z-[50000000000]"> <div className={hideTopNavbar ? 'w-full navbar !bg-black' : 'w-full navbar !bg-black shadow-lg'}>
                        <div className="flex-none lg:hidden" onClick={() => setHideTopNavbar(!hideTopNavbar)}>
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="hidden md:ml-7 md:block flex-1 px-2 mx-2">
                            <Link to={'/'}> <img className="w-[60px]" src={logo} alt="" /></Link>
                        </div>
                        <div className="flex-none hidden lg:block ">
                            <ul className="menu menu-horizontal md:mr-7 ">
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
                    <div className="min-h-screen overflow-hidden"><Outlet onClick={() => setHideTopNavbar(!hideTopNavbar)} /></div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full !bg-black pt-20 block md:hidden">
                        {/* Sidebar content here */}
                        {navLinks}
                    </ul>
                </div>
            </div>

            {/* footer */}
            <footer className=" text-white bg-white">
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
                            <Link to={'/about'} className="link link-hover ">About us</Link> <br />
                            <Link to={'/contact'} className="link link-hover">Contact</Link> <br />
                            <Link to={'/media'} className="link link-hover ">Media</Link> <br />
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
                        {/*  */}
                    </form>
                </div>
                <div className=" p-4 bg-black flex flex-col md:flex-row justify-center md:justify-between w-full">
                    <aside className="flex justify-center">
                        <div className="">
                            <p className="hidden md:flex justify-center">Copyright © CMC AUTOMOBILE OUTFITTING, 2024 - All right reserved</p>
                            {/* <p className="hidden md:flex opacity-80 mt-2">Developed by &nbsp; <a className="hover:underline" href="http://intellitixdev.com/" target="_blank" rel="noreferrer">Intellitix Technology</a></p> */}
                        </div>
                        <div className="">
                            <p className="flex justify-center md:hidden">Copyright © CMC, 2024 - All right reserved</p>
                            {/* <p className=" md:hidden opacity-80 mt-2">Developed by <a className="hover:underline" href="http://intellitixdev.com/" target="_blank" rel="noreferrer">Intellitix Technology</a></p> */}
                        </div>
                    </aside>

                    <aside className="flex gap-3 text-3xl justify-center mt-3 md:mt-0">
                        <a href="https://www.instagram.com/cmc.uae?igsh=MmE1emZqYjRhZHVv" target="_blank" rel="noreferrer"> <FaInstagram className="cursor-pointer hover:scale-110 transition-all hover:text-[#3EA354]" /></a>

                        <a href="https://www.tiktok.com/@cmc_modification_center" target="_blank" rel="noreferrer">
                            <FaTiktok className="cursor-pointer hover:scale-110 transition-all hover:text-[#3EA354]" /> </a>

                        <a href="https://wa.me/+971503583882" target="_blank" rel="noreferrer">
                            <FaWhatsapp className="cursor-pointer hover:scale-110 transition-all hover:text-[#3EA354]" />
                        </a>

                    </aside>
                </div>
            </footer>
            {/* <ScrollToTop width="40" smooth /> */}

        </div>
    );
}


export default Root;
