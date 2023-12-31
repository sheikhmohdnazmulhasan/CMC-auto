import { Navbar } from "keep-react";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import { NavLink, Outlet } from "react-router-dom";
import logo from '../src/assets/logo.png';
import Headroom from "react-headroom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Root = () => {

    const navLinks = <>
        <NavLink>NavLink</NavLink>
        <NavLink>NavLink</NavLink>
        <NavLink>NavLink</NavLink>
        <NavLink>NavLink</NavLink>

    </>

    return (
        <div className="">

            {/* Secondary Navbar */}
            <div className="h-8 bg-[#E5E5E5] p-1 w-full flex justify-around font-semibold text-slate-500">
                <p>Phone: +9710000000</p>
                <p>WE EXPORT WORLDWIDE</p>
            </div>

            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <Headroom> <div className="w-full navbar bg-white shadow-md">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="hidden md:block flex-1 px-2 mx-2">
                            <img className="w-[60px]" src={logo} alt="" />
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                <li><a>Navbar Item 1</a></li>
                                <li><a>Navbar Item 2</a></li>
                            </ul>
                        </div>
                        <div className=" flex md:hidden justify-end flex-1">
                            <img className="w-[60px]" src={logo} alt="" />
                        </div>
                    </div></Headroom>
                    {/* Page content here */}
                    {/* OutLet */}
                    <div className=""><Outlet /></div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>

            {/* footer */}
            <footer className=" text-white pt-20 bg-white">
                <div className="footer p-10 bg-[#1E1E1E] md:flex justify-between">
                    <div className="">
                        <h1 className="text-xl font-semibold">CMC AUTOMOBILE OUTFITTING</h1>
                        <p className="opacity-55">38 26th St - Al Quoz - Al Quoz Industrial Area 4 - Dubai</p>
                        <p className="opacity-55">Phone: +971 00 000 000</p>
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
