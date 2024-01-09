import { Carousel } from "keep-react";
import { ArrowLineLeft, ArrowLineRight } from "phosphor-react";
import FALCON from '../assets/Carosol/FALCON.png';
import LONGBUS from '../assets/Carosol/LONG BUS.png';
import MARSEDESGCLASS from '../assets/Carosol/MARSEDES G CLASS.png';
import MARSEDESVCLASS from '../assets/Carosol/MARSEDES V CLASS.png';
import SPRINTER from '../assets/Carosol/SPRINTER.png';
import { Link } from "react-router-dom";

export const CarouselComponent2 = () => {
    return (
        <Carousel className="h-96"
            showControls={false}
            leftControl={
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#3EA354] group-hover:bg-[#308041] group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
                    <ArrowLineLeft size={20} weight="bold" color="white" />
                </span>
            }
            rightControl={
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full  bg-[#3EA354] group-hover:bg-[#308041] group-focus:outline-none group-focus:ring-2 group-focus:ring-white sm:h-10 sm:w-10">
                    <ArrowLineRight size={20} weight="bold" color="white" />
                </span>
            }>

            {/* **** */}
            <div className="block text-center">
                {/* <h4 className="uppercase text-xl font-bold text-[#3EA354]">Mercedes Benz</h4> */}
                <h1 className="uppercase text-4xl font-bold text-[#2FA053]">Falcon</h1>
                <img src={FALCON} />
                <Link to={'/mercedes-vip'}><button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
            </div>
            <div className="block text-center">
                {/* <h4 className="uppercase text-xl font-bold text-[#3EA354]">Bus</h4> */}
                <h1 className="uppercase text-4xl font-bold text-[#2FA053]">Long Bus</h1>
                <img src={LONGBUS} />
                <Link to={'/long-busses-type'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
            </div>
            <div className="block text-center">
                {/* <h4 className="uppercase text-xl font-bold text-[#3EA354]">Mercedes Benz</h4> */}
                <h1 className="uppercase text-4xl font-bold text-[#2FA053]">MARSEDES G CLASS</h1>
                <img src={MARSEDESGCLASS} />
                <Link to={'/mercedes-g-class'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
            </div>
            <div className="block text-center">
                {/* <h4 className="uppercase text-xl font-bold text-[#3EA354]">5 SEAT Type</h4> */}
                <h1 className="uppercase text-4xl font-bold text-[#2FA053]">MARSEDES V CLASS</h1>
                <img src={MARSEDESVCLASS} />
                <Link to={'/v-class-4'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
            </div>
            <div className="block text-center">
                {/* <h4 className="uppercase text-xl font-bold text-[#3EA354]">5 SEAT Type</h4> */}
                <h1 className="uppercase text-4xl font-bold text-[#2FA053]">SPRINTER</h1>
                <img src={SPRINTER} />
                <Link to={'/sprinter'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
            </div>
        </Carousel>
    )
}
