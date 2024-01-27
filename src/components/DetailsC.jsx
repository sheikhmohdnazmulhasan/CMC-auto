import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import { Carousel } from "keep-react";
import { ArrowLineLeft, ArrowLineRight } from "phosphor-react";
import { useEffect } from 'react';

// import { Carousel } from "keep-react";

// eslint-disable-next-line react/prop-types
export const DetailC = ({ img1, img2, img3, img4 }) => {

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
            <div className="">
                <img src={img1} alt="" />
            </div>
            <div className="">
                <img src={img2} alt="" />
            </div>
            <div className="">
                <img src={img3} alt="" />
            </div>
            <div className="">
                <img src={img4} alt="" />
            </div>
        </Carousel>
    )
}
