import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img2 from '../assets/c-discover-escalade-concept-curve.jpg';
import img4 from '../assets/c-discover-sprinter-ambassador.jpg';
import img5 from '../assets/c-discover-toyota-luxe-2.jpg';
import img7 from '../assets/c-discover-yukon-y4.jpg';
import { Link } from "react-router-dom";

const CarouselComponent = () => {
    return (
        <div className="max-w-5xl mx-10 md:mx-auto flex justify-center">

            <Carousel>
                <div className="block text-center">
                    <h4 className="uppercase text-xl font-bold text-[#3EA354]">Cadillac</h4>
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">ViceRoy</h1>
                    <img className="" src={img2} />
                    <Link to={'/cadillac'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>
                <div className="block text-center">
                    <h4 className="uppercase text-xl font-bold text-[#3EA354]">mercedes</h4>
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">romano</h1>
                    <img src={img4} />
                    <Link to={'/mercedes'}> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>
                <div className="block text-center">
                    <h4 className="uppercase text-xl font-bold text-[#3EA354]">Cadillac</h4>
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">ViceRoy</h1>
                    <img src={img5} />
                    <Link> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>
                <div className="block text-center">
                    <h4 className="uppercase text-xl font-bold text-[#3EA354]">Cadillac</h4>
                    <h1 className="uppercase text-7xl font-bold text-[#2FA053]">ViceRoy</h1>
                    <img src={img7} />
                    <Link> <button className="mb-10 bg-[#3EA354] hover:bg-transparent hover:text-[#3EA354] border-2 border-[#3EA354] transition-all px-3 py-2 uppercase rounded-md text-white">View Vehicles</button></Link>
                </div>
            </Carousel>
        </div>

    );
};

export default CarouselComponent;