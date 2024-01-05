import { Carousel } from "keep-react";
import { ArrowLineLeft, ArrowLineRight } from "phosphor-react";
import img2 from '../assets/Carosol/WhatsApp Image 2024-01-05 at 12.27.28_a6454df8.jpg';
import img4 from '../assets/Carosol/WhatsApp Image 2024-01-05 at 12.37.38_d80386b1.jpg';
import img5 from '../assets/Carosol/WhatsApp Image 2024-01-05 at 12.45.57_56b566cc.jpg';
import img7 from '../assets/Carosol/WhatsApp Image 2024-01-05 at 13.13.28_15b03117.jpg';
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
                <h4 className="uppercase text-xl font-bold text-[#3EA354]">Mercedes Benz</h4>
                <h1 className="uppercase text-7xl font-bold text-[#2FA053]">V CLASS</h1>
                <img src={img2} />
                <Link to={'/mercedes-vip'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
            </div>
            <div className="block text-center">
                <h4 className="uppercase text-xl font-bold text-[#3EA354]">Bus</h4>
                <h1 className="uppercase text-7xl font-bold text-[#2FA053]">Long Bus</h1>
                <img src={img4} />
                <Link to={'/mercedes'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
            </div>
            <div className="block text-center">
                <h4 className="uppercase text-xl font-bold text-[#3EA354]">Mercedes Benz</h4>
                <h1 className="uppercase text-7xl font-bold text-[#2FA053]">Falcon</h1>
                <img src={img5} />
                <Link to={'/toyota'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
            </div>
            <div className="block text-center">
                <h4 className="uppercase text-xl font-bold text-[#3EA354]">5 SEAT Type</h4>
                <h1 className="uppercase text-7xl font-bold text-[#2FA053]">5 SEAT</h1>
                <img src={img7} />
                <Link to={'/gmc'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
            </div>
        </Carousel>
    )
}
