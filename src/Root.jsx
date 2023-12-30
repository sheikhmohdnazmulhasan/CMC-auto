import { Navbar } from "keep-react";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import { NavLink, Outlet } from "react-router-dom";
import logo from '../src/assets/logo.png';
import Headroom from "react-headroom";

const Root = () => {

    const navLinks = <>
        <NavLink>NavLink</NavLink>
        <NavLink>NavLink</NavLink>
        <NavLink>NavLink</NavLink>
        <NavLink>NavLink</NavLink>

    </>

    return (
        <div className="">
            <div className="h-8 bg-[#E5E5E5] p-1 w-full flex justify-around font-semibold text-slate-500">
                <div className="">
                    <p>Phone: +9710000000</p>
                </div>
                <div className="">
                    <p>
                        WE EXPORT WORLDWIDE</p>
                </div>
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
                            <Navbar.Container tag="ul" className="flex flex-col gap-5">{navLinks}</Navbar.Container>
                        </Navbar.Collapse>
                    </Navbar.Container>
                </Navbar>
            </Headroom>

            {/* OutLet */}
            <div className="">
                <Outlet />
            </div>
        </div>
    );
}


export default Root;
