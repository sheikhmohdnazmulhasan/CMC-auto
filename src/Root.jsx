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

            {/* Navbar */}
            <Headroom>
                <Navbar fluid={true} className="shadow">
                    <Navbar.Container className="flex items-center justify-between">
                        <Navbar.Brand> <img src={logo} alt="CMC Logo" width="60" /> </Navbar.Brand>

                        <Navbar.Container className="flex items-center gap-6">
                            <Navbar.Container tag="ul" className="lg:flex hidden items-center justify-between gap-4">
                                <Navbar.Link icon={<FacebookLogo size={20} color="#444" />} iconAnimation={false} />
                                <Navbar.Link icon={<InstagramLogo size={20} color="#444" />} iconAnimation={false} />
                                <Navbar.Link icon={<TwitterLogo size={20} color="#444" />} iconAnimation={false} />
                            </Navbar.Container>

                            <Navbar.Container className="flex gap-1">
                                <Navbar.Toggle className=" block" /> <div className="hidden md:block space-x-5">{navLinks}</div>
                            </Navbar.Container>

                        </Navbar.Container>

                        <Navbar.Collapse collapseType="sidebar" className="fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2">
                            <Navbar.Container tag="ul" className="flex flex-col  gap-5">{navLinks}</Navbar.Container>
                        </Navbar.Collapse>
                    </Navbar.Container>
                </Navbar>
            </Headroom>

            {/* OutLet */}
            <div className=""><Outlet /></div>

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
