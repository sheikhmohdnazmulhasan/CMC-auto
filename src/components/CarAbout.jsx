import img1 from '../assets/Car details/1/VIP5 (11).jpg';
import img2 from '../assets/Car details/1/VIP5 (4).jpg';
import img3 from '../assets/Car details/1/VIP5 (5).jpg';
import img4 from '../assets/Car details/1/VIP5 (7).jpg';
import DataCard from './DataCard';
import imgX2 from '../assets/Car-x/v5/Tailored Elegance.jpg';
import imgX1 from '../assets/Car-x/v5/Comfort Redefined (2).jpg';
import imgX3 from '../assets/Car-x/v5/Premium Materials.jpg';
import imgX4 from '../assets/Car-x/v5/State-of-the-Art Technology.jpg';
import CarPhoto from './CarPhoto';
import car1 from '../assets/Car-x/v5/g/WhatsApp Image 2023-12-30 at 19.13.44_22767174.jpg';
import car2 from '../assets/Car-x/v5/g/WhatsApp Image 2023-12-30 at 19.13.44_c9416490.jpg';
import car3 from '../assets/Car-x/v5/g/WhatsApp Image 2023-12-30 at 19.13.51_73b91c22.jpg';
import car4 from '../assets/Car-x/v5/g/WhatsApp Image 2023-12-30 at 19.13.52_c4519b57.jpg';
import car5 from '../assets/Car-x/v5/g/WhatsApp Image 2023-12-30 at 19.13.54_de2a2d24.jpg';
import car6 from '../assets/Car-x/v5/g/WhatsApp Image 2023-12-30 at 19.13.56_c3ee72de.jpg';

const CarAbout = () => {
    return (
        <div className="mt-20 ">
            <div className="mx-5 md:mx-10">
                <h1 className="text-3xl font-bold">Welcome to our V Class 5 Seats Car Decoration Service</h1>
                <p className="opacity-80 mt-4">Elevate your driving experience with our exclusive V Class 5 Seats car decoration service. We specialize in transforming your V Class into a personalized masterpiece, blending style and functionality seamlessly. Whether you prefer a sophisticated and luxurious look or a sportier aesthetic, our expert decorators are here to bring your vision to life. Explore our range of premium materials, color schemes, and custom accessories to create a unique and eye-catching interior that reflects your individual taste.</p>
            </div>
            <div className="mt-10">
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src={img1} className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={img2} className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={img3} className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={img4} className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
            <div className="mx-5 mt-20 md:mx-10">
                <h1 className="text-3xl font-bold mb-5">Why Choose Our V Class 5 Seats Car Decor Service?</h1>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <DataCard img={imgX1} title={'Tailored Elegance'} description={'Elevate your driving experience with our exclusive V Class 5 Seats car decoration service. We specialize in transforming your V Class into a personalized masterpiece, blending style and functionality seamlessly. '} />

                    <DataCard img={imgX2} title={'Comfort Redefined'} description={'Experience unmatched comfort with ergonomically designed seating and carefully curated interior layouts. Whether it`s a spacious executive V Class or a cozy family van, our designs prioritize your comfort on every journey.'} />

                    <DataCard img={imgX3} title={'Premium Materials'} description={'Indulge in luxury with our carefully sourced premium materials. From high-quality leather upholstery to stylish trim options, every detail is selected to provide durability, comfort, and a luxurious feel.'} />

                    <DataCard img={imgX4} title={'State-of-the-Art Technology'} description={'Stay connected and entertained on the road with our integration of cutting-edge technology. From advanced audio-visual systems to smart connectivity features, we bring the latest innovations to your V Class 5 Seats interior.'} />
                </div>
            </div>
            <div className="mx-5 md:mx-10 mt-20">
                <CarPhoto p1={car1} p2={car2} p3={car3} p4={car4} p5={car5} p6={car6} />
            </div>
        </div>

    );
};

export default CarAbout;