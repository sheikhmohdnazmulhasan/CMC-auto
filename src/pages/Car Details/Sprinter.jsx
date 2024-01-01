import img1 from '../../assets/Car details/4/Sprinter (1).jpeg';
import img2 from '../../assets/Car details/4/Sprinter (2).jpeg';
import img3 from '../../assets/Car details/4/Sprinter (3).jpeg';
import img4 from '../../assets/Car details/4/Sprinter (4).jpeg';

const Sprinter = () => {
    return (
        <div data-aos="fade-left">
            <div className="mt-20 ">
                <div className="mx-5 md:mx-10">
                    <h1 className="text-3xl font-bold">Elevate Your Journey with Our Exclusive Sprinter Car Interior Decor Service</h1>
                    <p className="opacity-80 mt-4">Are you ready to transform your Sprinter into a luxurious and personalized haven on wheels? At CMC, we specialize in crafting bespoke car interiors that seamlessly blend style, comfort, and functionality. Our Sprinter car decor service is tailored to elevate your driving experience, whether you're a business owner looking to enhance your corporate fleet or an individual seeking a touch of sophistication. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.</p>
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
                    <h1 className="text-3xl font-bold mb-5">Why Choose Our Sprinter Car Decor Service?</h1>
                    <div className="space-y-4">
                        <p className="opacity-80 "><span className='font-bold'>Tailored Elegance:</span>  Our expert designers understand that each client is unique. We work closely with you to tailor the interior decor to your specific preferences, ensuring a touch of elegance that reflects your style.</p>

                        <p className="opacity-80 "><span className='font-bold'>Premium Materials:</span> We source and use only the finest materials, ensuring durability, comfort, and a luxurious feel. From high-quality leather upholstery to stylish trim options, every detail is meticulously selected for a premium finish.
                        </p>

                        <p className="opacity-80 "><span className='font-bold'>Comfort Redefined </span>  Experience the ultimate in comfort with ergonomically designed seating and carefully curated interior layouts. Whether it's a spacious executive Sprinter or a cozy camper van, our designs prioritize your comfort during every journey.</p>

                        <p className="opacity-80 "><span className='font-bold'>Innovative Technology:</span> Stay connected and entertained on the road with our integration of cutting-edge technology. From advanced audio-visual systems to smart connectivity features, we bring the latest innovations to your Sprinter's interior.</p>

                        <p className="opacity-80 "><span className='font-bold'>Branding Integration:</span>For businesses utilizing Sprinters for transportation, we offer seamless branding integration. Elevate your corporate image by incorporating logos, color schemes, and brand elements into the interior design.
                        </p>

                        <p className="opacity-80 "><span className='font-bold'>Safety and Compliance:</span>Our designs prioritize safety without compromising on aesthetics. We ensure that your Sprinter meets all safety standards and regulations, providing peace of mind on every journey.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sprinter;