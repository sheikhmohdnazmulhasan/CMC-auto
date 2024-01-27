import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import FALCON from '../assets/Carosol/FALCON.png';
import MarsedesS from '../assets/xx/m.jpg';
import MARSEDESGCLASS from '../assets/Carosol/MARSEDES G CLASS.png';
import MARSEDESVCLASS from '../assets/Carosol/MARSEDES V CLASS.png';
import SPRINTER from '../assets/xx/x.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// 
// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <Swiper 
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper flex justify-center bg-black"
        >
            <SwiperSlide>
                <div className="flex flex-col justify-center text-center px-40 ">
                    {/* <h4 className="uppercase text-xl font-bold text-[#3EA354]">Mercedes Benz</h4> */}
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">Falcon</h1>
                    <img className="" src={FALCON} />
                    <Link to={'/falcon'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col justify-center text-center px-40">
                    {/* <h4 className="uppercase text-xl font-bold text-[#3EA354]">Bus</h4> */}
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">mercedes S Class</h1>
                    <img src={MarsedesS} />
                    <Link to={'/mercedes-s-class'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col justify-center text-center px-40">
                    {/* <h4 className="uppercase text-xl font-bold text-[#3EA354]">Mercedes Benz</h4> */}
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">MARSEDES G CLASS</h1>
                    <img src={MARSEDESGCLASS} />
                    <Link to={'/mercedes-g-class'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col justify-center text-center px-40">
                    {/* <h4 className="uppercase text-xl font-bold text-[#3EA354]">5 SEAT Type</h4> */}
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]"> MARSEDES V CLASS</h1>
                    <img src={MARSEDESVCLASS} />
                    <Link to={'/v-class-4'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col justify-center text-center px-40">
                    {/* <h4 className="uppercase text-xl font-bold text-[#3EA354]">5 SEAT Type</h4> */}
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]"> SPRINTER</h1>
                    <img src={SPRINTER} />
                    <Link to={'/sprinter'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
