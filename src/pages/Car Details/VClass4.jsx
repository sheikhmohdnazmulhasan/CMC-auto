import img1 from '../../assets/Car details/2/VIP4 (1).jpg';
import img2 from '../../assets/Car details/2/VIP4 (2).jpg';
import img3 from '../../assets/Car details/2/VIP4 (3).jpg';
import img4 from '../../assets/Car details/2/VIP4 (4).jpg';

const VClass4 = () => {
    return (
        <div className="mt-20 " data-aos="fade-left">
            <div className="mx-5 md:mx-10">
                <h1 className="text-3xl font-bold">Transform Your V Class 4 Seats with Our Exclusive Car Decoration Services</h1>
                <p className="opacity-80 mt-4">Discover the perfect blend of comfort and style with our V Class 4 Seats car decoration service. Whether you use your V Class for business or leisure, our team of skilled decorators is dedicated to enhancing your driving environment. From refined leather finishes to personalized accessories, we offer a wide range of options to suit your preferences.</p>
            </div>
            <div className="mt-10">
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src={img1} className="w-[100px]" />
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
                <h1 className="text-3xl font-bold mb-5">Why Choose Our V Class 4 Seats Car Decor Service?</h1>
                <div className="space-y-4">
                    <p className="opacity-80 "><span className='font-bold'>Personalization Excellence:</span> Elevate your V Class 4 Seats with our car decoration service that excels in personalization. Our expert designers ensure that your vehicle reflects your individual taste and lifestyle with tailor-made interior decor</p>

                    <p className="opacity-80 "><span className='font-bold'>Attention to Detail:</span> Every stitch, every accent – we pay attention to the smallest details. Our commitment to perfection ensures a flawlessly customized interior, from premium leather seat covers to woodgrain accents.</p>

                    <p className="opacity-80 "><span className='font-bold'>Variety of Options:</span> Explore a wide range of customization options to suit your preferences. From refined leather finishes to personalized accessories, we offer a variety of choices to create a unique and eye-catching V Class 4 Seats interior.</p>

                    <p className="opacity-80 "><span className='font-bold'>Luxurious Comfort:</span> Indulge in the perfect blend of comfort and style. Our V Class 4 Seats car decoration prioritizes luxurious comfort with comfortable and durable seat covers, ensuring a premium driving experience.</p>

                    <p className="opacity-80 "><span className='font-bold'>Functional Design:</span>Our designs go beyond aesthetics. We provide functional design solutions, optimizing interior space for both practicality and style. Choose [Your Company Name] for a V Class 4 Seats car decor that combines luxury with functionality seamlessly.
                    </p>

                    <p className="opacity-80 "><span className='font-bold'>Safety First:</span> Your safety is our priority. Our V Class 4 Seats car decoration service ensures that your vehicle meets all safety standards and regulations, providing a secure and stylish journey.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default VClass4