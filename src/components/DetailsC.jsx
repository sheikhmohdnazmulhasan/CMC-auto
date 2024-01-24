import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

// import { Carousel } from "keep-react";

// eslint-disable-next-line react/prop-types
export const DetailC = ({ img1, img2, img3, img4 }) => {
    return (
        <AwesomeSlider >
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
        </AwesomeSlider>
    )
}
