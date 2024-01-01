import img1 from '../../assets/Car details/3/Falcon6 (11).jpg';
import img2 from '../../assets/Car details/3/Falcon6 (5).jpg';
import img3 from '../../assets/Car details/3/Falcon6 (8).jpg';
import img4 from '../../assets/Car details/3/Falcon6 (9).jpg';
const Falcon = () => {
    return (
        <div className="mt-20" data-aos="fade-left">
            <div className="mx-5 md:mx-10">
                <h1 className="text-3xl font-bold">Unleash the Power of Style with Our Falcon Car Decoration Services</h1>
                <p className="opacity-80 mt-4">Step into the extraordinary with our Falcon car decoration services. Elevate the interior of your Falcon to match its powerful performance. Our skilled decorators combine craftsmanship and innovation to create a customized interior that complements the dynamic nature of the Falcon.</p>
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
                <h1 className="text-3xl font-bold mb-5">Why Choose Our Falcon Car Decor Service?</h1>
                <div className="space-y-4">
                    <p className="opacity-80 "><span className='font-bold'>Dynamic Design:</span>  Transform your Falcon with our dynamic car decoration service. Our expert designers infuse performance-inspired elements, ensuring your Falcon's interior complements its powerful nature with a touch of style.</p>

                    <p className="opacity-80 "><span className='font-bold'>Precision Craftsmanship:</span> At CMC, precision is our hallmark. Every detail is meticulously crafted to achieve a flawless finish. From cutting-edge materials to innovative design, experience the epitome of quality in every aspect of your Falcon's interior.</p>

                    <p className="opacity-80 "><span className='font-bold'>Customization Excellence: </span> Tailor your Falcon's interior to your preferences. Our customization options range from carbon fiber accents to sporty color schemes, allowing you to create a driving environment that resonates with your individual taste.</p>

                    <p className="opacity-80 "><span className='font-bold'>High-Tech Interior:</span> Immerse yourself in technology with our Falcon car decor. Enjoy the latest audio-visual systems and smart connectivity features, enhancing your driving experience with the best in modern innovation.</p>

                    <p className="opacity-80 "><span className='font-bold'>Distinctive Branding:</span>For corporate users, we seamlessly integrate branding elements into your Falcon's interior. Elevate your brand image with logos, color schemes, and brand elements incorporated into the design.
                    </p>

                    <p className="opacity-80 "><span className='font-bold'>Safety Assurance:</span>Your safety is our priority. Our Falcon car decoration service ensures that your vehicle complies with all safety standards and regulations, providing a secure and stylish journey.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Falcon;