import img1 from '../assets/Car details/1/VIP5 (11).jpg';
import img2 from '../assets/Car details/1/VIP5 (4).jpg';
import img3 from '../assets/Car details/1/VIP5 (5).jpg';
import img4 from '../assets/Car details/1/VIP5 (7).jpg';
import img5 from '../assets/Car details/1/VIP5 (9).jpg';

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
                <div className="space-y-4">
                    <p className="opacity-80 "><span className='font-bold'>Tailored Elegance:</span> Elevate your driving experience with our exclusive V Class 5 Seats car decoration service. We specialize in transforming your V Class into a personalized masterpiece, blending style and functionality seamlessly. Whether you prefer a sophisticated and luxurious look or a sportier aesthetic, our expert decorators are here to bring your vision to life. Explore our range of premium materials, color schemes, and custom accessories to create a unique and eye-catching interior that reflects your individual taste.</p>

                    <p className="opacity-80 "><span className='font-bold'>Premium Materials:</span> Indulge in luxury with our carefully sourced premium materials. From high-quality leather upholstery to stylish trim options, every detail is selected to provide durability, comfort, and a luxurious feel.</p>

                    <p className="opacity-80 "><span className='font-bold'>Comfort Redefined:</span> Experience unmatched comfort with ergonomically designed seating and carefully curated interior layouts. Whether it's a spacious executive V Class or a cozy family van, our designs prioritize your comfort on every journey.</p>

                    <p className="opacity-80 "><span className='font-bold'>State-of-the-Art Technology:</span> Stay connected and entertained on the road with our integration of cutting-edge technology. From advanced audio-visual systems to smart connectivity features, we bring the latest innovations to your V Class 5 Seats interior.</p>

                    <p className="opacity-80 "><span className='font-bold'>Personalized Branding:</span> For businesses utilizing V Class 5 Seats for transportation, we offer seamless branding integration. Elevate your corporate image by incorporating logos, color schemes, and brand elements into the interior design.
                    </p>

                    <p className="opacity-80 "><span className='font-bold'>Safety and Compliance:</span> Safety is paramount. Our designs ensure that your V Class 5 Seats meets all safety standards and regulations, providing peace of mind on every journey.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default CarAbout;