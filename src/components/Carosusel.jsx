import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img2 from '../assets/c-discover-escalade-concept-curve.jpg';
import img4 from '../assets/c-discover-sprinter-ambassador.jpg';
import img5 from '../assets/c-discover-toyota-luxe-2.jpg';
import img7 from '../assets/c-discover-yukon-y4.jpg';
import { Link } from 'react-router-dom';
import { Carousel } from "keep-react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Carosusel = () => {
    return (
        <div className=' w-full mx-20 bg-white'>
            <AwesomeSlider className='h-screen bg-white'>
                <div className="block text-center px-40 bg-white">
                    <h4 className="uppercase text-xl font-bold text-[#3EA354]">Cadillac</h4>
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">ViceRoy</h1>
                    <img className="" src={img2} />
                    <Link to={'/cadillac'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>

                <div className="block text-center px-40 bg-white">
                    <h4 className="uppercase text-xl font-bold text-[#3EA354]">mercedes</h4>
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">romano</h1>
                    <img src={img4} />
                    <Link to={'/mercedes'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>

                <div className="block text-center px-40 bg-white">
                   <h4 className="uppercase text-xl font-bold text-[#3EA354]">toyota</h4>
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">luxe</h1>
                    <img src={img5} />
                    <Link to={'/toyota'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>

                <div className="block text-center px-40 bg-white">
                  <h4 className="uppercase text-xl font-bold text-[#3EA354]">gmc</h4>
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">y4</h1>
                    <img src={img7} />
                    <Link to={'/gmc'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>

            </AwesomeSlider>
        </div>
    );
};

export default Carosusel;