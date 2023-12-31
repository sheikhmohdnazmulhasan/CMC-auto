import { Carousel } from "keep-react";
import { ArrowLineLeft, ArrowLineRight } from "phosphor-react";
import img2 from '../assets/c-discover-escalade-concept-curve.jpg';
import img4 from '../assets/c-discover-sprinter-ambassador.jpg';
import img5 from '../assets/c-discover-toyota-luxe-2.jpg';
import img7 from '../assets/c-discover-yukon-y4.jpg';
import { Link } from "react-router-dom";

export const CarouselComponent2 = () => {
    return (
        <Carousel className="h-96"
            showControls={true}
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
                <h4 className="uppercase text-xl font-bold text-[#3EA354]">Cadillac</h4>
                <h1 className="uppercase text-7xl font-bold text-[#2FA053]">ViceRoy</h1>
                <img src={img2} />
                <Link to={'/cadillac'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
            </div>
            <div className="block text-center">
                <h4 className="uppercase text-xl font-bold text-[#3EA354]">mercedes</h4>
                <h1 className="uppercase text-7xl font-bold text-[#2FA053]">romano</h1>
                <img src={img4} />
                <Link to={'/mercedes'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
            </div>
            <div className="block text-center">
                <h4 className="uppercase text-xl font-bold text-[#3EA354]">toyota</h4>
                <h1 className="uppercase text-7xl font-bold text-[#2FA053]">toyota</h1>
                <img src={img5} />
                <Link to={'/toyota'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
            </div>
            <div className="block text-center">
                <h4 className="uppercase text-xl font-bold text-[#3EA354]">gmc</h4>
                <h1 className="uppercase text-7xl font-bold text-[#2FA053]">y4</h1>
                <img src={img7} />
                <Link to={'/gmc'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
            </div>
        </Carousel>
    )
}
