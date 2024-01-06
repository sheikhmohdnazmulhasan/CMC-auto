import { Tabs, PanelList, Panel } from 'react-tabtab';

// all

import all2 from '../assets/portfolio/all/Falcon6 (11).jpg';
import all3 from '../assets/portfolio/all/Falcon6 (12).jpg';
import all4 from '../assets/portfolio/all/Falcon6 (13).jpg';
import all6 from '../assets/portfolio/all/Falcon6 (2).jpg';
import all7 from '../assets/portfolio/all/Falcon6 (4).jpg';
import all8 from '../assets/portfolio/all/Falcon6 (5).jpg';
import all11 from '../assets/portfolio/all/Sprinter (1).jpeg';
import all12 from '../assets/portfolio/all/Sprinter (3).jpeg';
import all13 from '../assets/portfolio/all/Sprinter (5).jpeg';
import all14 from '../assets/portfolio/all/VIP4 (1).jpg';
import all15 from '../assets/portfolio/all/VIP4 (10).jpg';
import all16 from '../assets/portfolio/all/VIP4 (11).jpg';
import all17 from '../assets/portfolio/all/VIP4 (14).jpg';
import all18 from '../assets/portfolio/all/VIP4 (14).jpg';
import all19 from '../assets/portfolio/all/VIP4 (15).jpg';
import all20 from '../assets/portfolio/all/VIP4 (2).jpg';
import all21 from '../assets/portfolio/all/VIP4 (3).jpg';
import all22 from '../assets/portfolio/all/VIP4 (4).jpg';
import all23 from '../assets/portfolio/all/VIP4 (5).jpg';
import all124 from '../assets/portfolio/all/VIP4 (6).jpg';
import all25 from '../assets/portfolio/all/VIP4 (5).jpg';
import all26 from '../assets/portfolio/all/VIP4 (8).jpg';
import Wp from '../components/Wp';

const Portfolio = () => {
    return (
        <div className="pt-20 px-5 md:px-10 min-h-screen bg-[url('https://i.ibb.co/NshGgLF/CMC-WEB-BG.jpg')] bg-cover text-white" data-aos="fade-left">
            <h1 className="text-center uppercase text-3xl font-bold">Our work history</h1>
            <p className='text-center'>Welcome to the CMC media page. Explore our gallery of stunning automotive creations, behind-the-scenes glimpses, <br /> and exciting events we’ve been a part of. From concept to reality, our passion for automotive excellence is captured in every image and video.</p>

            <div className="mt-20 flex justify-center pb-20">
                <Wp />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* <img className="h-auto max-w-full rounded-lg" src={all1} alt="" /> */}
                    <img className="h-auto max-w-full rounded-lg" src={all2} alt="" />
                    <img className="h-auto max-w-full rounded-lg" src={all3} alt="" />
                    <img className="h-auto max-w-full rounded-lg" src={all4} alt="" />
                    {/* <img className="h-auto max-w-full rounded-lg" src={all5} alt="" /> */}
                    <img className="h-auto max-w-full rounded-lg" src={all6} alt="" />
                    <img className="h-auto max-w-full rounded-lg" src={all7} alt="" />
                    <img className="h-auto max-w-full rounded-lg" src={all8} alt="" />
                    {/* <img className="h-auto max-w-full rounded-lg" src={all9} alt="" /> */}
                    {/* <img className="h-auto max-w-full rounded-lg" src={all10} alt="" /> */}
                    {/* <img className="h-auto max-w-full rounded-lg" src={all11} alt="" /> */}
                    {/* <img className="h-auto max-w-full rounded-lg" src={all12} alt="" /> */}
                    {/* <img className="h-auto max-w-full rounded-lg" src={all13} alt="" /> */}
                    <img className="h-auto max-w-full rounded-lg" src={all14} alt="" />
                    <img className="h-auto max-w-full rounded-lg" src={all15} alt="" />
                    <img className="h-auto max-w-full rounded-lg" src={all16} alt="" />
                    <img className="h-auto max-w-full rounded-lg" src={all17} alt="" />
                    <img className="h-auto max-w-full rounded-lg" src={all18} alt="" />
                    <img className="h-auto max-w-full rounded-lg" src={all19} alt="" />
                    <img className="h-auto max-w-full rounded-lg" src={all20} alt="" />
                    <img className="h-auto max-w-full rounded-lg" src={all21} alt="" />
                    <img className="h-auto max-w-full rounded-lg" src={all22} alt="" />
                    <img className="h-auto max-w-full rounded-lg" src={all23} alt="" />
                    <img className="h-auto max-w-full rounded-lg" src={all124} alt="" />
                    <img className="h-auto max-w-full rounded-lg" src={all25} alt="" />
                    <img className="h-auto max-w-full rounded-lg" src={all26} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;